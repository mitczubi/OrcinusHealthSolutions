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
                        We are certified FocalPoint Business and Executive coaches. 
                        Through our extensive experience as physicians, healthcare 
                        leaders and executives we merge FocalPoint coaching skills 
                        and resources with deep industry subject matter expertise 
                        to work with healthcare leaders in growing their skills to 
                        become even more effective in bringing desperately needed 
                        changes to their organizations and the entire world of 
                        healthcare.
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
                        As physicians with a combined 4 decades of clinical experience, 
                        and over two decades of senior executive experience, we offer 
                        a unique skill set and perspective to companies and 
                        organizations grappling with many of the thorny challenges 
                        facing healthcare.
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}