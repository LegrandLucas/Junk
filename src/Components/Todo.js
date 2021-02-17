import React from 'react';
import styled from 'styled-components'

const Todo = ({todos}) => {
  const Item = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    background-color: #F9FAFB;
    border-radius: 20px;


    > ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      list-style: none;

    }
  `
  return (
    <div>
      {todos.map((todo) => (
        <Item key={todo.uid}>
          <input type="checkbox"></input>
          <ul>
            <li >{todo.description}</li>
            <li >{todo.deadline}</li>
          </ul>
        </Item>
      ))}
    </div>


  );
}

export default Todo;
