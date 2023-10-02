import React,{useState} from 'react'
import TodoList from "./TodoList";
const App = () =>{
  const [task,setTask] = useState();
  const [todos,setTodos]= useState([])
  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler= (indexValue) =>{
    const newTodos=todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return(
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Todo App Management</h5>
            <form onSubmit={submitHandler}>
              <input size="40" type="text" name="task" value={task} onChange={changeHandler}></input> &nbsp;
              <input type="submit" value="Add" name="add"></input>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>

    </div>
  )
}
export default App;
