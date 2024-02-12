import { useSelector } from 'react-redux'


const DisplayCounter = () => {
 const counterVal =  useSelector((state) => {
  return state.counter;
 });

  return (
    <div className='lean mb-4'>
        <h2>Display Counter</h2>
        Counter Current Value : {counterVal}
    </div>
  )
}

export default DisplayCounter