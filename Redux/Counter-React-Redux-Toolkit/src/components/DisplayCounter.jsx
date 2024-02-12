import { useSelector } from 'react-redux'


const DisplayCounter = () => {
  const { counterVal } = useSelector((state) => state.counter);
  
  return (
    <div className='lean mb-4'>
        <h2>Display Toolkit Counter</h2>
        Counter Current Value : {counterVal}
    </div>
  )
}

export default DisplayCounter