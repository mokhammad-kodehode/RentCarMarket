import React, { useState, useEffect } from "react";
import styles from "./rent.module.css";
import { SearchInput } from "../../components/forms/searchInput/SearchInput";
import PickUp from "../../components/forms/pick-up/PickUp";
import DropOff from "../../components/forms/drop-off/DropOff";
import CarCard from "../../components/carCard/CarCard";
import axios from "axios";

function RentCarPage() {
  const [cars, setCars] = useState([]);
  const [searchText, setSearchText] = useState(""); // Добавляем состояние для текста поиска

  // Определяем функцию fetchCars для загрузки всех машин
  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:3500/cars");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    // Вызываем функцию fetchCars при монтировании компонента для загрузки всех машин
    fetchCars();
  }, []);

  useEffect(() => {
    // Здесь делаем GET-запрос к серверу для поиска машин по городу
    const fetchCarsByCity = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/cars/search/${searchText}`);
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars by city:", error);
      }
    };

    if (searchText) {
      fetchCarsByCity();
    } else {
      // Если поле поиска пустое, загружаем все машины
      fetchCars();
    }
  }, [searchText]);

  const handleSearchInputChange = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Rent car</h1>
        <div className={styles.header}>
          <form className={styles.inputs}>
            <SearchInput onSearchChange={handleSearchInputChange} /> {/* Передаем функцию обратного вызова */}
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