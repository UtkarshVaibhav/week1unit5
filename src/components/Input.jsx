import React,{useState} from 'react'

export const Input = ({list,setList}) => {
    const [value,setValue]=useState("");
    const addFun=()=>{
        setList([...list,value]);
        setValue("");
}
  return (
    <div>
        <input type="text" value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}/>
        <button onClick={addFun}>Add</button>
    </div>
  )
}
