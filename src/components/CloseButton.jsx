import React from 'react';
import styled from 'styled-components';

const StyledCloseButton = styled.button`
  padding: 20px;
  margin: -20px;
  background: transparent;
  outline: transparent;
  border-width: 1px;
  border-style: initial;
  border-radius: 50%;
  
  :active {
    box-shadow: 0 0 5px #484848;
  };
`;

const StyledSVG = styled.svg`
  display: block;
  fill: rgb(118, 118, 118);
`;

const CloseButton = () => (
  <StyledCloseButton>
    <StyledSVG viewBox="0 0 24 24" role="img" focusable="false" height="16px" width="16px">
      <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path>
    </StyledSVG>
  </StyledCloseButton>
);

export default CloseButton;
