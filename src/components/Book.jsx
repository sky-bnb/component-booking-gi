import React from 'react';
import styled from 'styled-components';

const StyledBook = styled.div`
`;

const StyledBookButton = styled.button`
`;

const StyledChargeText = styled.div`
`;

const Book = (props) => (
  <StyledBook>
    <StyledBookButton>Book</StyledBookButton>
    <StyledChargeText>You won't be charged yet</StyledChargeText>
  </StyledBook>
);

export default Book;
