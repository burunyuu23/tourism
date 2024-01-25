import React from 'react';

import HeaderPaths from "@/widgets/HeaderPaths/HeaderPaths";
import Collapsed from "@/shared/components/Collapsed/Collapsed";
import PlaceMiniCard from "@/entities/Place/ui/PlaceMiniCard";
import Header from "@/shared/components/Header/Header";

import styles from './Home.module.css';

const items = [
    {
        title: "Дом-усадьба Асеевых",
        address: "Тамбовская область, город Рассказово, ул. Совхозная, 1",
        image_url: `${process.env.ASSET_PREFIX}/public/dom-avseevih/index.png`,
        link: "/dom-avseevih",
    },
    {
        title: "Собор Непорочного зачатия Пресвятой Девы Марии",
        address: "Москва, Малая Грузинская улица, 27/13с1, метро Улица 1905 года",
        image_url: `${process.env.ASSET_PREFIX}/public/sobor-neporochnogo-zachatiya-presvyatoi-devi-marii/index.png`,
        link: "/sobor-neporochnogo-zachatiya-presvyatoi-devi-marii",
    },
]

const Home = () => {
    return (
        <>
            <Header
                imagePath={`${process.env.ASSET_PREFIX}/public/main_background.jpg`}
                menu={<Collapsed
                    edge={1024}
                    collapsedSlot={<br/>}
                    notCollapsedSlot={
                        <ul className={styles.paths}>
                            <HeaderPaths/>
                        </ul>
                    }
                />}
                headerText={"Развитие туризма в России"}
                helperText={<>
                    <p>Туризм – это сфера деятельности, связанная с путешествиями и отдыхом людей. Он включает в себя посещение различных мест,
                        как
                        внутри страны, так и за ее пределами, с целью отдыха, развлечения, познания культуры и истории, а также для занятия
                        спортом и
                        активного отдыха.</p>
                    <p>Туризм является одной из самых быстрорастущих отраслей экономики и имеет большое значение для развития страны. Он
                        способствует
                        созданию рабочих мест, привлечению инвестиций, развитию инфраструктуры и улучшению качества жизни населения.</p>
                    <p>Туристы могут быть как отдельными путешественниками, так и организованными группами. Они могут выбирать различные виды
                        туризма,
                        такие как экскурсионный, пляжный, горнолыжный, культурный, спортивный и другие, в зависимости от своих предпочтений и
                        интересов.</p>
                </>}
            />
            <div className={styles.content}>
                <section>
                    <h1>С чего всё начиналось?</h1>
                    <p>История туризма в России восходит к 19 веку, когда страна начала открываться для остального мира. Первыми туристами в
                        Россию
                        обычно были аристократы, интеллектуалы и искатели приключений, которые были очарованы экзотической культурой страны и
                        обширными
                        пейзажами. В начале 20 века Россия стала популярным направлением для европейских путешественников, которые искали
                        уникальный и
                        аутентичный опыт.</p>

                    <p>Однако развитие туризма в России было остановлено большевистской революцией 1917 года и последующей советской эпохой. В
                        течение
                        этого времени страна была закрыта от остального мира, а туризм строго контролировался правительством. Лишь
                        ограниченному числу
                        иностранцев было разрешено посещать страну, и власти пристально следили за ними.</p>

                    <p>Только после распада Советского Союза в 1991 году туризм в России начал восстанавливаться. Страна снова открылась миру,
                        и в нее
                        начали стекаться туристы. Однако инфраструктура для туризма все еще была недостаточно развита, и страна столкнулась с
                        множеством
                        проблем туристического направления.</p>

                    <p>Правительство осознало потенциал туризма как источника дохода и начало инвестировать в развитие инфраструктуры и
                        достопримечательностей. Это привело к появлению новых туристических направлений и расширению существующих.
                        Правительство также
                        ввело безвизовый въезд для посетителей из некоторых стран, что облегчило туристам посещение России.</p>
                </section>
                <hr/>

                <section id="Центр">
                    <h1>Центральный Федеральный округ (ЦФО)</h1>
                    <div className={styles.miniCards}>
                        {items.map((item, index) => (
                            <div key={index} className={styles.usually}>
                                <PlaceMiniCard
                                    {...item}
                                    right={!!(index % 2)}
                                />
                            </div>
                        ))}
                        <hr/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
