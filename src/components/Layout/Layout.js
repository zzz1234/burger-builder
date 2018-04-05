import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
  state = {
    showSideDrawer : false
  }
  sideDrawerRemoveHandler = () => {
    this.setState({showSideDrawer : false});
  }
  sideDrawerShowHandler = () => {
    this.setState({showSideDrawer : true});
  }
  render(){
    return(
      <Aux>
      <Toolbar showdrawer = {this.sideDrawerShowHandler}/>
      <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerRemoveHandler}/>
      <main className = {classes.Content}>
        {this.props.children}
      </main>
      </Aux>
    );
  }
}

export default Layout;
