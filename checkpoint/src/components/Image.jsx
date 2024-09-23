import React from 'react'
import { product } from '../product'

const Image = ({urlPath}) => {
  return (
    <div><img src={urlPath}></img></div>
  )
}

export default Image