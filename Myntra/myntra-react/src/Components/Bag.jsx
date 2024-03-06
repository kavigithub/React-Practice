import { useSelector } from "react-redux"
import BagItem from "./BagItem"
import BagSummary from "./BagSummary"

const Bag = () => {
  let bagItem = useSelector(state => state.Bag); // selected product id
  //console.log(bagItem);
  let productItem = useSelector(state => state.products); //all product list
  let finalProductsInBags =  productItem.filter((item) =>  bagItem.indexOf(item.id) !==  -1);
  console.log(finalProductsInBags); //filer out the product selected by user

  return (
    <div className="bag-page">
        <div className="bag-items-container">
            {finalProductsInBags.map((product) =>  <BagItem key={product.id} item={product} />)}
           
        </div>
        <div className="bag-summary">
            <BagSummary />
        </div>
    </div>
  )
}

export default Bag

I have difficulty in building logic. I feel like I may be doing something wrong. And maybe you are not able to stick to the decided path. I did a course on React, I also did a course on JavaScript. But I have not done much work on these technologies. I didn't get hands on experience on these technology. Or if I don't understand something then I may leave it. Or else I spend more time on it. It's been so many years, my base is still not good. See recently i uploaded my resume on naukri and different places, i got some calls for senior front-end but i didn't crack the interview as most of the time i don't know the concepts or how to tackle these scenarios, or how to the problems when you are on senior level(i m talking about coding).

I want someone who can guide me and tell me at the right time where I need to improve. And get that improvement from me also. I know I may be doing something wrong. But I can't figure out how to make things right. 