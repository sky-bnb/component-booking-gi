import React from 'react';
import styled from 'styled-components';

const StyledGuestsDropdown = styled.div`
  margin: 0px 0px 16px;
  padding: 0px 16px 0px 16px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px;
  height: 300px;
  width: 296px;
  position: absolute;
  z-index: 2;
`;

const StyledGuestsMenuWrapper = styled.div`
  margin: 16px 0px 16px;
`;

const StyledAdultRow = styled.div`
  margin: 16px 0px 16px 0px;
  display: flex;
  align-items: center;
`;

const StyledChildrenRow = styled.div`
  margin: 24px 0px 24px 0px;
  display: flex;
  align-items: center;
`;

const StyledInfantRow = styled.div`
  margin: 24px 0px 24px 0px;
  display: flex;
  align-items: center;
`;

const StyledClosingWrapper = styled.div`
  margin: 16px 0px 16px 0px;
`;

const StyledMenuText = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  width: 176px;
`;

const StyledSubMenuText = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledGuestMaxText = styled.div`
  margin: 0px 0px 16px;
`;

const StyledMinusCounterPlusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

const StyledButton = styled.button`
  background: transparent;
  border-color: rgb(0, 132, 137);
  border-radius: 50%;
  border-width: 1px;
  padding: 1px 7px 2px 7px;
  cursor: pointer;
  height: 32px;
  width: 32px;
`;

const StyledSVG = styled.svg`
  height: 1.5em;
  width: 1.5em;
  fill: rgb(0, 132, 137);
`

const StyledCloseButton = styled.button`
`;

const StyledCounterText = styled.div`
  color: rgb(72, 72, 72);
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin: 0px;
  text-align: center;
  text-size-adjust: 100%;
`;

const GuestsDropdown = (props) => (
  <StyledGuestsDropdown>
    <StyledGuestsMenuWrapper>
      <StyledAdultRow>
        <StyledMenuText>Adults</StyledMenuText>
        <StyledMinusCounterPlusWrapper>
          <StyledButton>
            <StyledSVG viewBox="0 0 24 24" role="img" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11"></rect></StyledSVG>
          </StyledButton>
          <StyledCounterText>{props.numAdults}1</StyledCounterText>
          <StyledButton>
             <StyledSVG viewBox="0 0 24 24" role="img" focusable="false" ><rect height="2" rx="1" width="12" x="6" y="11" />
            <rect height="12" rx="1" width="2" x="11" y="6" /></StyledSVG>
          </StyledButton>
        </StyledMinusCounterPlusWrapper>
      </StyledAdultRow>
      <StyledChildrenRow>
        <StyledTextWrapper>
          <StyledMenuText>Children</StyledMenuText>
          <StyledSubMenuText>Ages 2-12</StyledSubMenuText>
        </StyledTextWrapper>
        <StyledMinusCounterPlusWrapper>
          <StyledButton>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11"></rect></StyledSVG>
            </StyledButton>
            <StyledCounterText>{props.numChildren}0</StyledCounterText>
            <StyledButton>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false" ><rect height="2" rx="1" width="12" x="6" y="11" />
              <rect height="12" rx="1" width="2" x="11" y="6" /></StyledSVG>
          </StyledButton>
        </StyledMinusCounterPlusWrapper>
      </StyledChildrenRow>
      <StyledInfantRow>
        <StyledTextWrapper>
          <StyledMenuText>Infants</StyledMenuText>
          <StyledSubMenuText>Under 2</StyledSubMenuText>
        </StyledTextWrapper>
        <StyledMinusCounterPlusWrapper>
          <StyledButton>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11"></rect></StyledSVG>
            </StyledButton>
            <StyledCounterText>{props.numInfants}0</StyledCounterText>
            <StyledButton>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false" ><rect height="2" rx="1" width="12" x="6" y="11" />
              <rect height="12" rx="1" width="2" x="11" y="6" /></StyledSVG>
          </StyledButton>
        </StyledMinusCounterPlusWrapper>
      </StyledInfantRow>
      <StyledClosingWrapper>
        <StyledGuestMaxText>2 guests maximum. Infants don't count toward the number of guests.</StyledGuestMaxText>
        <StyledCloseButton>Close</StyledCloseButton>
      </StyledClosingWrapper>
    </StyledGuestsMenuWrapper>
  </StyledGuestsDropdown>
);

export default GuestsDropdown;
