import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const LeftMenu = ({ open, onLeftMenuClick }) => {
    return (
        <Popover
            open={open}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={onLeftMenuClick}
        >
            <Menu>
                <MenuItem primaryText="A" />
                <MenuItem primaryText="B" />
                <MenuItem primaryText="C" />
                <MenuItem primaryText="D" />
            </Menu>
        </Popover>
    );
};

export default LeftMenu;
