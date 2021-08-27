import styles from './header.module.scss'
import { Icon28LogoVkColor } from '@vkontakte/icons';
import HeaderProfileMenuUI from './HeaderProfileMenuUI';

export default function Header() {
    return (
        <header className={styles.header}>
            <div></div>
            <div ><Icon28LogoVkColor width={32} height={32} /></div>
            <div><strong
                style={{ fontSize: 15, paddingLeft: 5 }}>ВКОНТАКТЕ</strong></div>
            <input placeholder='Поиск' className={styles.input} type="text" />
            <div></div><div></div><div></div>
            <HeaderProfileMenuUI />
        </header >
    )
}

