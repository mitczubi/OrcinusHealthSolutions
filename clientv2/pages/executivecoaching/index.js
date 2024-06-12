import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaChevronDown } from "react-icons/fa";
import styles from "@/styles/Coaching.module.css"

export default function ExecutiveCoaching() {
    const [drawerStates, setDrawerStates] = useState({
        drawer1: false,
        drawer2: false,
        drawer3: false,
        drawer4: false
    })

    const toggleDrawer = (drawerKey) => {
        setDrawerStates((prevDrawerStates) => ({
            ...prevDrawerStates,
            [drawerKey]: !prevDrawerStates[drawerKey]
        }))
    }

    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col md={{span: 10, offset: 1}}>
                        <h1>
                            Executive Coaching
                        </h1>
                        
                        <p>
                        As certified Business and Executive Coaches through FocalPoint Coaching and Training, we
                        bring compassion and expertise to our work with healthcare and other executives. With
                        FocalPoint’s exceptional training, resources, and support, we help leaders enhance their skills,
                        capabilities, and work-life balance, empowering them to achieve their personal and professional
                        goals. Together, we elevate not just individual leaders but entire organizations, guiding them to
                        reach new heights of success and fulfillment. Join us to transform your leadership journey and
                        make a lasting impact on your organization.
                        </p>
                        <p>
                            We provide support to leaders and organizations through an array of options:
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset: 1}}>
                        <ol role="list" className={`p-0 ${styles.listParent}`}>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>
                                    Assessments
                                    <button className={`${styles.drawerButton}`} onClick={() => toggleDrawer('drawer1')}>
                                        <FaChevronDown />
                                    </button>
                                </h3>
                                {drawerStates.drawer1 && (
                                    <p className={`${styles.listParagraph}`}>
                                        Begin your journey to unlocking your full potential with us. We offer a range of assessments to
                                        help you gain insights into yourself, your team members, and your team dynamics. This
                                        foundational step is essential for improving communication and boosting overall team
                                        performance.
                                    </p>
                                )}
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>
                                    Workshops
                                    <button className={`${styles.drawerButton}`} onClick={() => toggleDrawer('drawer2')}>
                                        <FaChevronDown />
                                    </button>
                                </h3>
                                {drawerStates.drawer2 && (
                                    <div>
                                        <p className={`${styles.listParagraph}`}>
                                        We provide a range of workshops designed to enhance individual and team performance by
                                        teaching effective tools and processes in a collaborative setting. Our topics and content are
                                        customizable to address your organization’s specific challenges. Examples include:   
                                        </p>
                                        <ul>
                                            <li>Trust Edge Framework</li>
                                            <li>Navigational Conversations&#174;</li>
                                            <li>Communications Breakthrough</li>
                                            <li>Effective Time Management</li>
                                            <li>Strategic Planning</li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>
                                    Executive Coaching
                                    <button className={`${styles.drawerButton}`} onClick={() => toggleDrawer('drawer3')}>
                                        <FaChevronDown />
                                    </button>
                                </h3>
                                {drawerStates.drawer3 && (
                                    <p className={`${styles.listParagraph}`}>
                                        Our Executive Coaching Program is a transformative partnership between coach and healthcare
                                        leader, designed to ignite your journey towards personal and professional excellence.
                                        Leveraging behavioral assessments and comprehensive 360-degree feedback, we work
                                        together to define your goals, chart your course, and measure progress as you navigate your
                                        path to success. Experience the freedom to customize your growth and take your leadership to
                                        extraordinary heights with our Executive Coaching Program.
                                    </p>
                                )}
                            </li>
                            <li className={`${styles.listItem}`}>
                                <h3 className={`${styles.listHeader}`}>
                                    Longitudinal Cohort Programs
                                    <button className={`${styles.drawerButton}`} onClick={() => toggleDrawer('drawer4')}>
                                        <FaChevronDown />
                                    </button>
                                </h3>
                                {drawerStates.drawer4 && (
                                    <p className={`${styles.listParagraph}`}>
                                        At the heart of our mission is the belief that nurturing highly skilled physician leaders is
                                        paramount to revolutionizing healthcare delivery. That is why we have meticulously tailored
                                        FocalPoint&#39;s executive training program to meet the distinct needs of physicians in leadership
                                        roles within healthcare. Our customizable group coaching program acts as a strategic pathway,
                                        guiding physicians to optimize their leadership capabilities while directly addressing the pressing
                                        challenges faced by leaders in the field today.
                                    </p>
                                )}
                            </li>
                        </ol>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}