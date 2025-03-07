import React, {useState,useEffect}from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Add ThemeProvider and createTheme

import { getPlacesData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


// Create a default theme
const theme = createTheme();

const App = () => {

    const [places, setPlaces] = useState([]);
    

    const [coordinates, setCoordinates] = useState({lat:0, lng:0});
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        setCoordinates({lat:0,lng:0});
        
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            },
            (error) => {
                console.error("Geolocation failed:", error);
                // Fallback to a neutral world view (e.g., Atlantic Ocean or a city like San Francisco)
                setCoordinates({ lat: 0, lng: 0 }); // Or use { lat: 37.7749, lng: -122.4194 } for San Francisco
            }
        );
    }, []); // Empty dependency array ensures this runs only once on mount

    useEffect(() => {
        console.log("Current coordinates:", coordinates);
        console.log("Current bounds:", bounds);
        if (coordinates.lat && coordinates.lng) { // Ensure coordinates are valid before fetching
            getPlacesData(bounds)
                .then((data) => {
                    console.log(data);
                    setPlaces(data);
                })
                .catch((error) => console.error("Error fetching places:", error));
        }
    }, [coordinates, bounds]); // Fetch places when coordinates or bounds change


    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <List />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Map 
                            setCoordinates = {setCoordinates}
                            setBounds = {setBounds}
                            coordinates={coordinates}
                        />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};

export default App;