import { Button, Col, Row } from "antd";
import heroImg from "assets/images/home/home-bg.png";
import useMediaQuery from "hooks/use-media-query";
import { PlusOutlined } from "@ant-design/icons";

const Section1 = () => {
  const isSmall = useMediaQuery("(max-width: 767px)");

  return (
    <section className=" py-10">
      <Row justify={"space-between"} align={"middle"}>
        <Col
          span={10}
          pull={0}
          xs={24}
          xl={10}
          md={10}
          className={`${isSmall ? "pl-16" : "pl-16"} md:pb-0 pb-16`}
          order={isSmall ? 2 : 1}
        >
          <div className="mb-4">
            <h2 className="lg:text-4xl text-3xl font-[500] text-red-500 mb-4">
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
        </Col>
        <Col
          span={14}
          push={0}
          xs={24}
          xl={14}
          md={14}
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
      </Row>
    </section>
  );
};

export default Section1;
