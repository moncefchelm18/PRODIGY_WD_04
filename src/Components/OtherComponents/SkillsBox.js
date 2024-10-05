import React from "react";

const SkillsBox = (props) => {
  return (
    <>
      <div className="skills-box">{props.children}</div>
    </>
  );
};

export default SkillsBox;
