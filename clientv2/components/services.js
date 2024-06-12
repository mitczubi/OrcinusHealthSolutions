import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/Services.module.css"

export default function Services () {
    return (
        <>
            <Row className={`mt-3 ${styles.servicesRow}`}>
                <Col md={6} className={`my-5 text-center`}>
                    <div className={`${styles.imageCard}`}>
                        <Image
                        src="/media/coaching_executive.png"
                        className={`img-fluid ${styles.featureImage}`}
                        />
                        <h3 className={`my-3`}>
                        Executive Coaching
                        </h3>
                        <p className={`mx-auto ${styles.featureText}`}>
                        Discover the unparalleled advantage of partnering with certified FocalPoint Business and
                        Executive Coaches. Leveraging our extensive backgrounds as physicians, healthcare leaders,
                        and executives, we blend FocalPoint&#39;s proven coaching methodologies with our profound
                        industry expertise. Our tailored coaching services empower healthcare leaders to enhance their
                        skills, drive transformative changes, and make a significant impact on their organizations and
                        the entire healthcare landscape. Transform your leadership and ignite the change you envision
                        with our expert guidance.
                        </p>
                    </div>
                </Col>
                <Col md={6} className={`my-5 text-center`}>
                    <div className={`${styles.imageCard}`}>
                        <Image
                        src="/media/consultation_1.png"
                        className={`img-fluid ${styles.featureImage}`}
                        />
                        <h3 className={`my-3`}>
                        Consulting
                        </h3>
                        <p className={`mx-auto ${styles.featureText}`}>
                        With over four decades of clinical expertise and more than two decades in senior executive
                        roles, we bring a unique and invaluable skill set to healthcare consulting. Our deep
                        understanding of the industry allows us to provide innovative solutions and strategic insights to
                        companies and organizations navigating the complex challenges in healthcare. Partner with us
                        to leverage our unparalleled experience and drive impactful change in your organization.
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}