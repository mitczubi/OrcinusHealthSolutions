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
                                <p className={`${styles.listParagraph}`}>
                                    We offer a variety of workshops
                                    intended to drive individual and team
                                    performance by teaching effective tools
                                    and processes within a collaborative
                                    group environment. Topics and content
                                    are customizable to your organization’s
                                    current challenges. Examples include:
                                    <ul>
                                        <li>Navigational Conversations</li>
                                        <li>Effective Time Management</li>
                                        <li>Strategic Planning</li>
                                        <li>Effective Goal Setting</li>
                                        <li>Building Effective Teams</li>
                                    </ul>
                                </p>
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>Longitudinal Cohort Programs</h3>
                                <p className={`${styles.listParagraph}`}>
                                    The Executive Coaching Program is
                                    a partnership between a coach and a
                                    healthcare leader designed to create
                                    a collaborative process that inspires
                                    the leader to maximize her or his
                                    personal and professional potential.
                                    This program utilizes behavioral
                                    assessments, as well as 360 degree
                                    feedback, to formulate a plan that
                                    builds upon professional skills in a
                                    variety of areas.
                                </p>
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>Executive Coaching</h3>
                                <p className={`${styles.listParagraph}`}>
                                    We believe that the development of
                                    highly skilled physician leaders will bring
                                    about the desired change to healthcare
                                    delivery. To that end, we have taken
                                    FocalPoint's executive training program
                                    and contextualized this unique program
                                    for the critical role that physicians fill in
                                    healthcare leadership and
                                    transformation. This group coaching
                                    program serves as a glidepath to
                                    optimizing the physician's leadership
                                    skillset while simultaneously tackling the
                                    real issues impacting leaders today.
                                </p>
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}