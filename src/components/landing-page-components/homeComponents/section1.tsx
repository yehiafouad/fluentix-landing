import { Button, Col, Row } from "antd";
import heroImg from "assets/images/home/home-bg.png";
import useMediaQuery from "hooks/use-media-query";
import { PlusOutlined } from "@ant-design/icons";

const Section1 = () => {
  const isSmall = useMediaQuery("(max-width: 767px)");

  return (
    <section className="lg:py-10 lg:px-16">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="order-2 lg:order-1 px-5 lg:px-0">
          <div>
            <h2 className="lg:text-[50px] lg:leading-[4rem] text-2xl font-[500] text-red-500 mb-4">
              Better English. <br /> Greater Career Opportunities
            </h2>
            {/* <h1 className="md:text-5xl text-3xl font-medium text-gray-700"></h1> */}
            <p className="md:text-xl text-base text-grey-600 mb-0 lg:w-3/4 w-11/12">
              An easier, interesting way for excellent English speaking. <br />
            </p>
            <p className="font-medium md:text-xl text-base text-grey-600 mt-3 mb-0">
              Start your online English course now and:
            </p>
            <ul className="leading-6 font-medium text-gray-500 ml-3">
              <li>
                <PlusOutlined className="inline-block align-middle -mt-[3px] mr-2" />{" "}
                Get your FREE placement test
              </li>
              <li>
                <PlusOutlined className="inline-block align-middle -mt-[3px] mr-2" />{" "}
                Get your FREE session and see how we advance!
              </li>
            </ul>
          </div>

          <div className="flex gap-3 items-center">
            <Button type="primary" className="m-0" shape="round" size={"large"}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 mb-5 lg:mb-0">
          <img
            src={heroImg}
            className="object-cover lg:w-3/4 w-full mx-auto lg:rounded-lg drop-shadow-lg"
          />
        </div>
      </div>
      {/* <Row justify={"space-between"} align={"middle"}>
        <Col
          span={12}
          pull={0}
          xs={24}
          xl={12}
          md={12}
          className={`${isSmall ? "pl-16" : "pl-16"} md:pb-0 pb-16`}
          order={isSmall ? 2 : 1}
        >
          <div className="mb-4">
            <h2 className="lg:text-[50px] leading-[4rem] text-3xl font-[500] text-red-500 mb-4">
              Better English. <br /> Greater Career Opportunities
            </h2>
            <p className="md:text-xl text-base text-grey-600 mb-0 lg:w-3/4 w-11/12">
              An easier, interesting way for excellent English speaking. <br />
            </p>
            <p className="font-medium md:text-xl text-base text-grey-600 mt-3 mb-0">
              Start your online English course now and:
            </p>
            <ul className="leading-6 font-medium text-gray-500 ml-3">
              <li>
                <PlusOutlined className="inline-block align-middle -mt-[3px] mr-2" />{" "}
                Get your FREE placement test
              </li>
              <li>
                <PlusOutlined className="inline-block align-middle -mt-[3px] mr-2" />{" "}
                Get your FREE session and see how we advance!
              </li>
            </ul>
          </div>

          <div className="flex gap-3 items-center">
            <Button type="primary" className="m-0" shape="round" size={"large"}>
              Get Started
            </Button>
          </div>
        </Col>
        <Col
          span={13}
          push={0}
          xs={24}
          xl={13}
          md={13}
          order={isSmall ? 1 : 2}
          className={isSmall ? "mb-10" : ""}
        >
          <div className="">
            <img
              src={heroImg}
              className="object-cover w-3/4 mx-auto rounded-lg drop-shadow-lg"
            />
          </div>
        </Col>
      </Row> */}
    </section>
  );
};

export default Section1;
