import React, { useState } from 'react'


export const Onions = ({count}) => {
    const [item,setItem]=useState(count);
    const add=()=>{
        setItem(item+1);
    }
    const minus=()=>{
        setItem(item-1);
    }
  return (
    <div>
        <h1>Onions- {item}kgs</h1>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
    </div>
  )
}
