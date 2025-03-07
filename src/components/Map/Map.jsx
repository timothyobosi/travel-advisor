import React, {Suspense, lazy, useCallback} from 'react';

import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


import useStyles from './styles';

const GoogleMapReact = lazy(()=> import('google-map-react'));

const Map = React.memo(({ setCoordinates, setBounds, coordinates, defaultZoom = 14, loadingLocation }) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');// this mobile variable is going to be set to false if the width is large than 600 pixels

    const [zoom, setZoom] = React.useState(loadingLocation ? 2 : defaultZoom); // Start with a zoom level to see buildings clearly

    const handleZoomIn = useCallback(() => {
        setZoom((prevZoom) => Math.min(prevZoom + 1, 20));
    }, []);

    const handleZoomOut =useCallback (() => {
        setZoom((prevZoom) => Math.max(prevZoom - 1, 1));
    }, []);

    const handleMapChange = useCallback((e) => {
        console.log(e);
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        setZoom(e.zoom);
    }, [setCoordinates, setBounds]);

    return(
        <div className={classes.mapContainer}>
            <Button onClick={handleZoomOut}>-</Button>
            <Button onClick={handleZoomIn}></Button>
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyACmQQQi1aaZJlsOiJFgRaaSyd441LVWgQ'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={zoom} // Start with world view
            minZoom={1}    // Allow zooming out to world view
            maxZoom={20}
            margin={[50, 50, 50, 50]}
            options={{
                mapTypeId: 'hybrid', // Use 'hybrid' for terrain + 3D buildings, or 'terrain' for elevation only
                mapTypeControl: true, // Show map type switcher (roadmap, terrain, hybrid, satellite)
                tilt: zoom >=15 ? 45 : 0 ,             // Enable 3D tilt for building visibility (works at zoom 15+)
                styles: [
                    {
                        featureType: 'building',
                        elementType: 'geometry',
                        stylers: [{ visibility: 'on' }, { color: '#ffffff' }], // Highlight buildings
                    },
                    {
                        featureType: 'landscape',
                        elementType: 'geometry',
                        stylers: [{ visibility: 'on' }], // Show terrain clearly
                    },
                ],
            }}
            onChange={handleMapChange}
            onChildClick={''}//Use on the restaurant on the map
            >
                

            </GoogleMapReact>

        </div>

    );

});

export default Map;  
