import useMediaQuery from "hooks/use-media-query";
import img from "assets/images/home/section3/boy.svg";

const Section4 = () => {
  const isSmall = useMediaQuery("(max-width: 992px)");

  return (
    <section
      className={`bg-blue-50 lg:rounded-2xl ${
        isSmall ? "" : "section-container"
      } py-[24px] md:py-[64px]`}
      data-block="highlight"
    >
      <div className="section-container md:flex md:gap-[32px] md:justify-between md:flex-row-reverse items-center py-6 text-center md:text-left">
        <div className="space-y-10 md:basis-6/12">
          <h2 className="lg:ml-[104px] font-[500]">We’ve been in your shoes</h2>

          <div className="space-y-10 md:hidden">
            <div className="w-full overflow-hidden">
              <img
                loading="lazy"
                className="w-full"
                src={img}
                width="592"
                height="317"
                srcSet={`${img} 1184w, ${img} 300w, ${img} 1055w, ${img} 1121w, ${img} 527w, ${img} 150w, ${img} 600w`}
                // sizes="(max-width: '.592px.') 100vw, '.592px.'"
                alt="fitness content streamed on multiple devices."
              />
            </div>

            {/* <footer
              className="flex items-center justify-center md:justify-start"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <img
                loading="lazy"
                className="rounded-full mr-4 w-[52px] h-[52px] md:w-16 md:h-16"
                src="https://www.uscreen.tv/wp-content/uploads/2022/04/fabiana-ferrarini.png"
                width="64"
                height="64"
                srcSet="https://www.uscreen.tv/wp-content/uploads/2022/04/fabiana-ferrarini.png 128w, https://www.uscreen.tv/wp-content/uploads/2022/04/fabiana-ferrarini-96x96.png 96w"
                sizes="(max-width: '.64.') 100vw, '.64.'"
                alt="Photo of Fabiana Ferrarini from Queen Warriors."
              />
              <div className="text-left">
                <p className="text-xs md:text-sm font-bold">
                  Fabiana Ferrarini
                </p>
                <p className="text-mxs md:text-xs">Queen Warriors</p>
              </div>
            </footer> */}
          </div>

          <div className="lg:ml-[104px]">
            <p className="text-[1.25rem] leading-[1.75rem] text-gray-600">
              We understand the struggle to learn a new language. From{" "}
              <strong className="italic font-[600]">where to start</strong> to{" "}
              <strong className="italic font-[600]">
                what should I do next?
              </strong>{" "}
              , it is confusing. Here at Fluentix, we teach you the way we
              learned to become native-like speakers to spare you the struggle —
              and what's more, we have a proven track record of helping
              students: master English fluency, communicate faster and better,
              and achieve their goals at work.
            </p>

            <a
              href="https://www.uscreen.tv/ott-platform/"
              className="btn-text btn-icon-r font-[500]"
            >
              About us
              <svg
                fill="currentColor"
                className="icon-arrow-r"
                viewBox="0 0 16 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9.434.434a.8.8 0 0 1 1.132 0l5 5a.8.8 0 0 1 0 1.132l-5 5a.8.8 0 1 1-1.132-1.132L13.07 6.8H1a.8.8 0 0 1 0-1.6h12.069L9.434 1.566a.8.8 0 0 1 0-1.132Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <footer className="space-y-10 hidden md:block md:basis-6/12">
          <div className="w-full overflow-hidden">
            <img
              loading="lazy"
              className="w-full"
              src={img}
              width="592"
              height="317"
              srcSet={`${img} 1184w, ${img} 300w, ${img} 1055w, ${img} 1121w, ${img} 527w, ${img} 150w, ${img} 600w`}
              sizes="(max-width: '.592px.') 100vw, '.592px.'"
              alt="fitness content streamed on multiple devices."
            />
          </div> */}

        {/* <footer
            className="flex items-center justify-center md:justify-start"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <img
              loading="lazy"
              className="bg-brand-20 rounded-full mr-4 w-[52px] h-[52px] md:w-16 md:h-16"
              src="https://www.uscreen.tv/wp-content/uploads/2022/04/fabiana-ferrarini.png"
              width="64"
              height="64"
              srcSet="https://www.uscreen.tv/wp-content/uploads/2022/04/fabiana-ferrarini.png 128w, https://www.uscreen.tv/wp-content/uploads/2022/04/fabiana-ferrarini-96x96.png 96w"
              sizes="(max-width: '.64.') 100vw, '.64.'"
              alt="Photo of Fabiana Ferrarini from Queen Warriors."
            />
            <div className="text-left">
              <p className="text-xs md:text-sm font-bold">Fabiana Ferrarini</p>
              <p className="text-mxs md:text-xs">Queen Warriors</p>
            </div>
          </footer> */}
        {/* </footer> */}
      </div>
    </section>
  );
};

export default Section4;
