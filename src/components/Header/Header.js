import React, { useState, useEffect } from 'react';
import styled from './Header.module.css';
import { getIPInfo } from '../../api/hooks';
import IPInfo from '../IPInfo/IPInfo';

export default function Header() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchIPInfo() {
      const response = await getIPInfo();
      console.log(response);
      setData(response);
    }
    fetchIPInfo();
  }, []);
  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <h1>IP Address Tracker</h1>
        <div className={styled.searchBar}>
          <input
            type='search'
            name='searchIP'
            className={styled.search}
            placeholder='Search for any IP address or domain'
          />
        </div>
      </div>
      {data && (
        <IPInfo
          IPAddress={data.ip}
          city={data.location.city}
          state={data.location.region}
          zipcode={data.location.postalCode}
          timezone={data.location.timezone}
          isp={data.isp}
        />
      )}
    </div>
  );
}
