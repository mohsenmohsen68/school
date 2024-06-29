"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

export default function Map() {

    var greenIcon = L.icon({
        iconUrl: '/img/map-marker.svg',
        iconSize:     [40, 40], // size of the icon
        // shadowSize:   [50, 64], // size of the shadow
        // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        // shadowAnchor: [4, 62],  // the same for the shadow
        // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

  return (
    <MapContainer style={{ width: "100%", height: "100%" }} center={[37.53007, 45.08591]} zoom={17} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      
      <Marker icon={greenIcon} position={[37.53007, 45.08591]}>
        <Popup>
          پژوهش سرای <br /> باقرالعلوم
        </Popup>
      </Marker>
    </MapContainer>
  );
}
