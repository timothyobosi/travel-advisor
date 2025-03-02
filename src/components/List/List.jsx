import React, {useState} from 'react';

import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select  } from '@mui/material';

import useStyles from './styles';

const List = () => {

    const classes = useStyles();
    //use state
    const [type, setType] = useState('restaurants');//accepts 1 param which is the 1st initial varaiable that is is going to be put into the variable of type
    const [rating, setRating] = useState('');
    
    return(
        <div className={classes.container}>
            <Typography variant="4"> Restaurants, Hotels & Attractions arround you</Typography>
            <FormControl className={classes.FormControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=> setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.FormControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>              
        </div>

    );

}

export default List;