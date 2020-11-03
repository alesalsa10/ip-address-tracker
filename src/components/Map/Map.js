import React, {useEffect} from 'react';
import styled from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ChangeView from '../ChangeView/ChangeView'

export default function Map({latitude, longitude}) {

  useEffect(() => {}, [latitude, longitude])
  
  return (
     latitude & longitude && (
      <MapContainer
        className={styled.map}
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <ChangeView center={[latitude, longitude]} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>Located here</Popup>
        </Marker>
      </MapContainer>
    ) 
    
  );
}
