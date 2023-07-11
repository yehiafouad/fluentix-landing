const Header = ({ title, content }: { title: string; content: string }) => {
  return (
    <header className="section-container text-center mx-auto lg:grid lg:grid-cols-12 lg:gap-x-[32px] pt-[64px] lg:pt-[80px] lg:pb-[64px] pb-10 space-y-6 lg:space-y-4 tracking-[-0.5px] leading-[1.5rem] lg:leading-[3.5rem]">
      <div className="lg:col-start-3 lg:col-span-8 lg:col-end-11">
        <h2 className="text-red-500 font-[500] mb-0">{title}</h2>
      </div>
      <div className="lg:col-start-4 lg:col-span-6 lg:col-end-10">
        <p className="lg:text-[1.5rem] text-[1rem] lg:leading-[1.75rem] leading-[1.5rem] text-gray-500">
          {content}
        </p>
      </div>
    </header>
  );
};

export default Header;
