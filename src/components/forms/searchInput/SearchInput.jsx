import { useState } from 'react';
import styles from './search.module.css'
import { FaSearch } from 'react-icons/fa';

export function SearchInput () {
const [searchText, setSearchText] = useState('');
    
   const handleInputChange = (event) => {
    setSearchText(event.target.value);
    console.log(handleInputChange)
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

