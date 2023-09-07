import React from "react";

const TotoList = ({ inputVal }) => {
  return (
    <>
      {inputVal && (
        <div>
          <span>{inputVal} </span>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </>
  );
};

export default TotoList;
