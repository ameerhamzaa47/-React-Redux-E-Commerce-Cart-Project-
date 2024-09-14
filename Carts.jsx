import React, { useEffect, useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Add } from '../Redux/Action/Action'

function Carts() {
    let [data,setData]=useState([])
    useEffect(()=>{
        getData()
    },[])

   async function getData(){
       let result=await fetch('https://dummyjson.com/products')
        result=await result.json()
        setData(result.products)
    }

    let dispatch= useDispatch()

    function SendData(e){
      dispatch(Add(e))
    }

  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Add To Cart Project</h1>

<div className='d-flex flex-wrap justify-content-center '>
      {
      data.map((item) => 
          <Card key={item.id} className='cart-style' style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={item.images} alt={item.title} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>Price : ₹{item.price}</Card.Text>
              <Button 
              onClick={()=>SendData(item)}
              variant="primary col-lg-12">Add to Cart</Button>
            </Card.Body>
          </Card>
        )
        }
      </div>
  </div>
  )
}

export default Carts
