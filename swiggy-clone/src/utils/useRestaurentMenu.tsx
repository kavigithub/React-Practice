import { useEffect, useState } from "react";
import { menuApi } from "./constant";

const useRestaurentMenu = (restId: any) => {

  let [resInfo, setResInfo] = useState<any>(null);

  useEffect(() => {
    fetchDataFrmApi();
  }, []);

  const fetchDataFrmApi = async () => {
    const data = await fetch(menuApi + restId);
    console.log(data, "restId");
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  console.log(resInfo);
  //console.log(resInfo?.cards[0]?.card?.card?.info);
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
};

export default useRestaurentMenu;
