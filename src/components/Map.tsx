import type { Place } from "../api/Place";
import "leaflet/dist/leaflet.css";
import type {LeafletEvent, Map as leafletMap} from "leaflet"
import { useEffect ,useRef } from "react";
import { MapContainer,TileLayer,Marker } from "react-leaflet";



interface MapProps {
  place: Place | null;
}

export default function Map({ place }: MapProps) {
 const mapRef=useRef<leafletMap | null>(null);
 useEffect(()=>{
        if(mapRef.current && place){
            mapRef.current.flyTo([place.latitude,place.longitude])
        }
 },[place])
 
    return <MapContainer 
    center={[40.7,-74]}
    ref={mapRef}
    zoom={12}
    scrollWheelZoom
    className="h-full"
    >
       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {place && <Marker position={[place.latitude, place.longitude]}></Marker>}
    </MapContainer>;
}
