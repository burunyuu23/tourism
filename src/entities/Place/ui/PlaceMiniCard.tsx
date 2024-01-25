import React from 'react';

import {Place} from "@/entities/Place/model/type";

import styles from './PlaceMiniCard.module.css';

const PlaceMiniCard = ({ title, address, image_url, right = false, link }: Place & { right?: boolean; link: string }) => {

    const image = (
        <div className={styles.image_wrapper}>
            <a href={link} className={styles.image_link}/>
            <img src={image_url} alt={title} className={styles.image}/>
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
