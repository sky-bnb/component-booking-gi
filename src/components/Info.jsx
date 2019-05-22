import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  width: 326px;
  height: 60px;
  display: flex;
`;

const StyledHomeAndViews = styled.div`
`;

const StyledLightbulb = styled.img`
`;

const StyledHomeMindsText = styled.div`
  overflow-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571em;
  color: rgb(72, 72, 72);
  margin: 0px;
`;

const StyledHomeViewedText = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857142857142858em;
  margin-top: 6px;
  overflow-wrap: break-word;
  color: #484848;
`;

const Info = (props) => (
  <StyledInfo>
    <StyledHomeAndViews>
      <StyledHomeMindsText>This home is on people's minds.</StyledHomeMindsText>
      <StyledHomeViewedText>It's been viewed {props.numViews}+ times in the past week.</StyledHomeViewedText>
    </StyledHomeAndViews>
    <StyledLightbulb src="lightbulb.gif" alt="lightbulb animation" />
  </StyledInfo>
);

export default Info;
