import React from "react";
import Button from "./Button";

const People = ({ people, onSelection, selectedPeople }) => {

  //const isSelected = selectedPeople && selectedPeople.id === people.id;

  const isSelected = people?.id === selectedPeople?.id;

  return (
    <>
      <li className={isSelected ? 'selected' : ''}>
        <img src={people.image} alt={people.name} />
        <h3>{people.name}</h3>
        {/* <p style={people.balance > 0 ?{color: 'green'} : people.balance < 0 ? {color: 'red'} : {color: 'black'}}>{people.balance}</p> */}
        {people.balance > 0 && (
          <p className="green">
            {people.name} owes you {Math.abs(people.balance)}
          </p>
        )}

        {people.balance < 0 && (
          <p className="red">
            You owes {people.name} owes you {Math.abs(people.balance)}
          </p>
        )}

        {people.balance === 0 && (
          <p>
            You and {people.name} are even.
          </p>
        )}  

        <Button onClick={() => onSelection(people)}>{isSelected ? 'Close' : 'Select'}</Button>
      </li>
    </>
  );
};

export default People;
