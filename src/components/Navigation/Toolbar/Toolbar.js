import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
const toolbar = (props) => {
  return(
    <header className= {classes.Toolbar}>
      <Button type = "Success" clicked = {props.showdrawer}><Logo height = "20px" /></Button>
      <Logo height = "80%"/>
      <nav  className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}


export default toolbar;
