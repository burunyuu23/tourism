import React, {CSSProperties} from 'react';
import {useParams} from "react-router-dom";

import Header from "@/shared/components/Header/Header";
import {getPlaceById} from "@/entities/Place/data/places";

import styles from "./Page.module.css";

const Place = () => {
    const {place: placeId} = useParams();
    const place = getPlaceById(placeId);

    if (!placeId || !place) {
        return (
            <div>
                <h1>Такой страницы не существует!</h1>
            </div>
        );
    }
    const { title, headerText, helperText, articles } = place;

    return (
        <div>
            <Header
                imagePath={`${process.env.ASSET_PREFIX}/public/${placeId}/index.png`}
                headerText={headerText || title}
                helperText={<p>{helperText}</p>}
            />
            <main className={styles.content}>
                {articles.map(({ header, paragraphs }) => (
                    <article>
                        <h1>{header}</h1>
                        {paragraphs.map(({ text, image, style }) => (
                            <>
                                {text && (<p style={style as CSSProperties || {}}>{text}</p>)}
                                {image && (<img src={`${process.env.ASSET_PREFIX}/public/${placeId}${image}`} alt="photo" style={style as CSSProperties || {}} />)}
                            </>
                        ))}
                    </article>
                ))}
            </main>
        </div>
    );
};

export default Place;
