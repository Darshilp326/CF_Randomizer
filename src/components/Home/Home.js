/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProblemList from '../ProblemList';
import Slider from '../Slider';
import Tags from '../Tags/Tags';
import Randomize from '../Randomize';
import * as assets from '../../assets/index.ts';
import getProblem from '../../helpers/getProblem';
import {
  clearProblemsList,
  setProblemsListToStorage,
} from '../../helpers/getLocal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Clear = styled.button`
  border: 5px;
  background-color: red;
  color: white;
  width: 150px;
  height: 34px;
  font-size: 20px;
  border-radius: 5px;
  margin: 20px;
  padding: 5px;
  &:hover {
    background-color: white;
    border-color: red;
    color: red;
  }
  &:hover {
    cursor: pointer;
  }
`;
const Home = function ({ problemList }) {
  const [minm, setMinm] = useState(800);
  const [maxm, setMaxm] = useState(3500);
  const [tags, setTags] = useState([]);
  const [problems, setProblems] = useState(problemList);

  const onRandomize = async () => {
    try {
      const problem = await getProblem(tags, minm, maxm);
      console.log(problem);
      const problemsList = problems.concat(problem);
      setProblemsListToStorage(problemsList);
      setProblems(problemsList);
    } catch (e) {
      alert(e.message);
    }
  };
  const clearProblemList = () => {
    setProblems([]);
    clearProblemsList();
  };
  const onSliderChange = (values) => {
    setMinm(values[0]);
    setMaxm(values[1]);
  };
  const onSelectTag = (e, props) => {
    const val = e;
    console.log('Clicked');
    const newTags = [...tags];
    const index = newTags.indexOf(val);
    if (index > -1) {
      newTags.splice(index, 1);
    } else {
      if (tags.length === 5) {
        alert('Max 5 tags are allowed');
        return;
      }
      newTags.push(val);
    }
    // console.log(newTags);
    setTags(newTags);
  };
  // console.log(tags);
  return (
    <Container>
      <div style={{ margin: '20px' }}>
        <img
          height={40}
          width={300}
          src={assets.images.codeforcesLogo}
          alt="logo"
        />
        <h1>Randomizer</h1>
      </div>
      <Tags onChange={onSelectTag} stateTags={tags} />
      <Slider min={minm} max={maxm} onChange={onSliderChange} />
      <Randomize min={minm} max={maxm} onChange={onRandomize} tags={tags} />
      <ProblemList min={minm} max={maxm} problems={problems} />
      <Clear onClick={clearProblemList}>Clear</Clear>
    </Container>
  );
};

export default Home;
