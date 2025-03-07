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

  let cachedData = null; // cache for API repsonse

export const getPlacesData = async (bounds) => {
    try {
        // Use cached data if available and bounds haven’t changed
        if (cachedData && JSON.stringify(bounds) === JSON.stringify(cachedData.bounds)) {
          return cachedData.data;
      }

      // Update options with dynamic bounds if provided
      if (bounds) {
          options.params.bl_latitude = bounds.sw.lat;
          options.params.tr_latitude = bounds.ne.lat;
          options.params.bl_longitude = bounds.sw.lng;
          options.params.tr_longitude = bounds.ne.lng;
      }

      // Changed: Limit the number of results for faster response
      options.params.limit = 10; // Fetch only 10 places initially

      const { data: { data } } = await axios.get(URL, options);

      // Cache the response with bounds
      cachedData = { data, bounds };
      return data;       
    } catch (error) {
        console.log(error)
        return []; // Return empty array or cached data on error
        
    }
}