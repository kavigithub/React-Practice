import styles from "./CountryList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

const CountryList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner></Spinner>;

  if (!cities.length) {
    return (
      <Message message={"Add you first city by clicking on the map"}></Message>
    );
  }

  /* const countriesUnique = new Set(
    cities.map(city =>
      JSON.stringify({ country: city.country, emoji: city.emoji }),
    ),
  );

  const countries = [...countriesUnique].map(each => JSON.parse(each))

  console.log(countries); */

let countries = cities.reduce((prevVal, currentVal) => {
    console.log(!prevVal.map((item) => item.country).includes(currentVal.country), 'currentVal')
    if (!prevVal.map((item) => item.country).includes(currentVal.country)) {
      return [...prevVal, { country: currentVal.country, emoji: currentVal.emoji }]
    } else {
        console.log(prevVal, ' console.log(prevVal);');
      return prevVal;
    }
  }, []);

/*   console.log(countries); */


  return (
    <>
      <ul className={styles.countryList}>
        {countries.map((item) => (
          <CountryItem country={item} key={item.country}/>
        ))}
      </ul>
    </>
  );
};

export default CountryList;
