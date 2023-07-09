import img1 from "assets/images/home/section5/Business English Program.svg";
import img2 from "assets/images/home/section5/Conversations Course (group).svg";
import img3 from "assets/images/home/section5/Conversation Course (private).svg";
import img4 from "assets/images/home/section5/Beginners Program (group).svg";
import img5 from "assets/images/home/section5/Beginners program (private).svg";
import CustomBtn from "../common/customBtn";
import Header from "../common/header";

const content = [
  {
    key: 0,
    title: "Business English Program",
    content:
      "Improve your overall English language skills while targeting areas that will prepare you for achieving your goals at work.",
    img: img1,
    btnContent: "View program details",
  },
  {
    key: 1,
    title: "Conversations Course (Group)",
    content:
      "Reach proficiency (C2 Level) in spoken English and maintain excellent language skills.",
    img: img2,
    btnContent: "View course details",
  },
  {
    key: 2,
    title: "Conversations Course (Private)",
    content: "Maximize your speaking skills with your private teacher.",
    img: img3,
    btnContent: "View course details",
  },
  {
    key: 3,
    title: "Beginners Program (Group)",
    content:
      "The easiest way to learn how to form correct sentences and start making conversations every day!",
    img: img4,
    btnContent: "View program details",
  },
  {
    key: 4,
    title: "Beginners Program (Private)",
    content: "Learn basic/elementary English faster with your private teacher.",
    img: img5,
    btnContent: "View program details",
  },
];
const Section5 = () => {
  return (
    <section className="p-10">
      <Header
        title="Meet the students who love learning with Fluentix…"
        content="Fluentix is trusted by some of the most amazing students, employees, and managers out there. Here’s what they have to say about us…"
      />

      <div className="lg:px-40">
        <div className="grid lg:grid-cols-2 grid-cols-1 m-auto gap-10 [&>div:last-child]:lg:col-span-2 [&>div:last-child]:lg:w-1/2 [&>div:last-child]:w-full [&>div:last-child]:lg:mx-auto">
          {content.map((item) => (
            <div
              className="bg-blue-50 p-10 rounded-2xl text-center"
              key={item.key}
            >
              <h2 className="lg:text-[2rem] text-[1.75rem] leading-[2rem] leading[3rem]">
                {item.title}
              </h2>
              <p className="lg:text-[1.25rem] text-[1rem] lg:leading-[1.75rem] leading-[1.5rem] text-gray-500">
                {item.content}
              </p>

              <CustomBtn content={item.btnContent} path="/" />

              <div className="w-full overflow-hidden mt-5">
                <img
                  loading="lazy"
                  className="w-full"
                  src={item.img}
                  width="592"
                  height="317"
                  srcSet={`${item.img} 1184w, ${item.img} 300w, ${item.img} 1055w, ${item.img} 1121w, ${item.img} 527w, ${item.img} 150w, ${item.img} 600w`}
                  // sizes="(max-width: '.592px.') 100vw, '.592px.'"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
