import React, { useState } from "react";

const TextExpander = ({
  children,
  showMoreButton = "Show more",
  showLessButton = "Show less",
  showWordCount = 10,
  className,
  expanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
/*   const [words, setwords]= useState(`space travel is the ultimate adventure! Imagine soaring past the stars and exploring new worlds. It's the stuff of dreams and science fiction,
  but believe it or not, space travel is a real thing. Humans and robots
  are constantly venturing out into the cosmos to uncover its secrets and
  push the boundaries of what's possible.`); */

  const handleShow = () => {
    setIsExpanded((show) => !show);
  };

  return (
    <div style={{ margin: "10px 0px" }} className={className}>
     {/*  <span>{isExpanded ? words : words.slice(0, 20)}</span> */}
     <span>
        {isExpanded ? children : children.split(' ').slice(0, showWordCount).join(' ') + '...'}
     </span>
      <button onClick={handleShow}>{isExpanded ? showLessButton : showMoreButton}</button>
    </div>
  );
};

export default TextExpander;
