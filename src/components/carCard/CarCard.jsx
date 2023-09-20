
import PropTypes from 'prop-types'; // Импортируем PropTypes
import styles from './carcard.module.css'
import { Link } from 'react-router-dom';


export function CarCard(props) {
    const { make, model, price, carId } = props;



    return (
        <div className={styles.carCard}>
          <Link to={`/rentcar/${carId}`} className={styles.link}>
            <img alt={`${make} ${model}`} className={styles.carImage} />
            <h2 className={styles.carName}>{`${make} ${model}`}</h2>
            <p className={styles.carPrice}>{` $${price}`}</p>
          </Link>
        </div>
    );
}

// Определите ожидаемые типы для свойств компонента
CarCard.propTypes = {
    make: PropTypes.string.isRequired, // строка, обязательная
    model: PropTypes.string.isRequired, // строка, обязательная
    price: PropTypes.number.isRequired, // число, обязательное
    carId: PropTypes.string.isRequired, // строка, обязательная
};

export default CarCard;