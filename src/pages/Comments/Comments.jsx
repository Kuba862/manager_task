import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CommentsStyle = styled.div`
  max-width: 600px;
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
    * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    }
  }
  div {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    input {
      width: 95%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
  button {
    width: 99%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/test/post-comment`,
        { testContent: newComment }
      );
      fetchComments();
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/test/get-comment`);
      const resData = res.data.map((item) => item.testContent);
      setComments(resData);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <CommentsStyle>
      <h1>Comment Section</h1>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: comment }} />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter your comment"
        />
        <button id="btn" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
    </CommentsStyle>
  );
};

export default Comments;
