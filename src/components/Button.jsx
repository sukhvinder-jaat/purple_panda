import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="fw_700 fs_lg ff_Montserrat btn_all rounded-pill clr_white border-0 lh_normal all_btn_hover">
        {props.textbtn}
      </button>
    </>
  );
};

export default Button;
