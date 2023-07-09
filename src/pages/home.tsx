import { FunctionComponent } from "react";
import Navbar from "components/navbar/navbar";
import Section1 from "components/landing-page-components/homeComponents/section1";
// import Section2 from "../components/landing-page-components/section2";
import Section3 from "components/landing-page-components/homeComponents/section3";
import Section4 from "components/landing-page-components/homeComponents/section4";
import Section5 from "components/landing-page-components/homeComponents/section5";
import Section6 from "components/landing-page-components/homeComponents/section6";

const HomePage: FunctionComponent<{}> = () => {
  return (
    <div className="text-left">
      <Navbar />
      <Section1 />
      {/* <Section2 /> */}
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default HomePage;
