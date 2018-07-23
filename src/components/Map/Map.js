import { compose, withProps, withState, withHandlers } from "recompose";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import React from "react";
const Map = props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 32.797421, lng: -79.9412164 }}
  >
    {props.friends &&
      props.friends.map(({ name, lng, lat, avatar }) => (
        <Marker position={{ lat, lng }} icon={avatar} />
      ))}
  </GoogleMap>
);

const requiredProps = {
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};

const ComposedComponent = compose(
  withProps(requiredProps),
  withScriptjs,
  withGoogleMap
)(Map);

export default ComposedComponent;
