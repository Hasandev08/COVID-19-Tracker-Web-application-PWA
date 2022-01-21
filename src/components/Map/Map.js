import React from 'react';
import { Map as LM, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css";
import { showDataOnMap} from'../../util';
function Map({countries,center , zoom, casesType}) {
    return (
        <div className="map">
        
        <LM center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LM>
      </div>
        
    )
}

export default Map
