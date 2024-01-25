import {useState} from "react";

const items = [
    "Центр",
    "Юг",
    "Северо-запад",
    "Привольжье",
    "Сибирь",
    "Урал",
    "Дальний Восток",
    "Северо-Кавказ",
]

const HeaderPaths = () => {
    const [active, setActive] = useState<number>(-1)
    const scrollToById = (id: string | number) => {
        const element = document.getElementById(`${id}`);
        const headerHeight = document.getElementById('Header')?.offsetHeight ?? 0;

        if (element) {
            window.scrollTo({
                top: element.offsetTop - headerHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            {items.map((item, index) => (
                <li onClick={() => scrollToById(item)} className="link_hover">
                    { item }
                </li>
            ))}
        </>
    );
};

export default HeaderPaths;
