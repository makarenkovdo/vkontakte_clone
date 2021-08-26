import styles from './Header.module.scss'
import React from 'react'
import { Icon28LogoVkColor } from '@vkontakte/icons';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useMyDispatch } from '../../Redux/Root/Store';
import { signIn_logOut } from '../../../MODULES/Auth/Redux/SignIn/SignIn_Slice';
import HeaderProfileMenuUI from './ProfileMenu';


function Header() {
    const dispatch = useMyDispatch()
    const displayName = localStorage.getItem('displayName')

    function LogOut(): void {
        localStorage.removeItem('displayName')
        console.log('sucess logout');
        dispatch(signIn_logOut())
    }
    return (

        <header className={styles.header}>
            <div></div>
            <div ><Icon28LogoVkColor width={32} height={32} /></div>
            <div><strong
                style={{ fontSize: 15, paddingLeft: 5 }}>ВКОНТАКТЕ</strong></div>
            <input placeholder='Поиск' className={styles.input} type="text" />
            <div></div><div></div><div></div>
            {/* <div> <FormControl variant="filled" className=''>
                <InputLabel htmlFor="filled-age-native-simple">{displayName}</InputLabel>
                <Select
                    native
                    value='Andrew'
                    onChange={LogOut}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>LogOut</option>
                </Select>
                
            </FormControl></div> */}
            <HeaderProfileMenuUI />

        </header >


    )
}

export default Header