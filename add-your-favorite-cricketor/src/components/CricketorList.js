import React from 'react';
import CricketorCard from "./CricketorCard";

const CricketorList = ({initialData, onDeleteCricketor, onEditCricketerInfo}) => {
  return (
    <div className='row'>
        {initialData.map((item, index) => (
            <CricketorCard data={item} key={index} onEditCricketerInfo={onEditCricketerInfo} onDeleteCricketor={onDeleteCricketor}/>
        ))} 
    </div>
  )
}

export default CricketorList