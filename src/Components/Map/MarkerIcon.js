import L from 'leaflet';

const MarkerIcon= new L.Icon({
    iconUrl: require('./resources/RedMarker.png'),
    iconRetinaUrl: require('./resources/RedMarker.png'),
    // iconSize: new L.Point(60, 75),
    iconSize:[25,40],
    iconAnchor:[10,35],
    className:'marker-icon'
})

const DestinationMarker= new L.icon({
    iconUrl:require('./resources/Destinaion.png'),
    iconRetinaUrl:require('./resources/Destinaion.png'),
    iconSize:[55,60],
    iconAnchor:[10,35]
})

const subMarkers=new L.icon({
    iconUrl:require('./resources/R.png'),
    iconRetinaUrl:require('./resources/R.png'),
    iconSize:[28,40],
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
})


export {MarkerIcon,subMarkers,DestinationMarker}
