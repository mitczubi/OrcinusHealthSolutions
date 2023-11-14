import client from "@/sanity-client";
import groq from "groq";
import { Container, Row, Col } from "react-bootstrap";
import { PortableText } from "@portabletext/react";
import styles from "@/styles/Blog/Blog.module.css";


export default function Post ({ post }) {
    const {
        title = 'Missing Title',
        name = 'Missing Author',
        categories,
        body = []
    } = post

    return (
        <>
            <Container md="auto" className={`my-5`}>
                <Row>
                    <Col md={{ offset: 4 }}>
                        <h2>{title}</h2>
                        <p>By {name}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className={`${styles.blogSideContent}`}>
                        <ol className="list-unstyled m-auto p-2 bg-light">
                            {categories && (
                                categories.map(category => <li key={category}>{category}</li>)
                            )}
                        </ol>
                    </Col>
                    <Col md={8} className={`${styles.blogMainContent}`}>
                        <PortableText
                            value={body}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    body
}`

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: {slug} })),
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params
    const post = await client.fetch(query, { slug })

    return {
        props: {
            post
        },
        revalidate: 10
    }
}