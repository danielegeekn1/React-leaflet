import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import "./app.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
function App() {
  const markers = [
    {
      geoCode: [48.86, 2.3522],
      popup: "Hello I a popup",
    },
    {
      geoCode: [48.85, 2.3522],
      popup: "Hello I a popup 2",
    },
    {
      geoCode: [48.853, 2.34],
      popup: "Hello I a popup 3",
    },
  ];
  const customIcon = new Icon({
    //iconUrl: "https://as2.ftcdn.net/v2/jpg/02/98/28/57/1000_F_298285715_ct4qtZOJH119A39TdMrbkLsfziVCX1Rz.jpg",
    iconUrl: require("./img/map.png"),
    iconSize: [38, 38],
  });
  return (
    <div>
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker position={marker.geoCode} icon={customIcon}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
