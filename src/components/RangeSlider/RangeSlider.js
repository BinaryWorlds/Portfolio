import React from 'react';
import { StyledWrapper, StyledInput, StyledOutput } from './RangeSlider.style';

function RangeInput({ min, max, value, setValue, name }) {
  return (
    <StyledWrapper>
      <StyledOutput>
        {name} {value}
      </StyledOutput>
      <StyledInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </StyledWrapper>
  );
}

export default RangeInput;
