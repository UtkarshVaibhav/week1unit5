import React from 'react'
import { Carrots } from './Carrots'
import { Onions } from './Onions'
import { Potatoes } from './Potatoes'
import { Tomatoes } from './Tomatoes'

export const Vegetables = () => {
  return (
    <>
        <Tomatoes count={10}/>
        <Potatoes count={8}/>
        <Carrots count={5}/>
        <Onions count={7}/>
    </>
  )
}
