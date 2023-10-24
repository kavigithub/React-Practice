import axios from "axios";
import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import Loader from "./Loader";

const urlTour = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [dataTour, setDataTour] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      setIsLoading(true);
      const getTourData = await axios.get(urlTour);
      const getData = getTourData.data;
      console.log(getData);
      setDataTour(getData);
      setIsLoading(false);
    } catch (error) {
        setIsLoading(false)
        console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
          <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
         {dataTour.map((item) => (
            <Tour key={item.id} item={item} />
          ))}
      </div>
    </section>
      )}
    </>
  );
};

export default Tours;
