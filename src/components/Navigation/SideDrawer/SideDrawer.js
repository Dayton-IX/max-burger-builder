import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary';
import MenuButton from '../MenuButton/MenuButton';

const sideDrawer = (props) => {
    let attatchedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attatchedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attatchedClasses.join(' ')}>
                <div className={classes.MenuButton}>
                    <MenuButton toggle={props.closed} dark/> 
                </div>
                <Logo height="11%" marginBottom="32px"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;