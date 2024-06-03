import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function Cards({data,setData ,setEdit}) {
  let [selectedStatus, setSelectedStatus] = useState()

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  }

  let handleDelete=(index)=>{
    let newData=[...data];
    newData.splice(index, 1);
    setData(newData);

  }
  return (
    <>
    {
    data.map((e,i)=>{
       return <Card style={{width: '18rem' }} className='card' key={e.Name + i}>
      <Card.Body>
        <p>Name:{e.Name}</p>
        <div>Description:{e.Description}</div><br/>
        <div className='status'>
        <label>Status:</label>
        <select value={selectedStatus} onChange={handleStatusChange} className={`select-box ${selectedStatus === 'option1' ? 'completed-background' : 'not-completed-background'}`}>
          <option value='option1'>Completed</option>
          <option value='option2' >Not Completed</option>
          
        </select>
        </div>
        <div className='button-div'>
          <Button className='edit' onClick={() =>setEdit({...e,i})} >Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className='delete' onClick={()=>handleDelete(i)}>Delete</Button>
        </div>
      </Card.Body>
    </Card> 
    })
  }
    </>
  )
}

export default Cards