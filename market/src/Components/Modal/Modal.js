import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDropModal = (props) => {

  return (
    <div id={props.id} className={classes.modal}>
      <div className={classes.modalContent}>
        <span className={classes.close} onClick={props.onClose}>&times;</span>
        {props.children}
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDropModal id={props.id} onClose={props.onClose}>
          {props.children}
        </BackDropModal>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
