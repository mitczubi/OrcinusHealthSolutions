import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Services from "@/components/services.js";
import styles from "../styles/Home.module.css";
import { getProfiles } from "@/utils/get_profile";

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

export default function Home({ profiles }) {
  const [scrollY, setScrollY] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(0);

  const kristen = findProfileByName(profiles, 'Kristen')
  const paul = findProfileByName(profiles, 'Paul')

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
          <source src="https://orcinus.s3.amazonaws.com/orcas.mp4" type="video/mp4"/>
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
                  src={kristen.homepageUrl}
                  alt="Dr. Kristen Woods"
                  roundedCircle
                />
                <div className={styles.profileBlurb}>
                  <p>
                    {kristen.biography}
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className={styles.profileCard}>
                <Image
                  className={styles.profilePicture}
                  src={paul.homepageUrl}
                  alt="Dr. Paul Woods"
                  roundedCircle
                />
                <div className={styles.profileBlurb}>
                  <p>
                    {paul.biography}
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
