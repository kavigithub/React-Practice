import ShimmerEffect from './ShimmerEffect';
import { useParams } from 'react-router-dom';
import useRestaurentMenu from '../utils/useRestaurentMenu';

const RestaurentMenu = () => {
   
    const { restId }  = useParams();
   // console.log(restId);

    const resInfo = useRestaurentMenu(restId);


  if(resInfo === null) return <ShimmerEffect />
  console.log(resInfo);

  const {name, costForTwoMessage, cuisines, avgRating, totalRatingsString, areaName} = resInfo?.cards[0]?.card?.card?.info;

  /* const {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.categories[1]; */
  let {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;


 console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card);

  return (
   <>
    {itemCards.map((item:any) => 
      (
        <li key={item.card.info.id}>{item.card.info.name} : RS. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
      ) 
    )}
    <hr></hr>
    {/*  <div>{name}</div>
     <div>{costForTwoMessage}</div>
     <div>{cuisines}</div>
     <div>{avgRating}</div>
     <div>{totalRatingsString}</div>
     <div>{areaName}</div> */}
   </>
  )
}

export default RestaurentMenu