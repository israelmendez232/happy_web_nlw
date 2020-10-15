import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import mapIcon from "../utils/mapIcon";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy Web" />

          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Timbó</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map 
        center={[-26.8271638,-49.2773353]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        <Marker 
          icon = {mapIcon}
          position = {[-26.8271638,-49.2773353]}
        >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                Lar das meninas
                <Link to="/orphanages/1">
                    <FiArrowRight size={20} color="#FFF" />
                </Link>
            </Popup>
        </Marker>
      </ Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  )

}

export default OrphanagesMap;
