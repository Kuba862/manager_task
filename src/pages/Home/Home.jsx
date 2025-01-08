import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 1.2rem;
  ol {
    list-style-type: decimal;
    padding-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    li {
      width: 100%;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <ol>
        <li>
          The <Link to="/form">Form</Link> component is responsible for adding a
          new user. After entering a name and clicking the confirmation button,
          the new user should appear on the list. However, this functionality is
          not working as expected due to an error in the code. Your task is to
          identify the error, explain the reason it occurs, and, if possible,
          provide a solution to fix it.
        </li>
        <li>
          The <Link to="/comments">Comments</Link> component is responsible for
          adding a new comment. The input can either be plain text or contain
          HTML tags. After submitting the comment using the button, it should
          appear on the list. While there is no official error in the
          implementation, this component introduces a potential security risk.
          Your task is to identify the specific part of the code that poses this
          risk and explain why it is a concern.
        </li>
        <li>
          The <Link to="/comments">Comments</Link> component has a UX issue.
          Identify the issue and fix it.
        </li>
      </ol>
    </HomeStyle>
  );
};

export default Home;
