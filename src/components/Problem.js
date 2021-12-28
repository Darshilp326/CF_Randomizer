/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import './Problem.css';

const Cell = styled.div`
  flex: ${(props) => props.flex};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const navigateToCF = (link) => {
  console.log(link);
  window.open(link);
};
const Problem = function (data) {
  const { problem } = data;
  const { name, rating, contestId, index } = problem;
  const link = `https://codeforces.com/problemset/problem/${contestId}/${index}`;
  // console.log(name);
  return (
    <div className="problem" onClick={() => navigateToCF(link)}>
      <Cell flex={1}>{`${contestId}${index}`}</Cell>
      <Cell flex={2}>{name}</Cell>
      <Cell flex={1}>{rating}</Cell>
    </div>
  );
};

export default Problem;
