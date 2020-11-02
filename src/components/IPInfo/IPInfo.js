import React from 'react';
import styled from './IPInfo.module.css';


export default function IPInfo({ IPAddress, city, state, zipcode, timezone, isp }) {
  

  return (
    <div className={styled.card}>
      <div className={styled.IPAddress}>
        <p>IP ADDRESS</p>
        <p> {IPAddress} </p>
      </div>
      <div className={styled.location}>
        <p>LOCATION</p>
        <p> {city}, {state} {zipcode} </p>
      </div>
      <div className={styled.timezone}>
        <p>TIMEZONE</p>
        <p> UTC {timezone} </p>
      </div>
      <div className={styled.isp}>
        <p>ISP</p>
        <p> {isp} </p>
      </div>
    </div>
  );
}
