import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../store/Bag";

const HomeItem = ({item}) => {
  let bagItems = useSelector(state => state.Bag); //get the id
  let foundId = bagItems.indexOf(item.id) >= 0;

  let dispatch = useDispatch();

  const handleAdd = () => {
    ////Calling this redux#ActionCreator with an argument will return a PayloadAction of type T with a payload of P
    dispatch(addToBag(item.id)) //addToBag import from ../store/Bag
  }

  const handleRemove = () => {
    dispatch(removeFromBag(item.id))
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating?.stars} ⭐ | {item?.rating?.count}
      </div>
      <div className="company-name">{item?.company}</div>
      <div className="item-name">{item?.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item?.current_price}</span>
        <span className="original-price">Rs {item?.original_price}</span>
        <span className="discount">({item?.discount_percentage}% OFF)</span>
      </div>
      {
        foundId ? <button type="button" className="btn btn-danger w-100 my-2" onClick={handleRemove}>Remove</button>  :
        <button type="button" className="btn btn-success w-100 my-2" onClick={handleAdd}>Add to Bag</button>
      }
 

    </div>
  );
};

export default HomeItem;
