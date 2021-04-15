import React from 'react';
import styles from './Coins.module.css';


function Coins({name, id, price, symbol, marketcap, volume, image, pricechange}) {
    return (
        <div className={styles.coin_container}>
            <div className={styles.coin_row}>
                <div className={styles.coin}>
                    <img src={image} className={styles.coin_image}/>
                    <h1 className={styles.coin_h1}>{name}</h1>
                    <p className={styles.coin_symbol}>{symbol}</p>
                </div>
                <div className={styles.coin_data}>
                    <p className={styles.coin_price}>${" "}{price}</p>
                    <p className={styles.coin_volume}>${" "}{volume.toLocaleString()}</p>
                {pricechange < 0 ? 
                (<p className={styles.price_change_red}>{pricechange.toFixed(2)} %</p>) : 
                    (<p className={styles.price_change_green}>{pricechange.toFixed(2)} %</p>)}
                <p className={styles.coin_marketcap}>
                    Mkt Cap: ${marketcap.toLocaleString()}
                </p>

                </div>
            </div>
            
        </div>
    )
}

export default Coins;
