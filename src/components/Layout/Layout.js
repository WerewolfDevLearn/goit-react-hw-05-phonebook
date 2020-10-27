import React from 'react';
import PorpTypes from 'prop-types';
import LayoutStyle from './Layout.module.css';
import AppHeader from '../AppHeader/AppHeader';

const Layout = ({ children }) => (
  <div className={LayoutStyle.container}>
    <AppHeader />

    {children}
  </div>
);

Layout.propTypes = {
  children: PorpTypes.node.isRequired,
};
export default Layout;
