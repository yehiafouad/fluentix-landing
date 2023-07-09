import img1 from "assets/images/home/section2/Improve fast by daily practice.svg";
import img2 from "assets/images/home/section2/Learn from your mistakes.svg";
import img3 from "assets/images/home/section2/Learn wherever you are.svg";
import img4 from "assets/images/home/section2/Flexible schedule.svg";
import img5 from "assets/images/home/section2/Free Resources.svg";
import "assets/css/potentials.css";
import Header from "components/landing-page-components/common/header";
import CustomBtn from "components/landing-page-components/common/customBtn";

const content = [
  {
    key: 0,
    title: "Improve fast by daily practice",
    img: img1,
    content:
      "Along with the main sessions you get a ‘daily activities plan’ to help you practice your language skills (listening, speaking, reading, writing, and grammar) every day!",
  },
  {
    key: 1,
    title: "Learn from your mistakes",
    img: img2,
    content:
      "Your teacher makes sure that your daily activities are revised and corrected through the ‘daily follow-up’.",
  },
  {
    key: 2,
    title: "Learn wherever you are!",
    img: img3,
    content:
      "Save your time and energy & get the best out of it! Fluentix courses are online-based.",
  },
  {
    key: 3,
    title: "Flexible schedule",
    img: img4,
    content:
      "You have a tight schedule! Book your classes anytime from 10 to 12 AM. Enjoy the ultimate flexibility of changing sessions’ appointments in the private system.",
  },
  {
    key: 4,
    title: "Free material and resources",
    img: img5,
    content:
      "All course materials are free. We support your learning journey with online, accessible, and free resources that you can find across our platforms.",
  },
];

const Section3 = () => {
  return (
    <section className="lg:px-10">
      <Header
        title="One place, infinite potential"
        content={
          "We know what really matters to you and your career advancement. That’s why we created a series of features and programs to help you practice your language skills in the best light possible."
        }
      />

      <div className="section-container space-y-[24px] pb-[80px]">
        {content.map((item) => (
          <div
            className="group md:flex md:gap-[32px] md:flex-row md:justify-between md:odd:flex-row-reverse items-center py-[24px] md:py-[32px] text-center md:text-left"
            key={item.key}
          >
            <div className="space-y-5 md:basis-6/12">
              <h3 className="lg:group-odd:ml-[104px] lg:group-even:mr-[104px]">
                {item.title}
              </h3>
              <div className="space-y-[24px] md:hidden">
                <div className="flex justify-center">
                  <img
                    loading="lazy"
                    src={item.img}
                    className="w-auto drop-shadow-lg object-contain max-h-[236px]"
                    alt="Footer person"
                  />
                </div>
                {/* <footer
                className="flex items-center justify-center md:justify-start"
                itemProp="author"
                itemScope
              >
                <img
                  src={footer1}
                  className="rounded-full mr-4 w-[52px] h-[52px] md:w-16 md:h-16"
                  alt="Footer person"
                />
                <div className="text-left">
                  <p className="text-xs md:text-sm font-bold">Dmitri Gunn</p>
                  <p className="text-xs">TEDx Cambridge</p>
                </div>
              </footer> */}
              </div>

              <div className="lg:group-odd:ml-[104px] lg:group-even:mr-[104px]">
                <p className="lg:text-[1.25rem] text-[1rem] leading-[1.75rem] text-gray-500">
                  {item.content}
                </p>

                <CustomBtn content="Check out examples" path="/" />
              </div>
            </div>

            <div className="space-y-[24px] hidden md:block md:basis-6/12">
              <div className="w-full">
                <img
                  loading="lazy"
                  className="drop-shadow-lg object-contain max-h-[418px]"
                  src={item.img}
                  width="592"
                  height="418"
                  srcSet={`${item.img} 1184w, ${item.img} 300w, ${item.img} 1055w, ${item.img} 850w, ${item.img} 479w, ${item.img} 150w, ${item.img} 600w`}
                  sizes="(max-width: '.592px.') 100vw, '.592px.'"
                  alt="TEDxCambridge using Uscreen's white-label streaming platform."
                />
              </div>

              {/* <footer
              className="flex items-center justify-center md:justify-start"
              itemProp="author"
            >
              <img
                loading="lazy"
                className="rounded-full mr-4 w-[52px] h-[52px] md:w-16 md:h-16"
                src="https://www.uscreen.tv/wp-content/uploads/2022/04/dmitri-gunn.png"
                width="64"
                height="64"
                srcSet="https://www.uscreen.tv/wp-content/uploads/2022/04/dmitri-gunn.png 128w, https://www.uscreen.tv/wp-content/uploads/2022/04/dmitri-gunn-96x96.png 96w"
                sizes="(max-width: '.64px.') 100vw, '.64px.'"
                alt="Photo of Dmitri Gunn from TEDx Cambridge."
              />
              <div className="text-left">
                <p className="text-sm md:text-base font-bold">Dmitri Gunn</p>
                <p className="text-xs">TEDx Cambridge</p>
              </div>
            </footer> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
