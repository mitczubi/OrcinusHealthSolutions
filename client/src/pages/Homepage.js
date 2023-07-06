import React from "react";
import Navbar from "../components/navbar/navbar.component";
import Hero from "../components/hero/hero.component";
import ProfileSplitFeature from "../components/split-feature/split-feature.component";
import ThreeSquareFeature from "../components/three-square-feature/three-square-feature.component";
import Footer from "../components/footer/footer.component";
import styles from "./styles/Homepage.module.css";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className={styles["homepageHero"]}>
        <Hero />
      </div>
      <div className={styles["homepageSplitFeature"]}>
        <ProfileSplitFeature />
      </div>
      <ThreeSquareFeature />
      <Footer />
    </div>
  );
}

export default Homepage;
