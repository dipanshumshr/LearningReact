import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { useFetch } from '../fetchPlaces.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const[availablePlaces,setAvailablePlaces] = useState([]);
  const[isFetching,setIsFetching] = useState(false)
  const[errorFound,setErrorFound] = useState(null)

  useEffect(()=>{
    const responseData = async () => {
    setIsFetching(true);
    try{
      const places = await useFetch();
      navigator.geolocation.getCurrentPosition((position)=>{
          const sortedLocation = sortPlacesByDistance(places,position.coords.latitude,position.coords.longitude)
        setAvailablePlaces(sortedLocation);
        setIsFetching(false)
      })
    }
    catch(error){
      setErrorFound({title: "Error Occured" , message: error.message || "Encountered some error" })
    }  
}
    setIsFetching(false)

    responseData()
  },[])

  if(errorFound)
  {
    return <ErrorPage title = {errorFound.title} message = {errorFound.message} />
  }
  

  return (
    <Places
      title="Available Places"
      loadingText = "Still fetching wait"
      isLoading = {isFetching}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
