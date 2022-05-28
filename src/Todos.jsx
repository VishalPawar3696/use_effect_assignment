import React, { useEffect,useState } from 'react'

const Todos = () => {


const [newTodo,setnewTodo]=useState("");
const [todos,setTodos]=useState([]);
const saveInfo=()=>{
  ///acall api to save this info o backend
  
  fetch("http://localhost:8080/todos",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({
    text:newTodo,
    isCompleted:false,
  
  })
  
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    setnewTodo("");
    // setTodos(data)
  })
  
  
  
  
  
  }

useEffect(()=>{
  fetch("http://localhost:8080/todos?_page=1&_limit=111")
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    setTodos(data)
  })
},[])



  return (
    <div>
    <div>Todos</div>
    
<div>
<input 
value={newTodo}
onChange={({target})=>setnewTodo(target.value)}

/>

<button onClick={saveInfo}>+</button>

</div>
  
  {todos.map((todo)=>(
    <div key={todo.id}>{todo.text}</div>
  ))}

  {/* <h1>{todos}</h1> */}



    </div>
  )
}

export default Todos