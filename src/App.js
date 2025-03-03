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
    

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
            setCoordinates({lat:latitude, lng: longitude});

        })
    })

    useEffect(() =>{
        console.log(coordinates, bounds);
        getPlacesData()
             .then((data) =>{
                console.log(data);

                setPlaces(data);
             })

    }, [coordinates, bounds]);


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