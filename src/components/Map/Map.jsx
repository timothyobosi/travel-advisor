import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');// this mobile variable is going to be set to false if the width is large than 600 pixels



    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyACmQQQi1aaZJlsOiJFgRaaSyd441LVWgQ'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={2} // Start with world view
            minZoom={1}    // Allow zooming out to world view
            maxZoom={20}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={(e) =>{
                console.log(e);
                setCoordinates({lat:e.center.lat, lng:e.center.lng});
                setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
            }}
            onChildClick={''}//Use on the restaurant on the map
            >
                

            </GoogleMapReact>

        </div>

    );

}

export default Map;  
