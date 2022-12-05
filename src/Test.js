import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
function Test() {
    const dispatch = useDispatch()
    const {reducer} = useSelector(state =>state)
    console.log(reducer)
  return (
    <>
    <div>{reducer.no}</div>
    <button onClick={()=>{dispatch({type : "TEST" , payload :true})}}>Click me</button>
    </>
  )
}

export default Test 