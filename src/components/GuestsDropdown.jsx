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
  padding: 4px 0px 0px 0px;
`;

const StyledTextWrapper = styled.div`
`;

const StyledGuestMaxText = styled.div`
  margin: 0px 0px 16px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #484848;
`;

const StyledMinusCounterPlusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

const StyledButton = styled.button`
  border-style: initial;
  border-style: solid;
  border-color: rgb(0, 132, 137);
  border-radius: 100%;
  border-width: 1px;
  color: rgb(0, 132, 137);
  cursor: pointer;
  outline: 0px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  display: block;
  
  :active {
    box-shadow: rgb(0, 132, 137) 0 0 2px 2px;
  };
`;

// border-left-color: rgba(0, 132, 137, 0.3)

const StyledSVG = styled.svg`
  height: 1.5em;
  width: 1.5em;
  fill: currentColor;
  margin: auto;
  display: block;
`;

const StyledCloseButton = styled.button`
  color: #008489;
  font-family: 'Quicksand', sans-serif;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-size: 16px;
  float: right;
  outline: 0px;

  :hover {
    text-decoration: underline;
  }
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

const GuestsDropdown = (props) => {
  const {
    numAdults, numChildren, numInfants, toggle, updateNumAdults, updateNumChildren, updateNumInfants,
  } = props;

  return (
    <StyledGuestsDropdown>
      <StyledGuestsMenuWrapper>
        <StyledAdultRow>
          <StyledMenuText>Adults</StyledMenuText>
          <StyledMinusCounterPlusWrapper>
            <StyledButton onClick={() => updateNumAdults(-1)}>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11" /></StyledSVG>
            </StyledButton>
            <StyledCounterText>{numAdults}</StyledCounterText>
            <StyledButton onClick={() => updateNumAdults(1)}>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false">
                <rect height="2" rx="1" width="12" x="6" y="11" />
                <rect height="12" rx="1" width="2" x="11" y="6" />
              </StyledSVG>
            </StyledButton>
          </StyledMinusCounterPlusWrapper>
        </StyledAdultRow>
        <StyledChildrenRow>
          <StyledTextWrapper>
            <StyledMenuText>Children</StyledMenuText>
            <StyledSubMenuText>Ages 2-12</StyledSubMenuText>
          </StyledTextWrapper>
          <StyledMinusCounterPlusWrapper>
            <StyledButton onClick={() => updateNumChildren(-1)}>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false">
                <rect height="2" rx="1" width="12" x="6" y="11" />
              </StyledSVG>
            </StyledButton>
            <StyledCounterText>{numChildren}</StyledCounterText>
            <StyledButton onClick={() => updateNumChildren(1)}>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false">
                <rect height="2" rx="1" width="12" x="6" y="11" />
                <rect height="12" rx="1" width="2" x="11" y="6" />
              </StyledSVG>
            </StyledButton>
          </StyledMinusCounterPlusWrapper>
        </StyledChildrenRow>
        <StyledInfantRow>
          <StyledTextWrapper>
            <StyledMenuText>Infants</StyledMenuText>
            <StyledSubMenuText>Under 2</StyledSubMenuText>
          </StyledTextWrapper>
          <StyledMinusCounterPlusWrapper>
            <StyledButton onClick={() => updateNumInfants(-1)}>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false">
                <rect height="2" rx="1" width="12" x="6" y="11" />
              </StyledSVG>
            </StyledButton>
            <StyledCounterText>{numInfants}</StyledCounterText>
            <StyledButton onClick={() => updateNumInfants(1)}>
              <StyledSVG viewBox="0 0 24 24" role="img" focusable="false">
                <rect height="2" rx="1" width="12" x="6" y="11" />
                <rect height="12" rx="1" width="2" x="11" y="6" />
              </StyledSVG>
            </StyledButton>
          </StyledMinusCounterPlusWrapper>
        </StyledInfantRow>
        <StyledClosingWrapper>
          <StyledGuestMaxText>
            2 guests maximum. Infants don't count toward the number of guests.
          </StyledGuestMaxText>
          <StyledCloseButton onClick={toggle}>Close</StyledCloseButton>
        </StyledClosingWrapper>
      </StyledGuestsMenuWrapper>
    </StyledGuestsDropdown>
  );
};

export default GuestsDropdown;
