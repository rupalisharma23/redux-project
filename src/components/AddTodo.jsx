import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/slices/todoSlices'

export default function AddTodo() {
    const [data,setData] = useState('')
    const dispatch = useDispatch()

    const submit = () =>{
       dispatch(addTodo(data))
       setData('')
    }

  return (
    <div>
        <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} />
        <button onClick={()=>{submit()}} >add</button>
    </div>
  )
}
