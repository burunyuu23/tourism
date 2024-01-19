import React, {useState} from 'react';
import {createPortal} from "react-dom";

import MenuIcon from "@/shared/components/icons/MenuIcon/MenuIcon";
import HeaderPaths from "@/widgets/HeaderPaths/HeaderPaths";

import styles from './MenuPaths.module.css';

type MenuPathsProps = {};

const MenuPaths = ({}: MenuPathsProps) => {
    const [menu, setMenu] = useState(false);

    const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setMenu((prevState) => !prevState)
    };
    return (
        <div>
            <div onClick={handleMenuClick}>
                <MenuIcon/>
            </div>
            {menu &&
                createPortal(
                    <div className={styles.modal}>
                        <div className={styles.modalInner}>
                            <div onClick={handleMenuClick}>
                                Закрыть
                            </div>
                            <HeaderPaths/>
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    );
};

export default MenuPaths;
