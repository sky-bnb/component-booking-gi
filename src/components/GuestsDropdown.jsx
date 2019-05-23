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

const StyledAdultWrapper = styled.div`
`;

const StyledChildWrapper = styled.div`
`;

const StyledInfantWrapper = styled.div`
`;

const StyledClosingWrapper = styled.div`
`;

const StyledAdultsText = styled.div`
`;

const StyledChildsText = styled.div`
`;

const StyledInfantsText = styled.div`
`;

const StyledGuestMaxText = styled.div`
`;

const StyledCloseButton = styled.button`
`;

const StyledPlusButton = styled.button`
`;

const StyledMinusButton = styled.button`
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
      <StyledAdultWrapper>

      </StyledAdultWrapper>
      <StyledChildWrapper>

      </StyledChildWrapper>
      <StyledInfantWrapper>

      </StyledInfantWrapper>
      <StyledClosingWrapper>

      </StyledClosingWrapper>
    </StyledGuestsMenuWrapper>
  </StyledGuestsDropdown>
);

export default GuestsDropdown;
