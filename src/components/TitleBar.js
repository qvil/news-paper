import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { toggleLeftMenu } from '../actions';

let TitleBar = ({ styles, props, onLeftMenuClick }) => (
    <AppBar
        style={styles}
        onLeftIconButtonTouchTap={onLeftMenuClick}
        {...props}
    />
);

TitleBar = connect()(TitleBar);

export default TitleBar;