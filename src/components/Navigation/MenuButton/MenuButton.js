import React from 'react';
import classes from './MenuButton.module.css';

const menuButton = (props) => (
    <svg className={classes.MenuButton} onClick={props.toggle} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke={props.dark ? '#4A5568' : 'white'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export default menuButton;