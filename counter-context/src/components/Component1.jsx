import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const Component1 = () => {
    const value = useContext(CounterContext);

  return (
    <>value is {value.count}</>

  )
}

export default Component1