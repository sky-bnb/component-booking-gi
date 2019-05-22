import React from 'react';
import styled from 'styled-components';

const StyledBook = styled.div`
`;

const StyledBookButton = styled.button`
  display: inline-block;
  position: relative;
  text-align: center;
  transition-property: background, border-color, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  cursor: pointer;
  width: 100%;
  min-width: 71.1935px;
  margin: 0px;
  text-decoration: none;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  background: rgb(255, 90, 95);
  border-color: transparent;
  -webkit-appearance: button;
  align-items: flex-start;
  box-sizing: border-box;
  border-image: initial;
  text-rendering: auto;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  font: 400 11px system-ui;
  -webkit-writing-mode: horizontal-tb;
  margin: 0;
  -webkit-font-smoothing: antialiased;
`;

const StyledButtonText = styled.div`
  overflow-wrap: break-word;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.375em;
  color: rgb(255, 255, 255);
  margin: 0px;
`;

const StyledChargeText = styled.div`
  margin-top: 8px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  text-align: center;
  -webkit-font-smoothing: antialiased;
`;

const Book = (props) => (
  <StyledBook>
    <StyledBookButton><StyledButtonText>Book</StyledButtonText></StyledBookButton>
    <StyledChargeText>You won't be charged yet</StyledChargeText>
  </StyledBook>
);

export default Book;
