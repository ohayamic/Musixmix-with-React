import React from "react";
import spinner from "../../giphy.gif";
const Spinner = () => {
  return (
    <div className="container justify-content-center">
      <img
        src={spinner}
        alt="Loading...."
        style={{ display: "block", margin: "40px auto", width: "300px" }}
      />
    </div>
  );
};

export default Spinner;
