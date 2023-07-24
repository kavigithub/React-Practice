import React from "react";
import Button from "./Button";


const CricketorCard = ({data, onDeleteCricketor, onEditCricketor, clickEdit}) => {

  return (
    <>
      <div className="card d-flex m-2 col-3">
        <h5 className="card-header">
            {data.name}
        </h5>
        <div className="card-body">
          <h5 className="card-title">{data.role}</h5>
          <p className="card-text">
            <b>Country : {data.country}</b><br />
            <b>Batting Style : {data.battingStyle}</b><br />
            <b>Bowling Style : {data.bowlingStyle}</b><br />
          </p>
          <Button>More Info</Button>
          <Button onClick={() => onEditCricketor(data)}>Edit</Button>
          <Button onClick={() => onDeleteCricketor(data)}>Delete</Button>
        </div>
      </div>
    </>
  );
};

export default CricketorCard;
