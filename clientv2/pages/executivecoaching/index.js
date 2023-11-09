import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/Coaching.module.css"

export default function ExecutiveCoaching() {
    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col md={{span: 10, offset: 1}}>
                        <h1>
                            Executive Coaching
                        </h1>
                        <p>
                            We are certified Business and Executive Coaches 
                            through FocalPoint Business Coaching.  
                            Through FocalPoint’s exceptional training, resources 
                            and support, we are able to work with healthcare 
                            and other executives to bring their skills, 
                            capabilities, and worklife balance to the level 
                            they wish them to be, and in so doing lift their 
                            organizations to new heights of achievement.
                        </p>
                        <p>
                            We provide support to leaders and organizations through an array of options:
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset: 1}}>
                        <ol role="list" className={`p-0 ${styles.listParent}`} >
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>Assessments</h3>
                                <p className={`${styles.listParagraph}`}>
                                    We administer and debrief a variety of assessments that will 
                                    help you to understand yourself, members of your team, and 
                                    your team dynamics to optimize communication and team performance.
                                </p>
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>Workshops</h3>
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>Longitudinal Cohort Programs</h3>
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>Individual 1:1 coaching for executives</h3>
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>Individual 1:1 coaching for physician practice owner/leaders</h3>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}