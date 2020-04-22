//React
import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

//Map
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";

//Styles & AOS animation
import { MapsGoogle } from "./styles/Maps.style";

//Images
import { Edit2, User } from "react-feather";

//Contexto
import { PrincipalContext } from "../../context/PrincipalContext";

//Compoments
import Loading from "../Loading";

const MapGoogleBox = withRouter((props) => {
  const { user, changeFilterAidsRequest, setMessageError } = useContext(
    PrincipalContext
  );

  //Geocalización
  Geocode.setApiKey("AIzaSyBusMqSVKz2_bdu_A8-5I4y1T54qK_hbRw");

  //MAP
  const [markerData, setMarkerData] = useState([]);

  const style = {
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    const arrayMarker = props.aidsMarket.map((aids, i) => {
      const street = `${aids.creatorUserid.street} ${aids.creatorUserid?.number}`;
      return Geocode.fromAddress(street).then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        const user = aids.creatorUserid;

        return { lat, lng, ...user };
      });
    });

    Promise.all(arrayMarker).then((response) => setMarkerData(response));
  }, [changeFilterAidsRequest]);

  const clickMarker = (value) => {
    props.history.push(`/mi-peticion/${value}`);
  };

  return (
    <>
      {markerData.length == 0 ? (
        <Loading />
      ) : (
        <MapsGoogle>
          <Map
            google={google}
            style={style}
            initialCenter={props.personGeo}
            zoom={13}
          >
            <Marker
              title={user.name}
              name="hola"
              id={1}
              position={props.personGeo}
            ></Marker>

            {markerData.map((marker, i) => {
              return (
                <Marker
                  title={marker.name}
                  name={marker.name}
                  key={i}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  // onClick={() =>
                  //   props.history.push(`/mi-peticion/${marker._id}`)
                  // }
                ></Marker>
              );
            })}
          </Map>
        </MapsGoogle>
      )}
    </>
  );
});
export default GoogleApiWrapper({
  apiKey: "AIzaSyBusMqSVKz2_bdu_A8-5I4y1T54qK_hbRw",
})(MapGoogleBox);
