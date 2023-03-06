import "./App.css";
import { useEffect,useState } from "react";
import { getPlacesData } from "./api";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";


function App() {
  const [places,setPlaces]=useState([]);
  const [coordinates,setCordinates]=useState({ lat:0,lng:0});
  const [bounds,setBounds]=useState(null);
  const [select, setSelect] = useState({places:"restuarants",rating:'3'});
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCordinates({lat:latitude,lng:longitude})
    })
  },[])
  useEffect(()=>{
    // console.log(bounds,coordinates)
     getPlacesData(coordinates).then((data)=>setPlaces(data));
    
    
  },[bounds,select])
  
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} select={select} setSelect={setSelect} />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map  setCordinates={setCordinates} setBounds={setBounds} coordinates={coordinates} places={places}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
