import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import './Style.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Remove,Add } from '../Redux/Action/Action'

function CartsDetail() {
    let {id}=useParams()
    let [data,setData]=useState([])  

let getData=useSelector((state)=>state.Reducer.cart)

    useEffect(()=>{
        compare()
    },[id])

   const dispatch=useDispatch()
   const history=useNavigate()

   let sData=(id)=>{
    dispatch(Remove(id));
    history('/')
   }

    function SendData(e){
      dispatch(Add(e))
    }
    
    let compare=()=>{
        let compareData=getData.filter((e)=>{
            return e.id == id
        })
        setData(compareData)
    }
   
  
    

  return (
    <>
    <div className="container mt-2">
        <h2 className="text-center">Items Detail Page</h2>

        <section style={{backgroundColor:'red'}} className="container mt-3 upper">
            
        {
            data.map((ele)=>{
                return(
                    <>
                    <div className="itemsDetail">
                    <div className="items_img">
                        <img width={'100%'} src={ele.images} alt={ele.title} />
                    </div>
                </div>
    
            <div className="UpperDetails">
                <Table>
                    <div className="innerDetails">
                    <tr>
                        <td><strong>Brand : </strong> {ele.brand}</td>
                        <td><strong>Price : </strong> ₹{ele.price}</td>
                        <td><strong>Category : </strong> {ele.category}</td>
                        <td><strong>Total : </strong> ₹{ele.price}</td>
                    </tr>
                    </div>

                    <div className='mt-5 d-flex justify-content-between align-item-center increment' >
                        <span style={{fontSize:24}}>-</span>
                        <span style={{fontSize:22}}>0</span>
                        <span style={{fontSize:24}} onClick={()=>SendData(ele)}>+</span>
                    </div>

                    <div className="innerDetails fix">
                    <tr>
                        <td><strong>Rating : </strong> <p style={{backgroundColor:'green',width:'27%',padding:'5px'}}>{ele.rating}★</p></td>
                        <td><strong>Order Review : </strong> {ele.reviews[0].comment}</td>
                        <td><strong>Remove : </strong> <i onClick={()=>sData(ele.id)} style={{color:'red',cursor:'pointer'}} className='fas fa-trash'/></td>
                    </tr>
                    </div>
                </Table>
            </div>
                    </>
                )
            })
        }

        </section>
    </div>
    </>
  )
}

export default CartsDetail
