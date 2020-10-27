import React from 'react';
import NameStyle from './AppName.module.css';

function AppName() {
  return (
    <>
      <div className={NameStyle.nameContainer}>
        <h2 className={NameStyle.heading}>PhoneBook</h2>
      </div>
    </>
  );
}
export default AppName;
