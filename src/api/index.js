import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-key': 'd7a5583df5msh8b7390a15fdc8e8p138c5ajsn0f8991089480',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };

export const getPlacesData = async () => {
    try {
        const {data:{data}} = await axios.get(URL, options);

        return data;        
    } catch (error) {
        console.log(error)
        
    }
}