const Stats = ({item}) => {
    if(!item.length) return (<p className='stats'>{`You packed nothing Yet, let's stat packing 🛩️`}</p>)
  
    const numItem= item.length;
    const numPacked = item.filter((i) => i.packed).length;
    const percentage = Math.round((numPacked / numItem) * 100)
    return(
      <>
        <footer className='stats'>
          <em>{
            percentage === 100 ?  <p>You got everything, ready to go 🛩️</p> : `You have  ${numItem} items on your list, And you already packed ${numPacked} (${percentage}%)`
            }</em>
        </footer>
      </>
    )
  }

  export default Stats;