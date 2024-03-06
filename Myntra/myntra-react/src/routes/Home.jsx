import { useSelector } from 'react-redux'
import HomeItem from '../Components/HomeItem'

const Home = () => {
  let productList = useSelector((state) => state.products); //got all product list
  return (
    <div className="items-container">
      {productList.map((product) =>  <HomeItem key={product.id} item={product}/> )}
   </div>
  )
}

export default Home