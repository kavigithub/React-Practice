import React from 'react';
import Options from './Options';

const Question = ({questions, dispach, answer}) => {
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      {/* {questions.options.map((question) => <button key={question}>{question}</button>)} */}
      <Options questions={questions} dispach={dispach} answer={answer}></Options>
    </div>
  )
}

export default Question