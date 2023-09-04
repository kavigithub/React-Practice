import React from 'react'

const StartScreen = ({numQuestion, dispach}) => {
  return (
    <div>
        <h2>Welcome to React Quiz</h2>
        <h3>{numQuestion} questions to test your React mastrey</h3>
        <button className='btn bt-ui' onClick={() => dispach({type: 'start'})}>Lets Start</button>
    </div>
  )
}

export default StartScreen