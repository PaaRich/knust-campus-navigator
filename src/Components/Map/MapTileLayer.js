import React, { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import "../../../node_modules/leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
// import SearchBtn from './SearchBtn'
import { MarkerIcon, subMarkers } from "./MarkerIcon";
//import { locMarkers } from "./coordsObject";
//import img from "./resources/hostel.jpeg";
//import FitContent from './FitContent'
// import { UserContext } from '../../App'
import RoutingMachine from "./Routing";
//THIS IMPORT HERE HELPS TO GET THE CURRENT LOCATION OF THE USER
import useGeolocation from "./useGeolocation";

//import { hover } from '@testing-library/user-event/dist/hover'

const MapTileLayer = (props) => {
  // const UserContextValue=useContext(UserContext)
  const [liveLocation, setLiveLocation] = useState(false);
  //Knust coordinates
  const position = [6.6749176575131255, -1.5716735902437842];
  //6.6749176575131255, -1.5716735902437842
  //6.671082,-1.569766

  //THIS DATA HELPS TO GET THE CURRENT LOCATION OF THE USER
  const currentLocation = useGeolocation();
  let currentPosition = [
    currentLocation.coordinates.lat,
    currentLocation.coordinates.lng,
  ];

  const styles = {
    fontSize: "35px",
    color: "black",
  };

  return (
    <MapContainer
      className="map-container"
      center={position}
      zoom={15}
      // scrollWheelZoom={false}
      //maxBounds={knustBounds}
      zoomControl={true}
    >
      {/* <TileLayer
            attribution="&copy; <a href='https://developer.here.com/documentation/examples/rest/map-tile/map-tile-normal'></a>"
             attribution='&copy; HERE 2019'
            url={hereTileUrl}/> */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {liveLocation && (
        <Circle
          center={currentPosition}
          pathOptions={{
            fillColor: "rgb(8, 187, 8)",
            color: "rgb(8, 187, 8)",
          }}
          radius={70}
        />
      )}

      {/* THIS IS HOW WE SET EVENT HANDLERS */}
      {/* eventHandlers={{
            click:()=>{}
          }} */}

      {/* <Marker
          title='click for current location'
          icon={MarkerIcon}
          position={position}>
          <Popup
            offset={[0,2]}
            keepInView={true}>
            {`Position ${Math.round(position[0])},${Math.round(position[1])}`}
          </Popup>

        </Marker> */}

      {/* multiple icons */}

      {/* THIS IS USE TO RENDER MULTIPLE MARKERS ON SPECIFIC PLACES  */}
      {/* {locMarkers.map((data, index) => (
        <Marker
          position={data.coords}
          icon={subMarkers}
          key={index}
          className="multi-icon"
          title="Click for Detail"
        >
          <Popup>
            <div className="pop-up">
              {data.address}
              <img
                src={img}
                alt="img"
                style={{ width: "100%", padding: "5px 0" }}
              />
            </div>
          </Popup>
        </Marker>
      ))} */}

      {/* THIS IS USED TO GET THE CURRENT LOCATION OF THE USER */}

      {liveLocation && currentLocation.loaded && !currentLocation.error && (
        <Marker position={currentPosition} icon={MarkerIcon}>
          <Popup>Current Location</Popup>
        </Marker>
      )}

      <BiCurrentLocation
        /* onMouseEnter */
        onClick={() => setLiveLocation((theLiveLocation) => !theLiveLocation)}
        className="live-location"
        style={styles}
      />
      {/* <RestrictBounds/> */}
      <RoutingMachine />
      {/* {UserContextValue.display && <SearchBtn/>} */}
    </MapContainer>
  );
};

export default MapTileLayer;
