import React from 'react';
import AlertStyle from './ContactAlertStyle.module.css';

function ContactAlert() {
  return (
    <>
      <div className={AlertStyle.alertContainer}>
        <p className={AlertStyle.alertText}>Contact already existe!</p>
      </div>
    </>
  );
}

export default ContactAlert;
