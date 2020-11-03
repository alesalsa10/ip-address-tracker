import React, { useState, useEffect } from 'react';
import styled from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        //setCoords([position.coords.latitude, position.coords.longitude]);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      console.log('Not available');
    }
  }, [lat, lon]);

  return (
    lat & lon && (
      <MapContainer
        className={styled.map}
        center={[lat, lon]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[lat, lon]}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    )
  );
}
