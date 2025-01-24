import CityItem from "./CityItem.jsx";
import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import { useCities } from "../context/CityContext.jsx";

function Citylist() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add your first city by clicking on a city on map"} />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
export default Citylist;
