import React from "react";
import Navbar from '../components/navbar/navbar.component';
import Hero from "../components/hero/hero.component";
import ProfileSplitFeature from "../components/split-feature/split-feature.component";
import ThreeSquareFeature from "../components/three-square-feature/three-square-feature.component";
import SplitFeatureLeft from "../components/split-feature-left/split-feature-left.component";
import Footer from "../components/footer/footer.component";

function Homepage() {
    const splitFeatureTitle = "About Us"
    const splitFeatureText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim massa at aliquam venenatis. Quisque efficitur fermentum turpis, vitae aliquam felis cursus nec. Integer eget lectus consequat, luctus elit in, accumsan erat. Sed suscipit orci a enim feugiat, at finibus justo sagittis. Nam eget velit ac libero laoreet finibus vel id diam. Suspendisse gravida, libero nec lobortis commodo, nisi massa varius elit, at laoreet metus nibh non diam."

    return (
        <div>
            <Navbar />
            <Hero />
            <ProfileSplitFeature />
            <ThreeSquareFeature />
            <SplitFeatureLeft imageUrl="https://picsum.photos/id/129/470/" title={splitFeatureTitle} text={splitFeatureText}/>
            <Footer />
        </div>
    )
}

export default Homepage;