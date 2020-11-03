import React from 'react';
import styled from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map({latitude, longitude}) {
  
  return (
     latitude & longitude && (
      <MapContainer
        className={styled.map}
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    ) 
    
  );
}
