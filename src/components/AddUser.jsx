import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function AddUser({data,setData ,edit,setEdit}) {
    let [name,setName]=useState("")
  let [description,setDescription]=useState("")

  useEffect(()=>{
    setName(edit?.Name)
    setDescription(edit?.Description)
 console.log(edit)
  },[edit])
    let handleSubmit=()=>{
      let newUser={
        Name:name,
        Description:description
      }
      let newArray = [...data]
      newArray.push(newUser)
      setData(newArray)
    
    }
    let handleEdit=()=>{
      let newUser={
        Name:name,
        Description:description
      }
      
      setData(data.map((e,i)=>{ 
        if(i==edit.i)
          {
            return newUser
          }
          return e
      }))
    setName("")
    setDescription("")
    setEdit(undefined)
    }
  return (
    <><div>
    <div>
    <div className='inputbox'>
      <input type="text" placeholder='Todo Name' className='inputone'  value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder='Todo Description' className='input'value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button className='button' type='submmit' onClick={edit?.i!==undefined?handleEdit:handleSubmit}>{edit?.i!==undefined?"EditTodo":"AddTodo"}</Button>
    </div>
    <div className='title'>
      <h6 className='h6'>My Todos</h6>
      <h6 className='dropdown'>Status Fliter:<Dropdown.Toggle id="dropdown-basic">
        All
      </Dropdown.Toggle></h6>
    </div>
</div>
</div>

    </>
  )
}

export default AddUser