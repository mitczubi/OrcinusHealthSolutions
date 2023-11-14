import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./blog-card";
import styles from "@/styles/Blog/BlogList.module.css"

export default function BlogList({ posts }) {
    return (
        <>
            <Container fluid="md" className={`p-3 ${styles.customContainer}`}>
                <Row>
                    {posts.map((blogPost, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className={`py-3`}>        
                            <BlogCard {...blogPost}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}