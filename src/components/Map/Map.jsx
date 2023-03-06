import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'
import { Rating } from '@mui/material';
import { Paper,Typography } from '@material-ui/core';
import { Marker } from '@react-google-maps/api';


const Map = ({setCordinates,setBounds,coordinates,places}) => {
 console.log({places})
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div style={{ height: 'calc(100vh - 70px)', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      center={coordinates}
      
      onChange={(e)=>{
        
        setCordinates({lat:e.center.lat,lng:e.center.lng});
        setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
      }}
      
    >
      {  places?.result?.map((place,i)=>{
        return  <Paper elevation={6} className='paper' lat={place.latitude} lng={place.longitude} >
        <Typography  className='paper-title' variant="subtitle2" gutterBottom> {place.hotel_name}</Typography>
        <img  src={place.main_photo_url ? place.main_photo_url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name}/>
        <Rating name="read-only" size="small" value={Number(place.review_nr)} readOnly />
      </Paper>
      })}
   
    </GoogleMapReact>
  </div>
  )
}

export default Map;