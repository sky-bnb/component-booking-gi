import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.span`

`;

const StyledAvgRating = styled.span`
  width: 120px;
  background-repeat: space no-repeat;
  display: block;
  background-size: 23px 18px;
  height: 18px;
`;

  // background-image: url(data:image/svg+xml,<svg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>);

const StyledNumReviews = styled.div`
  display: inline;
`;

const Reviews = () => (
  <div className="reviews">
    <StyledAvgRating></StyledAvgRating>
    <StyledNumReviews>531</StyledNumReviews>
  </div>
);

export default Reviews;
