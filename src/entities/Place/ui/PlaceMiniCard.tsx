import React from 'react';
import {Link} from "react-router-dom";

import {Place} from "@/entities/Place/model/type";

import styles from './PlaceMiniCard.module.css';

const PlaceMiniCard = ({ title, address, right = false, link }: Place & { right?: boolean; link: string }) => {

    const image = (
        <div className={styles.image_wrapper}>
            <Link to={link} className={styles.image_link}/>
            <img src={`${process.env.ASSET_PREFIX}/public/${link}/index.png`} alt={title} className={styles.image}/>
        </div>
    );

    return (
        <article className={styles.main} data-right={right}>
            {!right && image}
            <div className={styles.text} data-right={right}>
                <h2 className={styles.title}>{title}</h2>
                <address className={styles.address}>{address}</address>
            </div>
            {right && image}
        </article>
    );
};

export default PlaceMiniCard;
