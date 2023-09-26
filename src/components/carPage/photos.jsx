import PropTypes from 'prop-types'; // Импортируем PropTypes
import styles from './photos.module.css'
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';



export function CarPhoto(props) {
    const { imageUrl } = props;
    const imageBaseUrl = "http://localhost:3500"; // Определяем базовый путь

    const [ImageIndex, setImageIndex] = useState(0)
    const [isPhotoListOpen, setIsPhotoListOpen] = useState(false)

    const openPhotoList = (index) => {
        setImageIndex(index);
        setIsPhotoListOpen(true)
    };
  
    const closePhotoList = () => {
        setIsPhotoListOpen(false)
    };

    const handlePrevClick = () => {
        if (ImageIndex > 0) {
            setImageIndex(ImageIndex - 1)
        }
    }

    const handleNextClick = () => {
        if (ImageIndex < imageUrl.length -1) {
            setImageIndex(ImageIndex + 1)
        }
    }
  
    const prevButtonClass = ImageIndex === 0 ? `${styles.prev} ${styles.hidden}` : styles.prev;
    const nextButtonClass = ImageIndex === imageUrl.length - 1 ? `${styles.next} ${styles.hidden}` : styles.next;

    return (
      <div className={styles.carPhotoContainer}>
            <img 
                src={`${imageBaseUrl}/${imageUrl[0]}`} 
                alt={`Car Photo 0`} 
                className={styles.carFirstImage}
                onClick={() => openPhotoList(0)}
             />
            <div className={styles.car_photos}>
                {imageUrl.slice(1).map((url, index) => (
                <img 
                    key={index} 
                    src={`${imageBaseUrl}/${url}`} 
                    alt={`Car Photo ${index + 1}`} 
                    className={styles.car_photos_photo} 
                    onClick={() => openPhotoList(index)}
                    />
                    
                ))}
            </div>
            {isPhotoListOpen && (
        <div className={styles.galleryOverlay}>
          <div className={styles.galleryContainer}>
            <div className={styles.navigation}>

              <div className={styles.arrows} >
              <button className={prevButtonClass}  onClick={handlePrevClick} ><FaChevronLeft/></button>
              <button className={nextButtonClass} onClick={handleNextClick} >
              <FaChevronRight/>
              </button>
              </div>
              <button className={styles.close} onClick={closePhotoList}>X</button>
            </div>
            <img
              src={`${imageBaseUrl}/${imageUrl[ImageIndex]}`}
              alt={`Car Photo ${ImageIndex}`}
              className={styles.selectedImage}
            />
          </div>
        </div>
      )}
      </div>
    );
  }
  
  // Определите ожидаемые типы для свойств компонента
  CarPhoto.propTypes = {
    imageUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
  export default CarPhoto;