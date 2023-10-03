import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../Context/CitiesContext";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const baseURL = 'http://localhost:9000';

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const {id} = useParams();
  const [searchParam, setSearchParam] = useSearchParams();
  const {currentCity, getCity, isLoading} = useCities();
  const lat = searchParam.get('lat');
  const lng = searchParam.get('lng');

  useEffect(() => {
    getCity(id);
  }, [id])


  const { cityName, emoji, date, notes } = currentCity;

  if(isLoading) return <Spinner />

return (
 <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <p>{id}</p>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
      <BackButton />
      </div>
    </div>
  );
}

export default City;
