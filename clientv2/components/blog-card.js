import { Card } from 'react-bootstrap';

export default function BlogCard ({ title, slug }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Link href={`/blog/${encodeURIComponent(slug.current)}`}>Read</Card.Link>
            </Card.Body>
        </Card>
    )
}