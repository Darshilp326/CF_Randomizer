/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import styled from 'styled-components';

const Track = styled.div`
  background: ${(props) =>
    getTrackBackground({
      values: props.values,
      colors: ['#ccc', '#198FCE', '#ccc'],
      min: props.min,
      max: props.max,
    })};
  width: 100%;
  height: 2px;
  margin-bottom: 10px;
`;

const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.index === 0 ? '#F8CC52' : '#BA1D25')};
  height: 16px;
  width: 16px;
  border-radius: 16px;
`;

const Indicator = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 6px;
  background-color: ${(props) => (props.isDragged ? '#198FCE' : 'white')};
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  margin: 20px;
`;

const Slider = function (prop) {
  console.log(prop);
  const { min, max } = prop;

  const values = [min, max];
  return (
    <Container>
      <Range
        values={values}
        min={800}
        max={3500}
        step={100}
        onChange={(data) => prop.onChange(data)}
        renderTrack={({ props, children }) => (
          <Track min={800} max={3500} values={values} {...props}>
            {children}
          </Track>
        )}
        renderThumb={({ props, isDragged, index }) => {
          return (
            <Thumb {...props} index={index}>
              <Indicator isDragged={isDragged} />
            </Thumb>
          );
        }}
      />
      <div>
        Rating between {min}-{max}
      </div>
    </Container>
  );
};

export default Slider;
