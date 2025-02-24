import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function User() {
  const { name } = useParams(); 
//   const [data, setData] = useState({});

    const data = useLoaderData();   //this is useLoaderData where we are passing the params

//   useEffect(() => {          this is useEffect of rendering data 
//     fetch(`https://api.github.com/users/${name}`)
//       .then((resp) => resp.json())
//       .then((resp) => {
//         console.log(resp);
//         return setData(resp);
//       });
//   }, [name]);
  return (
    <div>
      <h1>Hey there {name}</h1>
      <img src={data.avatar_url} alt="image" width={300}></img>
    </div>
  );
}

export default User;
