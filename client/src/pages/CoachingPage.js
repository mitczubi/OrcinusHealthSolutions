import React from "react";
import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";
import SplitFeatureLeft from "../components/split-feature-left/split-feature-left.component";
import TextFeature from "../components/text-feature/text-feature.component";
import TestimonialSlidesow from "../components/slideshow/testimonial-slideshow.component";

function CoachingPage() {
  const splitFeatureLeftTitle = "Executive Coaching";
  const splitFeatureLeftText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim massa at aliquam venenatis. Quisque efficitur fermentum turpis, vitae aliquam felis cursus nec. Integer eget lectus consequat, luctus elit in, accumsan erat. Sed suscipit orci a enim feugiat, at finibus justo sagittis. Nam eget velit ac libero laoreet finibus vel id diam. Suspendisse gravida, libero nec lobortis commodo, nisi massa varius elit, at laoreet metus nibh non diam.";
  const splitFeatureLeftImageUrl = "https://picsum.photos/id/155/470/";

  const textTitle = "Extraordinary Executive Coaching";
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus. Vulputate eu scelerisque felis imperdiet. Hendrerit gravida rutrum quisque non tellus. Odio ut enim blandit volutpat maecenas. Est ante in nibh mauris cursus. Sed elementum tempus egestas sed sed. Eget duis at tellus at urna. Neque ornare aenean euismod elementum. Lectus quam id leo in vitae. Sit amet nisl suscipit adipiscing.",
    "Quam id leo in vitae turpis massa sed. Sit amet cursus sit amet dictum sit amet justo. Sed turpis tincidunt id aliquet risus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Eu turpis egestas pretium aenean. Adipiscing elit ut aliquam purus sit amet. Aliquam sem fringilla ut morbi tincidunt augue. Pellentesque id nibh tortor id aliquet lectus proin. Viverra suspendisse potenti nullam ac tortor. Suscipit tellus mauris a diam maecenas. Aenean et tortor at risus viverra adipiscing at. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Mauris ultrices eros in cursus turpis massa. Turpis in eu mi bibendum neque egestas congue. Amet cursus sit amet dictum. Suspendisse interdum consectetur libero id faucibus nisl. Ornare lectus sit amet est placerat in egestas erat. Tincidunt vitae semper quis lectus nulla at volutpat diam ut.",
    "Tempus quam pellentesque nec nam aliquam sem et tortor. Nam aliquam sem et tortor consequat id. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Egestas quis ipsum suspendisse ultrices gravida. Nunc aliquet bibendum enim facilisis gravida. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Molestie at elementum eu facilisis. Malesuada fames ac turpis egestas sed tempus. Amet porttitor eget dolor morbi non arcu risus quis varius. Erat nam at lectus urna. In dictum non consectetur a erat. Consectetur lorem donec massa sapien faucibus et. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.",
  ];

  return (
    <div>
      <Navbar />
      <SplitFeatureLeft
        imageUrl={splitFeatureLeftImageUrl}
        title={splitFeatureLeftTitle}
        text={splitFeatureLeftText}
      />
      <TextFeature title={textTitle} paragraphs={paragraphs} />
      <TestimonialSlidesow />
      <Footer />
    </div>
  );
}

export default CoachingPage;
