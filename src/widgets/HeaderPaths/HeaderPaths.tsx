import {getDistricts} from "@/entities/Place/data/places";
import {memo, useCallback} from "react";

const items = [
    "Центр",
    "Юг",
    "Северо-запад",
    "Привольжье",
    "Сибирь",
    "Урал",
    "Дальний Восток",
    "Северо-Кавказ",
];

const HeaderPaths = memo(() => {
    const district = getDistricts();
    const scrollToById = useCallback((id: string | number) => {
        const element = document.getElementById(`${id}`);
        const headerHeight = document.getElementById('Header')?.offsetHeight ?? 0;

        if (element) {
            window.scrollTo({
                top: element.offsetTop - headerHeight,
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <>
            {district.map(({ id }) => (
                <li onClick={() => scrollToById(id)} className="link_hover">
                    { id }
                </li>
            ))}
        </>
    );
});

export default HeaderPaths;
