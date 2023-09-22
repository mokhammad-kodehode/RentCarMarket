
import PropTypes from 'prop-types'; // Импортируем PropTypes
import styles from './carcard.module.css'
import { Link } from 'react-router-dom';


export function CarCard(props) {
    const { make, model, imageUrl, location, price, carId } = props;
    const firstImageUrl = imageUrl[0];

    const ImgSrc = `http://localhost:3500/${firstImageUrl}`;

    return (
        <div className={styles.carCard}>
          <Link to={`/rentcar/${carId}`} className={styles.link}>
            <img src={ImgSrc} alt={`${make} ${model}`} className={styles.carImage} />
            <h2 className={styles.carName}>{`${make} ${model}`}</h2>
            <div className={styles.card_footer}>
              <p className={styles.carLocation}>{location}</p>
              <p className={styles.carPrice}>{` $${price} /day`}</p>
            </div>
          </Link>
        </div>
    );
}

// Определите ожидаемые типы для свойств компонента
CarCard.propTypes = {
    make: PropTypes.string.isRequired, // строка, обязательная
    model: PropTypes.string.isRequired, // строка, обязательная
    imageUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired, // число, обязательное
    carId: PropTypes.string.isRequired, // строка, обязательная
    location: PropTypes.string.isRequired,
};

export default CarCard;