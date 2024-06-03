import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/AddUser'
import Cards from './components/Cards'


function App() {
 let [data,setData] = useState([
    {
      Name: "Office Task-1",
      Description: "This is a description for My First Task ",
    },
    {
      Name: "Office Task-2",
      Description:"This is description for My Second Task ",
    },
    {
      Name: "Office Task-3",
      Description: "This is a description for My Third Task ",
    }
   
  ])
 let [edit,setEdit]=useState()

  return (
    <>
    <div>
      <h1 className="todo">My Todo</h1>
        <div className='card-div'>
            <AddUser data={data} setData={setData} edit={edit} setEdit={setEdit}/>
        </div>
        <div className='card-div'>
            <Cards data={data} setData={setData} edit={edit} setEdit={setEdit} />
            {/* <ViewUser data={data} setData={setData}/> */}
        </div>
    </div>
    </>
  )
}

export default App