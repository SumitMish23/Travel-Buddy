import React from "react";
import './placedetails.css';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const PlaceDetails = ({ place,index }) => {
  return (
    <Card sx={{ maxWidth: 345, padding: "0.75rem",margin:' 0.5rem auto',display:'flex',flexDirection:'column' }}>
      <CardMedia
        sx={{ height: 180, borderRadius: "0.25rem" }}
        className="card-image"
        image={place.max_photo_url}
      />
      <CardContent>
        <Typography classname='card-heading' gutterBottom variant="h5" component="div">
         {index+1}. {place.hotel_name}
        </Typography>
        
   <Rating name="read-only" value={place.review_score - 2} readOnly /> {place.review_nr}
        <Typography variant="body2" color="text.secondary">
           <AddLocationAltIcon/>
          {place.address},{place.city}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={place.url} className='card-site-button'>
          
          <Button size="small" variant="contained" color="primary">Go to the site</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
