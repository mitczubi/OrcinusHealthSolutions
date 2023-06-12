import React from 'react';
import Navbar from '../components/navbar/navbar.component';
import Footer from '../components/footer/footer.component';
import Hero from '../components/hero/hero.component';
import TextFeature from '../components/text-feature/text-feature.component';
import SplitFeatureLeft from '../components/split-feature-left/split-feature-left.component';

function AboutPage() {
    const textFeatureTitle = "About Us";
    const textFeatureParagraphs = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo in. Diam vel quam elementum pulvinar etiam non quam lacus. A scelerisque purus semper eget duis at tellus at urna. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Quis commodo odio aenean sed adipiscing. Mattis vulputate enim nulla aliquet porttitor. Facilisis volutpat est velit egestas dui. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Interdum posuere lorem ipsum dolor sit amet consectetur. Diam maecenas ultricies mi eget mauris pharetra et. Eget magna fermentum iaculis eu non diam phasellus. Lacinia quis vel eros donec ac odio. Volutpat consequat mauris nunc congue nisi vitae suscipit. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Pretium nibh ipsum consequat nisl.",
        "Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Arcu ac tortor dignissim convallis. Feugiat vivamus at augue eget arcu dictum varius duis at. Et leo duis ut diam. Cursus metus aliquam eleifend mi in. Dolor magna eget est lorem ipsum dolor sit. Vel risus commodo viverra maecenas accumsan. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Rutrum quisque non tellus orci ac auctor augue. Feugiat pretium nibh ipsum consequat nisl vel. Placerat orci nulla pellentesque dignissim enim. Lorem sed risus ultricies tristique. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Aenean pharetra magna ac placerat vestibulum. Id velit ut tortor pretium viverra suspendisse potenti. Sed nisi lacus sed viverra tellus in hac habitasse platea. Et pharetra pharetra massa massa ultricies. Molestie a iaculis at erat pellentesque adipiscing commodo. Vitae proin sagittis nisl rhoncus mattis rhoncus.",
        "Lorem mollis aliquam ut porttitor leo a diam. Amet cursus sit amet dictum sit amet justo donec. Porttitor eget dolor morbi non arcu. Faucibus vitae aliquet nec ullamcorper sit. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Placerat in egestas erat imperdiet sed. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Aliquet bibendum enim facilisis gravida neque convallis. Facilisi cras fermentum odio eu. At quis risus sed vulputate odio ut enim blandit volutpat. At elementum eu facilisis sed odio morbi quis commodo odio. At erat pellentesque adipiscing commodo elit at imperdiet dui. Nunc sed id semper risus in. Porta nibh venenatis cras sed felis eget velit.",
    ]

    const splitFeatureLeftTitle = "Who we are";
    const splitFeatureLeftText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam nulla porttitor. Volutpat sed cras ornare arcu dui vivamus arcu felis. Tempus urna et pharetra pharetra massa. Eget egestas purus viverra accumsan in. Enim neque volutpat ac tincidunt vitae semper quis.";
    const splitFeatureImageUrl = "https://picsum.photos/id/129/470/"

    return (
        <div>
            <Navbar />
            <Hero />
            <TextFeature title={textFeatureTitle} paragraphs={textFeatureParagraphs} />
            <SplitFeatureLeft title={splitFeatureLeftTitle} text={splitFeatureLeftText} imageUrl={splitFeatureImageUrl} />
            <Footer />
        </div>
    )
}

export default AboutPage;