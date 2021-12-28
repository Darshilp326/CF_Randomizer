/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import tags from '../../helpers/getTags';
import Tag from './Tag';

const Container = styled.div`
  margin: auto;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
`;

const Tags = function (props) {
  // console.log(props.onSelectTag);
  const { stateTags } = props;
  console.log(stateTags);
  return (
    <Container>
      {tags.map((tag) => {
        return (
          <Tag
            name={tag}
            key={tag}
            stateTags={stateTags}
            onClick={props.onChange}
          />
        );
      })}
    </Container>
  );
};

export default Tags;
