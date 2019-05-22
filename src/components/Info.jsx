import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  width: 326px;
  height: 60px;
`;

const StyledHomeAndViews = styled.div`
  float: left;
`;

const StyledLightbulb = styled.img`
  float: right;
`;

const StyledHomeMinds = styled.div`
  font-weight: bold;
`;

const StyledHomeViewedText = styled.div`
`;

const Info = (props) => (
  <StyledInfo>
    <StyledHomeAndViews>
      <StyledHomeMinds>This home is on people's minds.</StyledHomeMinds>
      <StyledHomeViewedText>This home has been viewed {props.numViews} times in the past week.</StyledHomeViewedText>
    </StyledHomeAndViews>
    <StyledLightbulb src="lightbulb.gif" alt="lightbulb animation" />
  </StyledInfo>
);

export default Info;
