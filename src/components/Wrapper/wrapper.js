import React from "react";
import "../../style/style.css";

function Wrapper(props) {
  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="row center" >
        {props.children}
      </div>
    </div>
  );
}

export default Wrapper;
