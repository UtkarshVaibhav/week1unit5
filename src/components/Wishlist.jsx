import React, { useState } from 'react'
import { Input } from './Input';

export const Wishlist = () => {
    const [list,setList]=useState([]);
  return (
    <>
    <div>
        <h1>Wishlist</h1>
        {
        list.length===3?<h3>You cannot add more than 3 items to wishlist</h3>:<Input list={list} setList={setList}/>
        }
        <ul>
        {
            list.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
        }
    </ul>
    </div>
    </>
  )
}
