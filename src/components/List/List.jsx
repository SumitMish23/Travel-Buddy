import React from "react";
import './list.css'
import { useState,useEffect } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
const List = ({ places,select,setSelect }) => {

  useEffect(() => {
    console.log(select)
  }, [select])
  console.log(select)
  return (
    <div className="container">
      <Typography variant="h4" className="heading" >
        Restuarants,Hotels & Attractions near you !
      </Typography>
      <FormControl className="form-select">
        
        <Select value={select.places} onClick={(e) => setSelect({...select,places:e.target.value})}>
          <MenuItem value="restuarants">Restuarants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <Select value={select.rating} onClick={(e) => setSelect({...select,rating:e.target.value})}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className="list">
        {places?.result?.map((place, index) => {
          return (
            <Grid item key={index} xs={12}>
              <PlaceDetails place={place}  index={index}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default List;
