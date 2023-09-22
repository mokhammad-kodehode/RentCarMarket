import React, { useState, useEffect } from "react";
import styles from "./rent.module.css";
import { SearchInput } from "../../components/forms/searchInput/SearchInput";
import PickUp from "../../components/forms/pick-up/PickUp";
import DropOff from "../../components/forms/drop-off/DropOff";
import CarCard from "../../components/carCard/CarCard";
import axios from "axios";



function RentCarPage() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Здесь делаем GET-запрос к серверу для получения списка машин
        axios
          .get("http://localhost:3500/cars")
          .then((response) => {
            // Устанавливаем полученные данные в состояние
            setCars(response.data);
          })
          .catch((error) => {
            console.error("Error fetching cars:", error);
          });
      }, []);


      return (
        <>
        <section className={styles.container}>
            <h1 className={styles.title}>Rent car</h1>
            <div className={styles.header}>
                <form className={styles.inputs}>
                  <SearchInput />
                  <PickUp />
                  <DropOff />
                </form>
              </div>
              <section className={styles.cars}>
                {cars.map((car) => (
                  <CarCard
                    key={car._id}
                    carId={car._id}
                    make={car.make}
                    model={car.model}
                    imageUrl={car.imageUrl}
                    price={car.price}
                    location={car.location}
                  />
                ))}
              </section>
        </section>
        </>
      );
    }

export default RentCarPage;