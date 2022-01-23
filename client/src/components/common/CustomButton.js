import React from "react";
import "../../styles/common/CustomButton.scss";

const CustomButton = ({ text, className, children, style, ...rest }) => {
  return (
    <button className={`custom-btn ${className}`} style={style} {...rest}>
      {children ? children : text}
    </button>
  );
};

export default CustomButton;
