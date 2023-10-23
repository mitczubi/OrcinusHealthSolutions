import React from "react";
import Navbar from "../components/navbar/navbar.component";
import ProfileSplitFeature from "../components/split-feature/split-feature.component";
import ThreeSquareFeature from "../components/three-square-feature/three-square-feature.component";
import Footer from "../components/footer/footer.component";
import styles from "./styles/Homepage.module.css";
import { Container } from "react-bootstrap";

function Homepage() {
  return (
    <div>
      <Navbar />
      <section>
        <video autoPlay loop muted className={styles["bg-video"]}>
          <source src="https://orcinus.s3.amazonaws.com/orcas.webm" type="video/webm"/>
        </video>
      </section>
      <div className={styles["homepageSplitFeature"]}>
        <ProfileSplitFeature />
      </div>
      <ThreeSquareFeature />
      <Footer />
    </div>
  );
}

export default Homepage;
