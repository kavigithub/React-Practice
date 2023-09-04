import React from 'react'

const Progress = ({index, numQuestion, points, maxPossiblePoints}) => {
  return (
    <header className='progress'>
        <progress value={index} max={numQuestion} />
        <p>
            Question <strong>{index + 1}</strong>/ {numQuestion}
        </p>
        <p><strong>{points}</strong>/ {maxPossiblePoints}</p>
    </header>
  )
}

export default Progress