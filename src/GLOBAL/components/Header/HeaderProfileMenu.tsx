import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useMyDispatch } from '../../rootRedux/store';
import { signInLogOut } from '../../../modules/auth/redux/signIn/signInSlice';

export default function HeaderProfileMenu() {
    const displayName = localStorage.getItem('displayName')
    const dispatch = useMyDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function LogOut(): void {
        localStorage.removeItem('displayName')
        dispatch(signInLogOut())
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {displayName}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={LogOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}