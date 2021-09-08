import React,{useEffect,useState} from 'react'
import styles from './Result.module.css'
import axios from 'axios';

// const qs = `?start=1&limit=5000&convert=USD`
// const API_KEY = "62c1d7b3-057b-4924-90b7-58a1195fdbdf"
// const URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map"
const URL = 'https://api.coincap.io/v2/assets'
/* rank
symbol
circulating Supply,
totalSupply,
max supply
last Updated*/

function Result(props) {
    const {  fetchResult,crypto } = props
    const [result, setResult] = useState([]);
    const fetchData = ()=>{
        axios.get(URL)
          .then((res)=>{
              console.log(res.data.data[0])
            setResult(res.data.data);
        })
      }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className={styles.outer__wrapper}>
            <h6>Cryptocurrency coin information will be listed below.</h6>
            <h2>This is the showTicker component.</h2>
            <h6>Nomber of cryptocurencies shown below, in order of rank: {result.length}</h6> 
            {
                result && result.map((item,index)=>(
                    <div key={index}>
                        <h4>{item.id.toUpperCase()}</h4>
                        <p>rank: {item.rank}</p>
                        <p>symbol: {item.symbol}</p>
                        <p>Circulating Supply: {parseInt(item.supply)}</p>
                        <p>Total Supply: {parseInt(item.supply)}</p>
                        <p>Max Supply: {parseInt(item.maxSupply)}</p>
                        <p>Last Updated: {item.rank}</p>
                    </div>
                ))
            }           
        </div>
    )
}
export default Result

