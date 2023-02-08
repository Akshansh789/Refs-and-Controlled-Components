import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
   <React.Fragment>
    {ReactDOM.createPortal(
      <Backdrop onConfirm={props.onConfirm} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal(
      <ModalOverlaytitle></ModalOverlaytitle>
    )}
   </React.Fragment>
  );
};

export default ErrorModal;
