import React from 'react';
import styles from './Search.module.css';

function SearchBar({...rest}) {
    return (
        <div className={styles.coin_search}>
            <input 
            className={styles.coin_input} {...rest}
            type='text' 
            placeholder='Search'/>
        </div>
    )
}

export default SearchBar;
