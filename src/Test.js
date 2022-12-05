import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
function Test() {
    const dispatch = useDispatch()
    const {cart} = useSelector(state =>state)
    console.log(cart)
  return (
    <>
    <div>{cart.itemsInCart}</div>
    <button onClick={()=>{dispatch({type : "ADD_TO_CART" , payload :true})}}>Click me</button>
    </>
  )
}

export default Test 