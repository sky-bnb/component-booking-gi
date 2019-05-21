import React from 'react';

const Info = (props) => (
  <div className="info" style={{ width: "326px", height: "60px"}}>
    <div className="floatLeft" style={{ float: "left" }}>
      <div className="text"><b>This home is on people's minds.</b></div>
      <div className="text">This home has been viewed {props.numViews} times in the past week.</div>
    </div>
    <img src="lightbulb.gif" alt="lightbulb animation" style={{ float: "right" }} />
  </div>
);

export default Info;
