import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CurrencyRoute() {

  let { id } = useParams();

  const [coin, setCoin] = useState({ name: "", symbol: "", price_btc: "", price_usd: "", volume24: 0, percent_change_1h: 0 });

  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then((response) => {
      setCoin({
        name: response.data[0].name,
        symbol: response.data[0].symbol,
        price_btc: response.data[0].price_btc,
        price_usd: response.data[0].price_usd,
        volume24: response.data[0].volume24,
        percent_change_1h: response.data[0].percent_change_1h,
        rank: response.data[0].rank
      })
    }); 
  }, []);

  return (
    <>
      <div className='curr'>
        <h1>{coin.name}</h1>
        <h3>Rank:  {coin.rank}</h3>
        <h3>Symbol:  {coin.symbol}</h3>
        <h3>Price:  {coin.price_btc}</h3>
        <h3>Price in USD:  {coin.price_usd}</h3>
        <h3>Volume in 24 hours:  {coin.volume24}</h3>
        <h3>Percent change in hour:  {coin.percent_change_1h}</h3>
      </div>
      <div className='externalPlatforms'>
        <h2>Here are some of the suggested verified platforms to trade:</h2>
        <br />
        <a href='https://www.binance.com/en-IN/buy-sell-crypto'>Binance</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='https://coindcx.com/login?utm_source=CoinDCXnew_web&utm_medium=CoinDCXnew_ProLogin&utm_campaign=coindcx_new'>CoinDCX</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='https://wazirx.com/'>WazirX</a>
      </div>
    </>
  )
}
