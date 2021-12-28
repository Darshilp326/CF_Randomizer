/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background-color: #fad02d;
  width: 150px;
  height: 40px;
  border: 5px;
  border-radius: 4px;
  font-size: 20px;
  color: white;
  &:hover {
    background-color: #519BDB;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Randomize = function (props) {
  return <Container onClick={props.onChange}>Randomize</Container>;
};

export default Randomize;
