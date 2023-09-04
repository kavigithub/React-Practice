import React from "react";

const Options = ({ questions, dispach, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswered && index  === questions.correctOption ? "correct" : "wrong"}`} key={option} disabled={hasAnswered} onClick={() => dispach({type:'newAnswer', payload: index})}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
