import L from "leaflet";

const MarkerIcon = new L.Icon({
  iconUrl: require("./resources/wired-flat-18-location-pin.gif"),
  iconRetinaUrl: require("./resources/wired-flat-18-location-pin.gif"),
  iconSize: new L.Point(65, 80),
  //iconSize: [60, 75],
  //iconAnchor: [0, 50],
  className: "marker-icon",
});

const DestinationMarker = new L.icon({
  iconUrl: require("./resources/R.png"),
  iconRetinaUrl: require("./resources/R.png"),
  iconSize: new L.Point(25, 40),
  //iconAnchor: [10, 35],
});

const subMarkers = new L.icon({
  iconUrl: require("./resources/wired-flat-18-location-pin (1).gif"),
  iconRetinaUrl: require("./resources/wired-flat-18-location-pin (1).gif"),
  iconSize: new L.Point(60, 75),
  className: "sub-marker-icon",
  // iconAnchor: [22, 94],
  // popupAnchor: [-3, -76],
  // shadowUrl: 'my-icon-shadow.png',
  // shadowSize: [68, 95],
  // shadowAnchor: [22, 94]
});

export { MarkerIcon, subMarkers, DestinationMarker };
