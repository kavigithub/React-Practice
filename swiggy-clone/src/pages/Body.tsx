import React, { useEffect, useState } from 'react'
import {apiData, callApi} from '../utils/constant';
import RestaruentCard from './RestaruentCard';
import { RestoObj } from '../utils/interface';
import ShimmerEffect from './ShimmerEffect';


const Body = () => {
  const [listofRestaurent, setListofResaurent] = useState<RestoObj[]>([]);
  const [filterListRestaurent, setFilterListRestaurent] = useState<RestoObj[]>([]);
  const [searchVal, setSearchVal] = useState('');
  //console.log(apiData.length);
  console.log(listofRestaurent.length);
 
  useEffect(() => {
    //call api here and get the data
    getFetch();
  }, []);

  const getFetch = async () => {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2039884&lng=72.8737017&page_type=DESKTOP_WEB_LISTING');
    const json = await response.json();
    //console.log(json);
    setListofResaurent(json?.data?.cards[2]?.data?.data?.cards); //original list
    setFilterListRestaurent(json?.data?.cards[2]?.data?.data?.cards) //original copy
  }

  return listofRestaurent.length === 0 ? <ShimmerEffect /> : (
    <>
    <div>
      <div className="filter d-flex flex-row m-2">
        <div className='w-25 d-flex mx-2'>
           <input type="search" className="form-control" placeholder="Search..." value={searchVal} onChange={(e) => {
            setSearchVal(e.target.value);
            if(e.target.value === '') setFilterListRestaurent(listofRestaurent)
           }}/>
           <button className='btn btn-primary' onClick={() => {
            const searchFilterResto = listofRestaurent.filter((resto) => {
              return resto?.data?.name.toLowerCase().includes(searchVal.toLowerCase())
            });
            setFilterListRestaurent(searchFilterResto) 
           }}>Search</button>
        </div>
         {/* this is filter functionality */}

        <button className='btn btn-primary' onClick={() => {
          const filterList = listofRestaurent.filter((item: any) => {
           return item?.data?.avgRating > 4
          });
          // console.log(filterList, 'filterData');
          setFilterListRestaurent(filterList)
        }}>TOP Rated Restaurent Filter</button>
    </div>
    <div className="res-container">
        {filterListRestaurent.map((item) => (
          <RestaruentCard restData={item?.data} key={item?.data?.id} />
        ))}
        <p>test</p>
      </div>
    </div>
    </>  
  )
}

export default Body