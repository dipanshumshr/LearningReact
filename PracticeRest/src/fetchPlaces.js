export const useFetch = async () => {
    const response = await fetch ("http://localhost:3000/places");
          if(!response.ok)
          {
            throw new Error("fetching failed something off with the url requested");
          }
          const respData = await response.json();
    const places = respData.places;
    return places;
}  


export const postPlaces = async (places) => {
        const response = await fetch ("http://localhost:3000/user-places",
            { method:"PUT",
                body:JSON.stringify({places}),
                headers: {
                    "Content-type" : "application/json"
                }
            })
        if(!response.ok)
        {
            throw new Error("Sending data failed")
        }
    const result = await response.json()
    console.log(result);
   
}