import React from 'react';

const Info = (props) => (
  <div className="info">
    <div className="floatLeft">
      <div className="text"><b>This home is on people's minds.</b></div>
      <div className="text">This home has been viewed {props.numViews} times</div>
    </div>
    <img src="lightbulb.gif" alt="lightbulb animation" />
  </div>
);

export default Info;
