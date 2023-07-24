import React from 'react';

import People from './People';

const PeopleList = ({peopleList, onSelection, selectedPeople}) => {
  return (
    <ul>
        {peopleList.map((people, index) => (
           <People people={people} key={index} onSelection={onSelection} selectedPeople={selectedPeople}/>
        ))}
    </ul>
  )
}

export default PeopleList;