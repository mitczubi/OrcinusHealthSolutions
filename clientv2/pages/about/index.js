import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../../styles/About.module.css";

export default function About() {
    return (
        <>
            <div className={`${styles.wrapperDiv}`}>
                <video playsInline autoPlay muted loop className={styles.bgVideo}>
                    <source src="https://orcinus.s3.amazonaws.com/orcas.mp4" type="video/mp4"/>
                    {/* <source src="https://orcinus.s3.amazonaws.com/orcas.webm" type="video/webm" /> */}
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
                                        leaders, and subject matter experts to work collaboratively (with you and your organization) 
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
                                        src="/media/photo_kristen.png"
                                        alt="Dr. Kristen Woods"
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={`${styles.aboutText}`}>
                                    <p className={`text-left`}>
                                        Kristen Woods is a certified business and executive coach 
                                        focused on supporting and elevating women physician leaders 
                                        and their allies as a path to addressing gender equity in 
                                        the C-suite, improving healthcare leadership and eliminating 
                                        moral distress in healthcare.
                                    </p>
                                    <p className={`text-left`}>
                                        As a coach, Dr. Woods brings forward her experience as a leader
                                        in population health and medical group operations.  She currently 
                                        serves as the SVP of Network and Physician Experience for 
                                        Southwestern Health Resources, one of three ACOs in the country 
                                        to earn the Leaders in Quality Excellence Award by the National 
                                        Association of Accountable Care Organizations in 2023. In addition, 
                                        SWHR clinically integrated network has generated more than $150 
                                        million in Medicare shared savings while maintaining high 
                                        quality scores.  Prior to joining the ACO, Dr. Woods served as the 
                                        President of Trinity Health Medical Group, West Michigan – a 
                                        multispecialty medical group consisting of over 800 providers and 
                                        95 clinics. In this role, she has responsibility for strategy design, 
                                        clinical and financial operations, and cultural integration.  
                                        Previously, she held executive positions as Vice President of Mercy 
                                        Health Physician Partners, Muskegon - a 250-provider medical group 
                                        with 42 clinics - and Medical Director of National Solutions at Blue 
                                        Cross Blue Shield of Michigan.  She practiced as a family physician 
                                        for 13 years prior to starting her executive career.  She has 
                                        extensive background in practice and organizational transformation 
                                        having led the evolution to patient centered medical homes 
                                        locally and the integration of a large, complex multispecialty 
                                        medical group.  She received her Masters of Medical Management degree 
                                        from Carnegie Mellon University, Heinz School of Business and her 
                                        Medical Degree from Michigan State University, College of Human Medicine.
                                    </p>
                                    <p className={`text-left`}>
                                        Kristen is an avid runner, yogi, and exercise enthusiast. She enjoys 
                                        spending time with her spouse, interacting with nature, and watching 
                                        her children play collegiate soccer.  As a curious learner and a lover 
                                        of music, she has attempted to learn to play piano as an adult.<br /> <br />
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
                                        src="/media/photo_paul.png"
                                        alt="Dr. Paul Woods"
                                    />
                            </Col>
                            <Col md={6}>
                                <div className={`${styles.aboutText} flex-grow-1`}>
                                    <p className={`text-left`}>
                                        Dr. Paul Woods is a family physician who practiced clinically in both 
                                        rural and urban settings over 25 years in Canada, the USA, and the 
                                        Canadian military.  His leadership career spans more than 15 years.  
                                        He has led a national medical group in the United States comprised of 
                                        over 7,000 providers and served in his native Canada as the President 
                                        and Chief Executive Officer of London Health Sciences Centre, a 
                                        leading academic health institution specializing in advanced care, 
                                        medical research, and training upcoming healthcare professionals. Under 
                                        his leadership, there was a renewed emphasis on quality, the 
                                        introduction of "Just Culture" and "Safety Culture", and the design 
                                        and execution of a Lean Management System.  During his tenure LHSC 
                                        opened its first Indigenous Healing Space, and operationalized Ontario’s 
                                        first publicly-owned Ambulatory Surgery Centre.
                                    </p>
                                    <p className={`text-left`}>
                                        For the past several years Dr. Woods has focused professionally on 
                                        providing consultation to companies looking to grow through value-based 
                                        market strategies.  He has worked with both US-based and Canadian companies, 
                                        from start-up through scale-up and pre-IPO.  His focus on helping companies 
                                        to craft outcome-based product and market strategies is based on his belief 
                                        and experience that healthcare providers don’t need more gadgets and niche 
                                        services; they need partners who can help them to deliver Quintuple Aim outcomes.
                                    </p>
                                    <p className={`text-left`}>
                                        He recently added (with his life and business partner Dr. Kristen Woods) business 
                                        and executive coaching to his professional expertise and is certified as a Business 
                                        and Executive Coach through FocalPoint International.  Healthcare needs leaders 
                                        with deep and broad skills, who are balanced in their lives and understand that 
                                        healthcare deserves better than transactional business models and “No Margin No Mission”.  
                                        Healthcare leaders must lead with their heart.  The best healthcare is a crucial 
                                        right for all in a just and moral society.  By working with many leaders, he aspires 
                                        to help build that cadre of exceptional heart-led and ethically guided executives who 
                                        will deliver health to all.
                                    </p>
                                    <p className={`text-left`}>
                                        Paul is a graduate of Dartmouth College and the University of Western Ontario. 
                                        He loves hiking and cycling with his wife Kristen, and he admits to being hopelessly 
                                        hooked on German Shepherd Dogs.  In addition, he loves hanging out with his adult kids 
                                        and four grandchildren.<br /><br />
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