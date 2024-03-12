import Map from "./components/Map"
import LocationSearch from "./components/LocationSearch"
import { useState } from "react"

import type { Place } from "./api/Place"

function App() {
  const [place,setPlace]=useState<Place|null>(null);

 return <div className="h-screen w-screen grid grid-cols-12">

  <div className="col-span-3 p-2">
    <LocationSearch onPlaceClick={(p)=>setPlace(p)}></LocationSearch>
  </div>
 <div className="col-span-9">
 <Map place={place}></Map>
 </div>

  </div>
}
export default App
