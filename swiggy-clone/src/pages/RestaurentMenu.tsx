import React ,{ useEffect, useState } from 'react';
import ShimmerEffect from './ShimmerEffect';
import { menuApi } from '../utils/constant';
import { useParams } from 'react-router-dom';

const RestaurentMenu = () => {
    let [resInfo, setResInfo] = useState<any>(null);
    const { restId } = useParams();

  useEffect(() => {
    fetchDataFrmApi();
  }, [])  

  const fetchDataFrmApi = async () => {
    //const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2039884&lng=72.8737017&restaurantId=19638&submitAction=ENTER');
    const data = await fetch(menuApi + restId);
    console.log(data, 'restId');
    const json = await data.json();
    //console.log(json.data);
    setResInfo(json.data)
  }
  //console.log(resInfo);
  //console.log(resInfo?.cards[0]?.card?.card?.info);
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  if(resInfo === null) return <ShimmerEffect />

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