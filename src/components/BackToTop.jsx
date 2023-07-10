import React from "react";
import top from "../assets/img/png/top_btn.jpg";

const BackToTop = () => {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <img
            onClick={moveToTop}
            className="position-fixed bottom-0 end-0 me-4 mb-4 top_btn top"
            src={top}
            alt=""
          />
        ) : (
          ""
        )}
        <div></div>
      </div>
    </>
  );
};

export default BackToTop;
