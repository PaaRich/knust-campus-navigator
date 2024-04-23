import React,{useState} from 'react'
import {BiCurrentLocation} from 'react-icons/bi'
import '../../../node_modules/leaflet/dist/leaflet.css'
import { MapContainer,TileLayer,Marker,Popup,Circle} from 'react-leaflet'
// import SearchBtn from './SearchBtn'
import { MarkerIcon, subMarkers} from './MarkerIcon'
import { locMarkers } from './coordsObject'
import img from './resources/hostel.jpeg'
//import FitContent from './FitContent'
// import { UserContext } from '../../App'
import RoutingMachine from './Routing'
//THIS IMPORT HERE HELPS TO GET THE CURRENT LOCATION OF THE USER
import useGeolocation from './useGeolocation'




//import { hover } from '@testing-library/user-event/dist/hover'




const MapTileLayer = (props) => {
  
    
      
  // const UserContextValue=useContext(UserContext)
  const [liveLocation,setLiveLocation]=useState(false)
  //Knust coordinates
  const position=[6.6749176575131255, -1.5716735902437842]
  //6.6749176575131255, -1.5716735902437842
  //6.671082,-1.569766
 
  //THIS DATA HELPS TO GET THE CURRENT LOCATION OF THE USER
  const currentLocation=useGeolocation();
  let currentPosition=[currentLocation.coordinates.lat,currentLocation.coordinates.lng]



  // const bounds = [
  //   [southWestLat, southWestLng], // Southwestern point coordinates
  //   [northEastLat, northEastLng]  // Northeastern point coordinates
  // ];

  

  // const knustBounds=[
  //   [6.6706,-1.6952],
  //   [6.6923, -1.6706]
  // ]
    // Custom map view to restrict panning outside KNUST campus
    // const RestrictBounds = () => {
    //   const map = useMap();
    //   map.setMaxBounds(knustBounds);
    //   map.on('drag', () => {
    //     map.panInsideBounds(knustBounds, { animate: true });
    //   });
    //   return null;
    // };
    //THE API KEY
    // const here = {
    //   apiKey:  '4xD3K8bsT_LRapO9Ukyd6ubX4L3m3nPIuAi7k72zHjBVVgs-aOu8lwTz6Qp1_hrYa4XQJtsSKc6yba6Wv5qc3g'
    // }
    //TO CHANGE THE STYLE you can use the ff 
    // normal.day - normal.day.grey - normal.day.transit - reduced.day - normal.night - reduced.night - pedestrian.day
    //const style = 'reduced.night';
    
    // const hereTileUrl = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/11/525/761/256/png8?apiKey=${here.apiKey}`;
    
    // const map = L.map('map', {
    //    center: [37.773972, -122.431297],
    //    zoom: 11,
    //    layers: [L.tileLayer(hereTileUrl)]
    // });
    // map.attributionControl.addAttribution('&copy; HERE 2019');
    

  const styles={
  fontSize:'35px',
  color:'black'
  }

  return (
        <MapContainer
          className='map-container'
          center={position}
          zoom={15}
          
          // scrollWheelZoom={false}
          //maxBounds={knustBounds}
          zoomControl={true}>
          {/* <TileLayer
            attribution="&copy; <a href='https://developer.here.com/documentation/examples/rest/map-tile/map-tile-normal'></a>"
             attribution='&copy; HERE 2019'
            url={hereTileUrl}/> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
        liveLocation && 
        <Circle
          center={currentPosition}
          pathOptions={
            {
              fillColor:'rgb(8, 187, 8)',
              color:'rgb(8, 187, 8)'}
          }
          radius={70} />
        }
        

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
         {
          locMarkers.map((data,index)=>
            <Marker
              position={data.coords}
              icon={subMarkers}
              key={index}
              className='multi-icon'
              title='Click for Detail'
            >
              <Popup>
                <div className='pop-up'>
                  {data.address}
                  <img src={img} alt='img' style={{width:'100%',padding:'5px 0'}}/>
                </div>
              </Popup>
            </Marker>
          )
         }

    {/* THIS IS USED TO GET THE CURRENT LOCATION OF THE USER */}

    {
    liveLocation && currentLocation.loaded && !currentLocation.error && 
      <Marker
      position={currentPosition}
      icon={MarkerIcon}>
        <Popup>current Location</Popup>
      </Marker>
      }
      
      
      <BiCurrentLocation
        /* onMouseEnter */
        onClick={()=>setLiveLocation(theLiveLocation=>!theLiveLocation)}  
        className='live-location'
        style={styles}/>
      {/* <RestrictBounds/> */}
      <RoutingMachine/>
    {/* {UserContextValue.display && <SearchBtn/>} */}
  </MapContainer>

  )
}

export default MapTileLayer
