import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const modal = (props) => {
  const transitionStyles = {
    entering: "ModalOpen",
    entered: null,
    exiting: "ModalClosed",
    exited: null,
  };

  return (
    <Transition in={props.show} timeout={500} mountOnEnter unmountOnExit>
      {(state) => {
        const cssClasses = ["Modal", transitionStyles[state]];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
