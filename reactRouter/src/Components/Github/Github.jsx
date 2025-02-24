import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);

  

//   useEffect(() => {
//     fetch(`http://api.github.com/users/dipanshumshr`)
//       .then((resp) => resp.json())
//       .then((resp) => {
//         console.log(resp);
//         setData(resp);
//       });
//   }, []);

  return (
    <div>
      <h1 className="bg-emerald-800 text-6xl text-black text-center">
        {data.followers}
      </h1>
      <img src={data.avatar_url} alt="image" width={300}></img>
    </div>
  );
}

export default Github;
