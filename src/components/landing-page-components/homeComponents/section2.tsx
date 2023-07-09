import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "assets/images/logo.svg";

const sliderSettings = {
  arrows: false,
  dots: false,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const sliderContent = [
  {
    key: 0,
    title: "Slider 1",
    img: logo,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint harum corrupti atque dolor rem, ex iusto non adipisci minima animi! Sit quos neque nesciunt numquam ullam cum doloribus eligendi.",
  },
  {
    key: 1,
    title: "Slider 2",
    img: logo,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint harum corrupti atque dolor rem, ex iusto non adipisci minima animi! Sit quos neque nesciunt numquam ullam cum doloribus eligendi.",
  },

  {
    key: 2,
    title: "Slider 3",
    img: logo,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint harum corrupti atque dolor rem, ex iusto non adipisci minima animi! Sit quos neque nesciunt numquam ullam cum doloribus eligendi.",
  },
  {
    key: 3,
    title: "Slider 4",
    img: logo,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint harum corrupti atque dolor rem, ex iusto non adipisci minima animi! Sit quos neque nesciunt numquam ullam cum doloribus eligendi.",
  },
  {
    key: 4,
    title: "Slider 5",
    img: logo,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint harum corrupti atque dolor rem, ex iusto non adipisci minima animi! Sit quos neque nesciunt numquam ullam cum doloribus eligendi.",
  },
  {
    key: 5,
    title: "Slider 6",
    img: logo,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint harum corrupti atque dolor rem, ex iusto non adipisci minima animi! Sit quos neque nesciunt numquam ullam cum doloribus eligendi.",
  },
  {
    key: 6,
    title: "Slider 7",
    img: logo,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint harum corrupti atque dolor rem, ex iusto non adipisci minima animi! Sit quos neque nesciunt numquam ullam cum doloribus eligendi.",
  },
  {
    key: 7,
    title: "Slider 8",
    img: logo,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint harum corrupti atque dolor rem, ex iusto non adipisci minima animi! Sit quos neque nesciunt numquam ullam cum doloribus eligendi.",
  },
];

const Section1 = () => {
  return (
    <section className="py-10 bg-[#ffeeeea3]">
      <h2 className="lg:text-[3rem] text-[1.7rem] px-[2rem] text-gray-700 font-[700] max-w-[1024px] mx-auto text-center mb-0 tracking-[-0.5px] lg:leading-[3.25rem] leading-[2rem]">
        Over 25,000 creators and entrepreneurs trust{" "}
        <strong className="font-bolder text-red-500">Fluentix</strong>
      </h2>
      <Slider className="my-10" {...sliderSettings}>
        {sliderContent.map((item) => (
          <div className="px-3" key={item.key}>
            <div className="slider-style">
              <img src={item.img} className="w-40 h-40 mx-auto mb-3" />
              <div className="px-5 pb-5">
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Section1;
