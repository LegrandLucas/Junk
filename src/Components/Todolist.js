import React, { useEffect } from 'react';
import styled from 'styled-components';
import Todo from './Todo';


const Todolist = ({ todos }) => {

  const done = []
  const doing = []

  const List = styled.div`
    background-color: white;
    padding: 10px;
    margin: 10px;
        border-radius: 10px;
    border: solid .5px white;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 10px 10px 0 rgb(0 0 0 / 19%);
  `

const filteringTodos = () => {
 todos.map((todo) => {
   if (todo.statut === true) {
     doing.push(todo)
  } else {
     done.push(todo)
   }
 })
}

filteringTodos()


  return (
    <List>
      <h1>Todo list</h1>
      <Todo todos={doing}/>
      <h1>Done</h1>
      <Todo todos={done} />
    </List>
  )
}

export default Todolist;
