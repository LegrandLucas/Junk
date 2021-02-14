import React, {useState, useEffect} from 'react'
import { TextField } from '@material-ui/core';
import { PersonPinSharp } from '@material-ui/icons';


const Todoform = ( props ) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('')
  const [todo, setTodo] = useState({})

  useEffect(() => {
    loadDatas()
  }, [todos])

  const loadDatas = () => {
    setTodos(props.todos)
  }



  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, todo])
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add title"
          required
          variant="outlined"
          margin="normal"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </form>
    </div>
  )
}

export default Todoform;
