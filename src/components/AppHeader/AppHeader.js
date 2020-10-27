import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import AppName from './AppName';
import ContactAlert from './ContactAlert';
import AppHeaderStyle from './AppHeader.module.css';
import appearLeft from '../cssAnimations/appearLeft.module.css';
import appearRight from '../cssAnimations/appearRight.module.css';

class AppHeader extends Component {
  render() {
    return (
      <>
        <div className={AppHeaderStyle.appHeader}>
          <CSSTransition in={true} appear={true} classNames={appearLeft} timeout={500} unmountOnExit>
            <AppName />
          </CSSTransition>
          <CSSTransition in={true} appear={true} classNames={appearRight} timeout={250} unmountOnExit>
            <ContactAlert />
          </CSSTransition>
        </div>
      </>
    );
  }
}

export default AppHeader;
