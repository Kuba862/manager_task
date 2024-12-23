import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  h1 {
    font-size: 24px;
    color: #333;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
  }
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
  }
`;

const Form = () => {
  const [users, setUsers] = useState(['Carlo', 'Ignacio']);
  const [newUser, setNewUser] = useState('');

  const addUserHandler = () => {
    if (newUser.trim() === '') {
      alert('Please enter a valid name');
      return;
    }
    setUsers(users.push(newUser));
    setNewUser('');
  };

  return (
    <FormStyle>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={addUserHandler}>Add User</button>
    </FormStyle>
  );
};

export default Form;
