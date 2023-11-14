import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Services from "@/components/services.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleBoxScroll = () => {
      setScrollPosition(window.scrollY);
    }

    if (typeof window !== "undefined") {
      window.addEventListener('scroll', handleBoxScroll);

      return () => {
        window.removeEventListener('scroll', handleBoxScroll)
      }
    }
  }, []);

  const slideLeft = scrollPosition > 175;
  const slideRight = scrollPosition < 100;


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const backgroundOpacity = Math.min(scrollY / (2 * (typeof window !== 'undefined' ? window.innerHeight : 0)) * 1.5, 0.8)
  const backgroundColor = `rgba(67, 84, 105, ${backgroundOpacity}`;
  const blurAmount = Math.min(scrollY / (typeof window !== 'undefined' ? window.innerHeight : 0), 0.8) * 10;
  

  return (
    <>
      <video autoPlay muted loop className={styles.bgVideo} style={{ filter: `blur(${blurAmount}px)` }}>
        <source src="https://orcinus.s3.amazonaws.com/orcas.webm" type="video/webm" />
      </video>
      <header className={styles.viewportHeader} style={{ background: backgroundColor }}>
        <Container>
          <h1 className="mb-0">
            <span className={`${styles.heroTitle} pb-0 mb-0`}>Orcinus</span>
          </h1>
          <h1>
            <span className={styles.heroText}>
              Health Solutions
            </span>
          </h1>
          <p className={`${styles.heroSubtext}`}>Working together to create a Healthcare world where ‘health’ and ‘care’ are the outcomes for all</p>
        </Container>
      </header>

      <main className={styles.mainContent} style={{ background: backgroundColor }}>
        <Container fluid>
          <Row className={styles.profileRow}>
            <Col>
              <div className={styles.profileCard}>
                <Image
                  className={styles.profilePicture}
                  src="/media/kristen_profile.jpg"
                  alt="Dr. Kristen Woods"
                  roundedCircle
                />
                <div className={styles.profileBlurb}>
                  <p>
                    Kristen Woods MD MMM engages with female physician leaders 
                    and their allies as a path to address gender equity in 
                    healthcare leadership and to amplify physicians' voices in 
                    improving the delivery of healthcare while reducing moral 
                    distress. She partners with healthcare leaders to advance 
                    their leadership skills, optimize their teams’ performance, 
                    and build cultures that attract and retain talent in order 
                    to make their organizations thrive. A focus on personal 
                    wellbeing is integrated to ensure success in all aspects 
                    of a balanced life. She is a family physician with 
                    extensive experience in population health, change management, 
                    and medical group operations.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles.profileCard}>
                <Image
                  className={styles.profilePicture}
                  src="/media/paul_profile.jpg"
                  alt="Dr. Paul Woods"
                  roundedCircle
                />
                <div className={styles.profileBlurb}>
                  <p>
                    Paul Woods MD MS has devoted his career to changing Healthcare 
                    for the betterment of all, from frontline care through clinical 
                    and executive leadership to advocacy on the policy and payment 
                    front. He is a family physician, senior healthcare executive, 
                    and executive coach committed to leveraging his 37 years of 
                    experience to make healthcare better, safer, more people-centered, 
                    and equitable.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Services />

          {/* <Row>
            <Col md={{ span: 6, offset: 3 }} className="p-5">
              <div className={styles.centered}>
                <h1>Our Commitment</h1>
                <p>
                  We commit to devoting our time, our resources and our passion 
                  to working with others to make the world better, safer and kinder.  
                  To bring joy to those with whom we work and to those we serve.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div>
                <h1 className={styles.centered}>Why the Orca?</h1>
                <div className="pt-3">
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
                      We believe health care is in an ocean of trouble.<span className="big-and-bold"> We believe health care needs more orcas.</span>
                  </p>
                  <p>
                    Orcinus Health Solutions brings together highly competent and verifiably accomplished executives, 
                    leaders, and subject matter experts to work collaboratively (with you and your organization) 
                    to accomplish goals in the complex and difficult world of health care.  We are a core pod of experts, 
                    and as dictated by the situation we add like-minded experts to the pod to accomplish our goal.
                  </p>
                </div>
                <div className={`pb-3 mb-2 ${styles.centered}`}>
                  <p>
                    This pod is not about egos.  It is about results.<br />
                    We rely on each other explicitly.<br />
                    We trust each other implicitly.<br />
                    Through our expertise, our approach, and our beliefs we can accomplish goals that others simply can’t.<br />
                    We are Orcinus Health Solutions.<br />
                  </p>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </main>
    </>
  )
}
