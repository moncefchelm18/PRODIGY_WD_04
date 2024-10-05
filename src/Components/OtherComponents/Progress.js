import React from "react";

const Progress = (props) => {
  return (
    <>
      <div className="progress">
        <h3>
          {props.title}
          <span>{props.percentage}%</span>
        </h3>
        <div className="bar">
          <span style={{ "--i": `${props.percentage}%` }}></span>
        </div>
      </div>
    </>
  );
};

export default Progress;
