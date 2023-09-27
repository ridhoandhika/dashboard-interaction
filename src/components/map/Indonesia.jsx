import { useEffect } from "react";
import "./style.css"
import "leaflet/dist/leaflet.css"

import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";

const position = [-2.5152, 118.0259];
const MapIndonesia = () => {

    const markers = [
        {
            geocode: [4.695135, 96.749397],
            popUp:"Aceh"
        },
        {
            geocode: [-6.186486, 106.834091],
            popUp:"Jakarta Pusat"
        },
        {
            geocode: [-7.6298, 111.5239],
            popUp:"Madiun"
        }
    ]

    useEffect(()=> {
        window.dispatchEvent(new Event('resize')); 
    },[])
  return (
    <>    <MapContainer center={position} zoom={4} >
        {/* scrollWheelZoom={false} doubleClickZoom={false} boxZoom={false} touchZoom={false} */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={18}
      />
      { markers.map((marker, index)  => (<Marker key={index} position={marker.geocode}></Marker>))}
      <LayersControl position="topright">
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LayersControl>
    </MapContainer>
    </>

  );
};

export default MapIndonesia;
