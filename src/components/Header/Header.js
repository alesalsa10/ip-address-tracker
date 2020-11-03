import React, { useState, useEffect } from 'react';
import styled from './Header.module.css';
import { getIPInfo, searchIP } from '../../api/hooks';
import IPInfo from '../IPInfo/IPInfo';
import Map from '../Map/Map';

export default function Header() {
  const [data, setData] = useState();
  const [ip, setIp] = useState();
  const [search, setSearch] = useState(false);

  const handleIPChange = (e) => {
    setIp(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  const handleSearchClick = e => {
    setSearch(true)
  }

  useEffect(() => {
    async function fetchIPInfo() {
      //const response = await getIPInfo();
      //setData(response);
      if (search === false) {
        const response = await getIPInfo();
        setData(response);
      } else {
        const response = await searchIP(ip);
        setData(response);
      }
    }
    fetchIPInfo();
  }, [search]);

  let error = (
    <div className={styled.error}>
      No Information for given IP
    </div>
  );

  return (
    <div className={styled.container}>
      <div className={styled.header}>
        <h1>IP Address Tracker</h1>
        <div className={styled.searchBar}>
          <input
            type='search'
            name='searchIP'
            className={styled.search}
            placeholder='Search for any IP address'
            onChange={handleIPChange}
            onKeyPress={handleKeyPress}
          />
          <button className={styled.button} type='button' onClick={handleSearchClick} >
            <i className='fa fa-search icon'></i>
          </button>
        </div>
      </div>
      {data  ? (
        <div>
          <IPInfo
            IPAddress={data.ip}
            city={data.location.city}
            state={data.location.region}
            zipcode={data.location.postalCode}
            timezone={data.location.timezone}
            isp={data.isp}
          />
          <Map latitude={data.location.lat} longitude={data.location.lng} />
        </div>
      ): error}
    </div>
  );
}
