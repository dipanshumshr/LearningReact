import { useState, useEffect } from "react";

function useCurrency(currency) {
  const [data,setData] = useState({});
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((resp)=>{ return resp.json();})
    .then((resp)=> setData(resp))
  },[currency]);
 
  return data;
}

export default useCurrency;
