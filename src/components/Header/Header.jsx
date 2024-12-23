import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  h1 {
    margin: 0;
    font-size: 24px;
    color: #333;
  }
  nav {
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      gap: 15px;
    }
    li {
      margin: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s;
  &:hover {
    color: #0056b3;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Task App</h1>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/form">Form</StyledLink>
          </li>
          <li>
            <StyledLink to="/comments">Comments</StyledLink>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
