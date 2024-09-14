import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container,Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Style.css'
import { Badge, Menu } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Remove } from '../Redux/Action/Action';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let dispatch=useDispatch()

  const sData=(id)=>{
    dispatch(Remove(id))
  }

  const [price,setPrice]=useState(0)
  

  const total=()=>{
    let price=0
    getData.map((ele,k)=>
       price= ele.price + price
    )
    setPrice(price)
  }

  useEffect(()=>{
    total()
  },[total])


  const getData = useSelector((state) => state.Reducer.cart)
  console.log(getData)


  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand><NavLink to={'/'} className='NavLink'>Add To Cart</NavLink></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink style={{ marginLeft: '50%' }} to={'/cartsDetail'} className='NavLink'>CartsDetail</NavLink>
            <NavLink className='NavLink'>Link</NavLink>
          </Nav>

          <Badge
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            badgeContent={getData.length} color="primary">
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
          </Badge>

        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getData.length ?

              <div style={{width:'24rem',padding:10}}>
                <Table>
                  <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Details</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      getData.map((e)=>
                        <tr>
                          <td><NavLink onClick={handleClose} to={'/cartsDetail/'+e.id}><img style={{width:'7rem',height:'7rem'}} src={e.images} alt="" /></NavLink></td>
                          <td>
                          <p><strong>Category:</strong> {e.category}</p>
                          <p> <strong>Name:</strong> {e.title}</p>
                          <p><strong>Price:</strong> ₹{e.price}</p>
                          <p><strong>Quantity:</strong> 0</p>
                          </td>
                          <td><p><i onClick={()=>sData(e.id)} style={{color:'red'}} className='fas fa-trash'></i></p></td>
                        </tr>
                      )
                    }
                    <p className='text-center'><strong>Total:</strong> ₹{price}</p>
                  </tbody>
                  
                </Table>
              </div>

              : <div className='d-flex justify-content-center align-item-center'>
                <i onClick={handleClose} className='fas fa-close smallclose cross' />
                <p style={{ fontSize: '24px', padding: '15px' }}>Your Cart is Empty</p>
                <i className="fa-solid fa-cart-shopping text-primary innerBasket" />
              </div>
          }
        </Menu>

      </Navbar>
    </div>
  )
}

export default Header
