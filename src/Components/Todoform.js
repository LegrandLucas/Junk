import React, {useState, useEffect} from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const Todoform = ( props ) => {
  const [todos, setTodos] = useState([]);
  const [uid, setUid] = useState('')
  const [statut, setStatut] = useState(true)
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  // const [todo, setTodo] = useState({})

  const todo = {
    uid,
    statut,
    description,
    deadline,
  }

  useEffect(() => {
    loadDatas()
  }, [todos])

  const loadDatas = () => {
    setTodos(props.todos)
  }



  const handleSubmit = e => {
    e.preventDefault();
    todos.push(todo)
  }

  const List = styled.div`
    background-color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: solid .5px white;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 10px 10px 0 rgb(0 0 0 / 19%);
    width: 300px;
    text-align-last: center;
  `

  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `


  return(
    <List>
      <h1>Add todo</h1>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Add description"
          required
          variant="outlined"
          margin="normal"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <TextField
          label="Add deadline"
          required
          variant="outlined"
          margin="normal"
          onChange={e => setDeadline(e.target.value)}
          value={deadline}
        />
      </Form>
    </List>
  )
}

export default Todoform;
