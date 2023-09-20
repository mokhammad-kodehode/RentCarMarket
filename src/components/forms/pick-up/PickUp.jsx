import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./pick.module.css" // Импортируйте компонент DatePicker из библиотеки
import { FaCalendar } from 'react-icons/fa';
import "react-datepicker/dist/react-datepicker.css"; // Импортируйте стили для DatePicker

function PickUp() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.dateContainer}>
      <label className={styles.label} htmlFor="Location">
        Pick-up date
      </label>
      <div className={styles.dateInput}>
        <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Start" // Замените текст "Start" на свой
            dateFormat="dd/MM/yyyy" // Формат отображения даты
            // Другие настройки DatePicker
        />
        <FaCalendar className={styles.calIcon}  />
      </div>
    </div>
  );
}

export default PickUp;