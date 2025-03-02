import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyles from './styles';

const Map = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');// this mobile variable is going to be set to false if the width is large than 600 pixels

    const coordinates = {lat:0, lng:0};

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyACmQQQi1aaZJlsOiJFgRaaSyd441LVWgQ'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={''}//Use on the restaurant on the map
            >
                

            </GoogleMapReact>

        </div>

    );

}

export default Map;  
