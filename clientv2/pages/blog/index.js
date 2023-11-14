import groq from "groq";
import client from "../../sanity-client";
import BlogList from "@/components/blog-list";

export default function Blog({ posts }) {
    return (
        <>
            <BlogList posts={posts} />
        </>
    )
}

const query = groq`
    *[_type == "post" && publishedAt < now()] |
    order(publishedAt desc)
    `

export async function getStaticProps() {
    const posts = await client.fetch(query);

    return {
        props: {
            posts
        },
        revalidate: 10
    }
}