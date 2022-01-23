import React from "react";
import "../../styles/common/Tag.scss";

const Tag = ({ text, isSelected, addedTag, onClick }) => {
  return (
    <div
      className={addedTag ? "added-tag" : `tag ${isSelected && "selected-tag"}`}
      onClick={onClick}
    >
      {text}
      {addedTag && <span className='cross'>x</span>}
    </div>
  );
};

export default Tag;
