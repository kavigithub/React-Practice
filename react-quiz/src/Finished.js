import React from 'react'

const Finished = ({points, maxPossiblePoints, highscore, dispach}) => {
    const percentage = points / maxPossiblePoints * 100;

    let emoji;
    if(percentage === 100) emoji = "🥇";
    if(percentage >= 80 && percentage < 100) emoji = "🥈";
    if(percentage >= 50 && percentage < 80) emoji = "🥈";
    if(percentage >= 0 && percentage < 50) emoji = "🙁";
    if(percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className='result'>
        <p>Your Scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)})</p>
        <p className='highScore'>HighScore :{highscore}</p>
        <button className='btn btn-ui' onClick={() => dispach({type:'restart'})}> 
          Restart
        </button>
    </div>

  )
}

export default Finished