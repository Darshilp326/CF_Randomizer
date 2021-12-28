/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  background: ${(props) => (props.ind > -1 ? '#519BDB' : '#33AC71')};
  borderRadius: : background-color: '#33AC71';
  border-radius: 2px;
  color: white;
  font-weight: 700;
  min-width: 70px;
  min-height: 30px;
  margin: 5px;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;2px;
`;

const Tag = function (props) {
  //   console.log(props);
  const { name } = props;
  const { stateTags } = props;
  const ind = stateTags.indexOf(name);
  return (
    <Button ind={ind}>
      <div style={{ margin: '5px' }} onClick={() => props.onClick(name)}>
        {name}
      </div>
    </Button>
  );
};

export default Tag;
