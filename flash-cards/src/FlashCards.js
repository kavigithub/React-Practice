import React, { useState } from "react";

const FlashCards = ({ data }) => {
  const [selected, setSelected] = useState();

  const selectCard = (id) => {
    //return selected !== setSelected(id) ? id : null;
    setSelected(id !== selected ? id : null);
  }

  return (
    <div className="flashcards">
      {
        data.map((item) => (<div key={item.id} onClick={() => selectCard(item.id)} className={selected === item.id ? "selected" : ""}>
          <p> {selected === item.id ? item.answer : item.question} </p>
        </div>))
      }
    </div>
  );
};

export default FlashCards;
