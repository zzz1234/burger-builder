import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return(
      <Aux>
      <Backdrop show = {props.status} click = {props.click}/>
      <div>
      <div className={classes.Modal} style={{transform: props.status ? 'translateY(0)' : 'translateY(-100vh)',
        opacity : props.status ? '1' : '0' }} >{props.children}</div>
      </div>
      </Aux>
    );
}

export default modal;
