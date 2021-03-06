import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open)
  {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return(
  <Aux>
  <Backdrop show={props.open} click = {props.closed}/>
  <div className = {attachedClasses.join(' ')}>
  <Logo height = "11%" className={classes.Logo}/>
  <nav>
    <NavigationItems />
  </nav>
  </div>
  </Aux>
);
}


export default sideDrawer;
