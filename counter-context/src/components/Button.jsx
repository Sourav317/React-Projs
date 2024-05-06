import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';
import Component1 from './Component1'

const Button = () => {
    const value = useContext(CounterContext);

  return (
    <>
    <button onClick={() => value.setCount((prevCount) => prevCount + 1)}>Button </button>
    <span><Component1/></span>
    </>
  )
}

export default Button