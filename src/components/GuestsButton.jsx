import React from 'react';
import styled from 'styled-components';

const StyledGuestsButton = styled.button`
  font-size: 100%;
  text-align: left;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 2px;
  padding: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 235, 235);
  border-image: initial;
`;

const StyledNumGuestsLabel = styled.label`
  font-size: 17px;
  margin-left: 8px;
  padding: 0;
`;

const StyledSVG = styled.svg`
  height: 30.4px;
  width: 16px;
  display: block;
  fill: currentcolor;
  margin-right: 8px;
`;

const GuestsButton = (props) => (
  <StyledGuestsButton type="button" onClick={props.toggle}>
    <StyledNumGuestsLabel>1 guest</StyledNumGuestsLabel>
    <StyledSVG viewBox="0 0 18 18" role="presentation" focusable="false" height="16px" width="16px">
      {props.isOpen ? <path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd" /> : <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />}
    </StyledSVG>
  </StyledGuestsButton>
);

export default GuestsButton;

