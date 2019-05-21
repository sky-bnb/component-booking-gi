import React from 'react';

const CloseButton = () => (
  <button type="button" style={{padding: "20px", margin: "-20px", background: "transparent", borderWidth: "0px", borderStyle: "initial"}}>
    <svg viewBox="0 0 24 24" role="img" focusable="false" style={{height: "16px", width: "16px", display: "block", fill: "rgb(118, 118, 118)"}}>
      <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path>
    </svg>
  </button>
);

export default CloseButton;