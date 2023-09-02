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
    <Transition
      in={props.show}
      timeout={{ enter: 500, exit: 400 }}
      mountOnEnter
      unmountOnExit
      onEnter={() => console.log("onEnter")}
      onEntering={() => console.log("onEntering")}
      onEntered={() => console.log("onEntered")}
      onExit={() => console.log("onExit")}
      onExiting={() => console.log("onExiting")}
      onExited={() => console.log("onExited")}
    >
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
