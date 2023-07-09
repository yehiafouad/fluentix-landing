import Slider from "react-slick";
import Header from "components/landing-page-components/common/header";
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

const Section6 = () => {
  return (
    <section className="p-10">
      <Header
        title="Meet the students who love learning with Fluentix…"
        content="Fluentix is trusted by some of the most amazing students, employees, and managers out there. Here’s what they have to say about us…"
      />

      <div>
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
      </div>
    </section>
  );
};

export default Section6;
