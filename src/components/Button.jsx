import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="fw_700 fs_lg ff_Montserrat btn_all rounded-pill clr_white border-0">
        {props.textbtn}
      </button>
    </>
  );
};

export default Button;
