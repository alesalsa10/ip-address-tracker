import React from 'react';
import styled from './IPInfo.module.css';


export default function IPInfo({ IPAddress, city, state, zipcode, timezone, isp }) {
  

  return (
    <div className={styled.card}>
      <div className={styled.IPAddress}>
        <p>IP ADDRESS</p>
        <h4> {IPAddress} </h4>
      </div>
      <div className={styled.location}>
        <p>LOCATION</p>
        <h4> {city}, {state} {zipcode} </h4>
      </div>
      <div className={styled.timezone}>
        <p>TIMEZONE</p>
        <h4> UTC {timezone} </h4>
      </div>
      <div id={styled.isp}>
        <p>ISP</p>
        <h4> {isp} </h4>
      </div>
    </div>
  );
}
