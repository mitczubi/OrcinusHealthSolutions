import { useState, useEffect } from "react";
import "./styles/Homepage.css";
import { Container, Row, Col, Image, Navbar, Nav } from "react-bootstrap";

function Homepage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundOpacity = Math.min(scrollY / (2 * window.innerHeight) * 1.5, 0.8)
  const backgroundColor = `rgba(67, 84, 105, ${backgroundOpacity}`;
  const blurAmount = Math.min(scrollY / window.innerHeight, 0.8) * 10;

  return (
    <>
      <video autoPlay muted loop style={{ filter: `blur(${blurAmount}px)` }}>
        <source src="https://orcinus.s3.amazonaws.com/orcas.webm" type="video/webm" />
      </video>
      <Navbar sticky="top" expand="lg" className="me-auto navbar-custom">
        <Container>
          <Navbar.Brand className="navbar-text-custom">
            Orcinus
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link className="navbar-text-custom" href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-text-custom" href="/blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-text-custom" href="/news">News</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="viewport-header" style={{ background: backgroundColor }}>
        <h1>
          <span className="hero-text">
            Orcinus Health Solutions
          </span>
        </h1>
      </header>
      <main style={{ background: backgroundColor }}>
        
        <Container>
          <Row className="profile-row">
            <Col>
              <div className="profile-card">
                <Image
                  className="profile-picture"
                  src="/media/photo_kristen.png"
                  alt="Dr. Kristen Woods"
                  roundedCircle
                />
                <div className="profile-blurb">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                    eget.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="profile-card">
                <Image
                  className="profile-picture"
                  src="/media/photo_paul.png"
                  alt="Dr. Paul Woods"
                  roundedCircle
                />
                <div className="profile-blurb">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                    eget.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="p-5">
              <div className="centered">
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
                <h1 className="centered">Why the Orca?</h1>
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
                <div className="centered">
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
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Homepage;
