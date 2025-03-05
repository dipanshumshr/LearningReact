import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const player = useRef()
  const [name,setName] = useState("")

  
  const handleDisplay = () => { 
    setName(player.current.value);
  }
 
  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input ref= {player} type="text"/>
        <button onClick={handleDisplay}>Set Name</button>
      </p>
    </section>
  );
}
