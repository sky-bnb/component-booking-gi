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

const Info = (props) => (
  <StyledInfo>
    <StyledHomeAndViews>
      <div className="text"><b>This home is on people's minds.</b></div>
      <div className="text">This home has been viewed {props.numViews} times in the past week.</div>
    </StyledHomeAndViews>
    <StyledLightbulb src="lightbulb.gif" alt="lightbulb animation" />
  </StyledInfo>
);

export default Info;
