import { Container, Row, Col, Image } from "react-bootstrap";
import { getProfiles } from "@/utils/get_profile";
import styles from "../../styles/About.module.css";

export async function getStaticProps() {
    const profiles = await getProfiles();
    return {
      props: {
        profiles,
      },
      revalidate: 10,
    };
}
  
function findProfileByName(profiles, name) {
    for (const profile of profiles) {
      if (profile.name === name) {
        return profile;
      }
    }
    return null;
}

export default function About({ profiles }) {

    const kristen = findProfileByName(profiles, 'Kristen')
    const paul = findProfileByName(profiles, 'Paul')

    return (
        <>
            <div className={`${styles.wrapperDiv}`}>
                <video playsInline autoPlay muted loop className={styles.bgVideo}>
                    <source src="https://orcinus.s3.amazonaws.com/orcas.webm" type="video/webm" />
                    <source src="https://orcinus.s3.amazonaws.com/orcas.mp4" type="video/mp4"/>
                </video>
                <header className={styles.viewportHeader}>
                    <Container className={``}>
                        <Row>
                            <Col className={`overflow-auto`}>
                                <h1 className="pt-4">
                                    <span className={styles.heroText}>
                                    Why the Orca?
                                    </span>
                                </h1>
                                <div className={`${styles.heroSubtext}`}>
                                    <p>
                                        The Orca is the largest member of the dolphin family.  
                                        Nicknamed the “Wolf of the Sea”, she has been memorialized for countless 
                                        centuries in Indigenous cultural teachings, and in the imagination 
                                        and media of modern western cultures.
                                    </p>
                                    <p>
                                        The orca is known to Indigenous Cultures for many things, 
                                        among them family, harmony, and community.  They are admired for their 
                                        intelligence, great athleticism and strength, and tight communication and coordination.  
                                        They are known by some as the Lord or Guardian of the Ocean.  Orcas are highly social, 
                                        travelling in community pods that are multi-generational.  Periodically, pods will come 
                                        together and collaborate to accomplish a particular purpose.  They travel and communicate 
                                        over impossibly great distances.
                                    </p>
                                    <p>
                                        In the hunt, orcas are each highly critical to the accomplishment of their objective.  
                                        They rely on the competency of each other, and the success of the pod is dependent on each member’s 
                                        ability to deliver in a coordinated way.  While each are exceptional, they only achieve their goal 
                                        when all work together and do their part to accomplish a singular shared goal.
                                    </p>
                                    <p>
                                        The movement of health care to deliver on the Quintuple Aim has been too slow and too little.
                                        We believe health care is in an ocean of trouble.<span className="font-weight-bold"> We believe health care needs more orcas.</span>
                                    </p>
                                    <p>
                                        Orcinus Health Solutions brings together highly competent and verifiably accomplished executives, 
                                        leaders, and subject matter experts to work collaboratively with you and your organization 
                                        to accomplish goals in the complex and difficult world of health care.  We are a core pod of experts, 
                                        and as dictated by the situation we add like-minded experts to the pod to accomplish our goal.
                                    </p>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    
                </header>

                <main className={`${styles.mainContent}`}>
                    <Container fluid className={`mb-3 mx-0 p-0 ${styles.missionStatement}`}>
                        <Row style={{maxWidth: '100%'}}>
                            <div className={`py-3 my-2 px-3 mx-auto text-center`}>
                                <p className="mx-0 p-3">
                                    This pod is not about egos.  It is about results.<br />
                                    We rely on each other explicitly.<br />
                                    We trust each other implicitly.<br />
                                    Through our expertise, our approach, and our beliefs<br />
                                     we can accomplish goals that others simply can’t.<br />
                                    We are Orcinus Health Solutions.<br />
                                </p>
                            </div>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="text-center">
                            <h1>
                                <span className={`${styles.heroText}`}>About Us</span>
                            </h1>
                            <hr style={{height: '5px', backgroundColor: 'bisque'}}/>
                        </Row>
                    </Container>
                    <Container className="mt-3 pt-3">
                        <Row className="pb-3">
                            <Col md={6} className={`text-center`}>
                                <div>
                                    <Image 
                                        className={`${styles.featureImage}`}
                                        src={kristen.aboutpageUrl}
                                        alt="Dr. Kristen Woods"
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={`${styles.aboutText}`}>
                                    <p style={{ whiteSpace: 'pre-line'}} className={`text-left`}>
                                        {kristen.aboutBiography}
                                            <br />
                                            You can find Kristen on&nbsp;
                                            <a 
                                            className={`${styles.externalLink}`} 
                                            href="https://www.linkedin.com/in/kristen-woods-0658ab50" 
                                            target="_blank">
                                                LinkedIn
                                            </a>.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <hr style={{height: '2px', backgroundColor: 'bisque'}}/>
                        <Row className={`mt-5 pb-5 ${styles.featureRow}`}>
                            <Col md={6} className={`text-center`}>
                                    <Image 
                                        className={`img-fluid ${styles.featureImage}`}
                                        src={paul.aboutpageUrl}
                                        alt="Dr. Paul Woods"
                                    />
                            </Col>
                            <Col md={6}>
                                <div className={`${styles.aboutText} flex-grow-1`}>
                                    <p style={{ whiteSpace: 'pre-line'}} className={`text-left`}>
                                        {paul.aboutBiography}
                                    <br/>   
                                    You can find Paul on&nbsp;
                                    <a 
                                        className={`${styles.externalLink}`} 
                                        href="http://linkedin.com/in/paul-woods-md-ms-150b6413" 
                                        target="_blank">
                                            LinkedIn
                                    </a>. 
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        </>
    )
}