import React from 'react';
import CricketorCard from "./CricketorCard";

const CricketorList = ({initialData, onDeleteCricketor, onEditCricketor}) => {
  return (
    <div className='row'>
        {initialData.map((item, index) => (
            <CricketorCard data={item} key={index} onEditCricketor={onEditCricketor} onDeleteCricketor={onDeleteCricketor}/>
        ))} 
    </div>
  )
}

export default CricketorList