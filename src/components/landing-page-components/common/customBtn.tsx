const CustomBtn = ({ content, path }: { content: string; path: string }) => {
  return (
    <a href={path} className="btn-text btn-icon-r font-[500]">
      {content}
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
  );
};

export default CustomBtn;
