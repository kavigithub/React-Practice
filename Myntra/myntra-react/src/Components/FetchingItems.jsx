import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

const FetchingItems = () => {
   const fetchStatus = useSelector((state) => state.fetchStatus);
   console.log(fetchStatus.isFetchingDone, fetchStatus.currentlyFetching);
   const dispatch = useDispatch();

   useEffect(() => {
    if (fetchStatus.isFetchingDone) return
    //if the user actions on our site indicate that the fetch isn’t needed any more. So how can we cancel an ongoing fetch by “aborting” a promise.
    let controller = new AbortController();
    let signal = controller.signal;
    // Make the request to get items and handle it with a promise
    let getUrl = fetch('http://localhost:8080/items', {signal});

    getUrl.then((response) => response.json()).then((data) => console.log(data));
      
      /* If we don't catch any errors here, they will be thrown as unhandled rejections, which is not good for our app */
      /* If we got here without an error then all is good so update our store */        
/*       response.ok && 
        dispatch({type:"FETCH_ITEMS", payload:response.json()})    
          .catch((err)=>{    */    


   }, [fetchStatus])

  return (
    <div>FetchingItems</div>
  )
}

export default FetchingItems