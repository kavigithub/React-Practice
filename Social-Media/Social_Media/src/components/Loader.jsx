//import React from "react";

const Loader = () => {
  return (
    <div className=" h-100 d-flex justify-content-center align-content-center">
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
