import { compose, withProps } from "recompose";
import { connect } from "react-redux";
import { toggleDetails } from "../../redux/reducers";
import glamorous from "glamorous";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import React from "react";

const WindowContent = glamorous.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  textAlign: "center",
  " h3": {
    fontSize: "1rem",
    color: `${theme.primaryDark}`
  },
  " p": {
    marginTop: "0px"
  },
  " img": {
    margin: "auto",
    width: "6rem"
  }
}));

const Map = props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 32.797421, lng: -79.9412164 }}
  >
    {props.friends &&
      props.friends.map(
        ({ name, lng, lat, avatar, showDetails, info }, idx) => (
          <Marker
            position={{ lat, lng }}
            key={idx}
            onClick={e => props.toggleDetails({ idx })}
          >
            {showDetails && (
              <InfoWindow>
                <WindowContent>
                  <img src={avatar} alt={name} />
                  <h3>{name}</h3>
                  <p style={{ maxWidth: "150px" }}>{info}</p>
                </WindowContent>
              </InfoWindow>
            )}
          </Marker>
        )
      )}
  </GoogleMap>
);

const requiredProps = {
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDpzkd_jDRkpqbXdetfATcqMJ417Mn2jqc&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};

const ComposedComponent = compose(
  withProps(requiredProps),
  withScriptjs,
  withGoogleMap
)(Map);

export default connect(state => state, { toggleDetails })(ComposedComponent);
