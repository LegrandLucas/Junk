import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';


const Todolist = ({ todos }) => {
  const List = styled.div`
    background-color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    border: solid .5px white;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 10px 10px 0 rgb(0 0 0 / 19%);
  `


  return (
    <List>
      <h1>Todo list</h1>
      <Todo todos={todos}/>
    </List>
  )
}

export default Todolist;
