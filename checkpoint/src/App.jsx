import { useState } from 'react'
import Card from './components/Card'
import Name from './components/Name' 
import Description from './components/Description'
import Image from './components/Image'
import price from './components/Price'
import { product } from './product'
function App() {

  return (
    <>
    <h1 className='font-bold text-5xl text-center text-blue-600 m-9'>Hello, there ! </h1>
     <p>{product.map((el)=><Card product={el} />)}</p>
   
    </>
  )
}

export default App
