import React from "react";

import "./Modal.css";

const modal = (props) => {
  const transitionStyles = {
    entering: "ModalOpen",
    entered: null,
    exiting: "ModalClosed",
    exited: null,
  };

  const cssClasses = ["Modal", transitionStyles[props.show]];

  return (
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
