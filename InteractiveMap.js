import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; // Import components from the library

const mapStyles = {
  width: '100%',
  height: '400px',
};

const InteractiveMap = (props) => {
  const { google } = props;

  return (
    <div>
      <h2>Find Us on the Map</h2>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.7749, // Replace with your latitude
          lng: -122.4194, // Replace with your longitude
        }}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} /> {/* Marker for your location */}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API key
})(InteractiveMap);
