import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CarPhoto from '../../../components/carPage/photos';
import styles from "./carpage.module.css";
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function CarPage() {
  const { carId } = useParams(); // Получаем carId из параметров маршрута
  const [carData, setCarData] = useState({});

  useEffect(() => {
    // Здесь делаем GET-запрос к серверу для получения данных о машине по carId
    axios
      .get(`http://localhost:3500/cars/${carId}`)
      .then((response) => {
        // Устанавливаем полученные данные в состояние
        setCarData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, [carId]);

  return (
    <section className={styles.container} >
        <Link to="/rent"  className={styles.back} >
            <FaChevronLeft  />
        </Link>
        <div className={styles.head}>
            <h1 className={styles.title}  >{`${carData.make} ${carData.model} ${carData.year}`}</h1>
            <p>Location: {carData.location}</p>
        </div>
      {carData.imageUrl && <CarPhoto imageUrl={carData.imageUrl} />}
      <div className={styles.description_container}>
        <h2>Description</h2>
        <p>{carData.description}</p>
        <h3>Feateres</h3>
        <table className={styles.features_container}>
              <tbody>
                  <tr>
                     <th>Transmission</th>
                     <td>{carData.transmission}</td>
                  </tr>
             </tbody>
          </table>
      <p>Price: ${carData.price} /day</p>
      </div>
      {/* Другие детали машины и информация о ней */}
    </section>
  );
}

export default CarPage;