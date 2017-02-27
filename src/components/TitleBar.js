import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { toggleLeftMenu } from '../actions';

let TitleBar = ({ onLeftMenuClick, titleMenu }) => (
    <AppBar
        onLeftIconButtonTouchTap={onLeftMenuClick}
        {...titleMenu}
    />
);

TitleBar = connect()(TitleBar);

export default TitleBar;