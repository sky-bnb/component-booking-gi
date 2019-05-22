import React from 'react';
import styled from 'styled-components';

const StyledAvgRating = styled.div`
  display: inline;
`;

const StyledNumReviews = styled.div`
  display: inline;
`;

const Reviews = () => (
  <div className="reviews">
    <StyledAvgRating>STARS *****</StyledAvgRating>
    <StyledNumReviews>531</StyledNumReviews>
  </div>
);

export default Reviews;
