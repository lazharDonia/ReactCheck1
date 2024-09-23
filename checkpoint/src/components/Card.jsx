import React from 'react'

const Card = ({product}) => {
  console.log(product)
  return (
    <div >

        <div className='flex justify-center items-center m-10 p-10 bg-orange-500  align-middle gap-4 '>
          <div className=' justify-center w-1/4 ' >
         <h1><img src ={product.urlPath}></img></h1>
         </div>
         <div className=' text-3xl text-white w-3/4  text-justify'>
         <h1 className=' text-4xl '> {product.name}</h1>
         <h1>Le Prix :  {product.price}</h1>
         <h1>{product.description}</h1>
         </div>
         </div>


    </div>
  )
}

export default Card