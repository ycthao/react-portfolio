import React from "react";
import "../../style/style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
