import React from 'react';

//import stif from material UI
import { CssBaseline, Grid} from '@mui/material';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';



const App = () =>{
    return(
        // turn to react fragment and call as self closing css baseline components
        //Grid of type item =2 properties
        //s=12-Take full width on mobile devices
        //md=4-Medium & Lager its goin to take only 4 spaces
        //<List/> //self closing tag
        //Grid contain Map- Larger than the list
        
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                
                <Grid item xs={12} md={4}>
                    <List/> 
                </Grid>

                
                <Grid item xs = {12} md = {8}>
                    <Map/>

                </Grid>

            </Grid>
        

        </>
    );
}

export default App;