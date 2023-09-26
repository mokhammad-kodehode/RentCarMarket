import { useState } from 'react';
import styles from './search.module.css'
import { FaSearch } from 'react-icons/fa';
import PropTypes from "prop-types";

export function SearchInput({ onSearchChange }) {
const [searchText, setSearchText] = useState('');
    
   const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchText(newValue);
    onSearchChange(newValue);
}

    return (
        <div className={styles.searchContainer}>
            <label className={styles.label} htmlFor="Location">Location</label>
                <div className={styles.searcInput}>
                    <FaSearch className={styles.searchIcon} />
                    <input 
                    id='Location'
                    className={styles.search}
                    type="text"
                    value={searchText}
                    onChange={handleInputChange}
                    placeholder="Enter city or country"
                     />
                </div>
        </div>
    )
}

SearchInput.propTypes = {
    onSearchChange: PropTypes.func.isRequired, // Убедитесь, что onClick - это функция и она обязательна
  };

