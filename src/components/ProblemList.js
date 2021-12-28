/* eslint-disable react/prop-types */
/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Problem from './Problem';
import './ProblemList.css';

const ProblemList = function (props) {
  const { min, max, problems } = props;
  console.log(props);
  // console.log(problems);
  return (
    <div>
      <div className="problemList">
        {problems.map((problem) => {
          return problem.rating >= min && problem.rating <= max ? (
            <Problem key={problem.contestId + problem.name} problem={problem} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ProblemList;
