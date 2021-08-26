import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useMyDispatch } from '../../Redux/Root/Store';
import { signIn_logOut } from '../../../MODULES/Auth/Redux/SignIn/SignIn_Slice';

export default function HeaderProfileMenuUI() {
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
        console.log('sucess logout');
        dispatch(signIn_logOut())
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