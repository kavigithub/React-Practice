import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitailProdcts } from "../store/ProductSlice";
import { isCurrentFetchingFinish, isCurrentFetchingStart, isFetchingDone } from "../store/FetchStatus";

const FetchingItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    //if the user actions on our site indicate that the fetch isn’t needed any more. So how can we cancel an ongoing fetch by “aborting” a promise.
    let controller = new AbortController();
    let signal = controller.signal;


    dispatch(isCurrentFetchingStart())

    //start the project with backend-code folder...npm start
    let getUrl = fetch("http://localhost:8080/items", { signal });

    getUrl
      .then((response) =>response.json())
      .then((data) => {
        dispatch(isFetchingDone());
        dispatch(isCurrentFetchingFinish())
        //add data to the store
        dispatch(addInitailProdcts(data.items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchingItems;
