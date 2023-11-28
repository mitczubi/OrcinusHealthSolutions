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
      <div className={`${styles.videoContainer}`}>
        <video playsInline autoPlay muted loop className={styles.bgVideo} style={{ filter: `blur(${blurAmount}px)` }}>
          <source src="https://orcinus.s3.amazonaws.com/orcas.webm" type="video/webm" />
        </video>
      </div>
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
                    Kristen Woods MD MMM engages with women physician leaders 
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
        </Container>
      </main>
    </>
  )
}
