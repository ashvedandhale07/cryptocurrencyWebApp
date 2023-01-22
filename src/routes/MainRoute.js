import '../App.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MainRoute() {

  const [cryptoList, setCryptoList] = useState([]);

  let navigate = useNavigate();

  useEffect(()=>{
    Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=50').then((response)=>{
      setCryptoList(response.data['data'])
    });
  }, []);

  return (
      <>
          <div className="header">
              <h1>The Cryptocurrency Center</h1>
          </div>
          <div className='subheader'>
              <h3>A place to take a glance at all cryptocurrencies!</h3>
          </div>
          <div className="cryptoList">
              {cryptoList.map((coin) => {
                  return (
                      <div onClick={()=>{navigate(`/currency/${coin.id}`)}}>
                          {" "}
                          <h1>{coin.name}</h1>
                          <h3>{coin.symbol}</h3>
                          <h3>{coin.price_usd}</h3>
                      </div>
                  );
              })}
          </div>
      </>
  );
}

export default MainRoute;
