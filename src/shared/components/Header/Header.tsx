import React, {ReactNode} from 'react';
import {Link} from "react-router-dom";

import IconPaths from "@/widgets/IconPaths/IconPaths";

import styles from './Header.module.css';

type HeaderProps = {
    menu?: ReactNode;
    helperText?: ReactNode;
    headerText: string;
    imagePath: string;
};

const Header = ({ menu, headerText, helperText, imagePath }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <img src={imagePath} alt="Фон" className={styles.background}/>
            <nav className={styles.nav}>
                <Link to="/">На Главную</Link>
                <div style={{ display: "flex", flex: 1 }}>
                    {menu}
                </div>

                <ul className={styles.socials}>
                    <IconPaths/>
                </ul>
            </nav>
            <div className={styles.mainBannerText}>
                <h1 className={styles.headerText}>{headerText}</h1>
                <div className={styles.helperText}>
                    {helperText}
                </div>
            </div>
        </header>
    );
};

export default Header;
