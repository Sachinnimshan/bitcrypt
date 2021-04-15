import Head from 'next/head'
import styles from '../styles/Home.module.css';
import SearchBar from '../components/searchbar/SearchBar';
import CoinList from '../components/Coins/CoinList';


export default function Home({filteredCoins}) {
  //console.log(filteredCoins);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar/>
      <CoinList filteredCoins={filteredCoins}/>
    </div>
  )
}


export const getServerSideProps = async()=>{
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

  const filteredCoins = await res.json();
  return {
    props:{
      filteredCoins
    }
  }

}
