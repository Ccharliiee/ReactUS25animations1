import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const modal = (props) => {
  return (
    <CSSTransition
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
      classNames="Modal"
    >
      {(state) => {
        return (
          <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </CSSTransition>
  );
};

export default modal;
