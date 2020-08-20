import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Map as BaseMap, TileLayer, ZoomControl } from 'react-leaflet';
import Control from './Control';
import { useConfigureLeaflet, useMapServices, useRefEffect } from 'hooks';
import { isDomAvailable } from 'lib/util';

const Map = ( props ) => {
  const { children, className, defaultBaseMap = 'OpenStreetMap', mapEffect, setfilter,...rest } = props;

  const mapRef = useRef();

  useConfigureLeaflet();

  useRefEffect({
    ref: mapRef,
    effect: mapEffect
  });

  const services = useMapServices({
    names: ['OpenStreetMap']
  });
  const basemap = services.find(( service ) => service.name === defaultBaseMap );

  let mapClassName = `map`;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  if ( !isDomAvailable()) {
    return (
      <div className={mapClassName}>
        <p className="map-loading">Φορτώστε...</p>
      </div>
    );
  }

  const mapSettings = {
    className: 'map-base',
    zoomControl: false,
    ...rest,
  };

  return (
    <div className={mapClassName}>
      <BaseMap ref={mapRef} {...mapSettings}>
        { children }
        { basemap && <TileLayer {...basemap} /> }
        <ZoomControl position="bottomright" />
        <Control position="bottomright" >
        <button 
          style={{color: 'white', backgroundColor:'red', padding:'10px 10px 10px 10px', borderRadius:'6px'}}
          onClick={ () => setfilter(true) }
        >
          Εμφάνιση/Απόκρυψη μηδενικών κρουσμάτων
        </button>
      </Control>
      </BaseMap>
    </div>
  );
};

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
  mapEffect: PropTypes.func
};

export default Map;