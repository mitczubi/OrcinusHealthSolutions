import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Consulting.module.css";

export default function Consulting() {
    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col>
                        <div className={`p-1 p-md-4 mb-3 ${styles.heroDiv}`}>
                            <h1>
                                Consulting Services
                            </h1>
                            <p>
                                Healthcare has long focused on “doing something”, 
                                rather than “achieving something”.  As we have 
                                witnessed the failed attempt to transform healthcare 
                                from transaction&#8209;driven to outcome&#8209;driven care 
                                delivery, our passion&#8209;and what has driven our careers&#8209;has 
                                been committing our time and expertise to the 
                                pursuit of value:  What do you get for what you invest?  
                                Value, as determined by patient&#8209;centered and 
                                patient&#8209;reported outcomes, must be the focus for all 
                                health systems &#8209; whether in the chaotic 
                                market&#8209;first/patient&#8209;second US “system”, or a system 
                                philosophically aligned on delivering value but failing 
                                ultimately to achieve it.
                                <br />
                                <br />
                                We believe healthcare must deliver the Quintuple Aim:
                            </p>
                            <ol role="list" className={`p-0 text-center ${styles.listParent}`}>
                                <li className={`${styles.listItem}`}>
                                    Exceptional patient outcomes and experience
                                </li>
                                <li className={`${styles.listItem}`}>
                                    Exceptional health of the population
                                </li>
                                <li className={`${styles.listItem}`}>
                                    Sustainable per capita cost
                                </li>
                                <li className={`${styles.listItem}`}>
                                    Physical and Mental Health of those providing care
                                </li>
                                <li className={`${styles.listItem}`}>
                                    Equitable outcomes across the entire population
                                </li>
                            </ol>
                        </div>
                    </Col>
                </Row>
            </Container>  
        </>
    )
}