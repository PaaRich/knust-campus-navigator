import L from "leaflet";
import { createControlComponent} from "@react-leaflet/core";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import {subMarkers,MarkerIcon } from "./MarkerIcon";
//import useGeolocation from "./useGeolocation";
// import { UserContext } from "../../App";



const CreateRoutineMachineLayer = (props) => {

  // const currentLocation=useGeolocation();
  // console.log(currentLocation.coordinates.lat,currentLocation.coordinates.lng) 
  
  const customMarker=(i, wp, nWps)=> {
    const marker=L.marker(wp.latLng,
      {icon: MarkerIcon,
       draggable:true,
       title:'Drag to your desired destination or make use of the search input',
       className:"leaflet-marker-icon leaflet-zoom-animated leaflet-interactive leaflet-marker-draggable" })
    
        marker.on('click',()=>console.log('ma'))

      if (i === 0 || i === nWps - 1) {
        return marker;
    } else {
        return marker;
    }
}

    const instance = L.Routing.control({
      
    //   position: 'topleft',
      waypoints: [
        L.latLng(6.685473646929788, -1.5706742042892436),
        L.latLng(6.672629139283366, -1.5726370614513747)
      ],
      // waypoints:[
      //   L.latLng(currentLocation.coordinates.lat,currentLocation.coordinates.lng),
      //   L.latLng(6.672629139283366, -1.5726370614513747)
      // ],
      routeWhileDragging:true,
      lineOptions: {
        styles: [
          {
            color: 'red',
          },
        ],
      },
      autoRoute:true,
      collapsible:true,
      useZoomParameter:true,
      createMarker:customMarker,
      //showAlternatives:true,
      geocoder:L.Control.Geocoder.nominatim()
    });
  
    return instance;
  };
  
  // Pass our createRoutingMachineLayer to the createControlHook:
  const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);
  
  // Export
  export default RoutingMachine;
