import {useEffect} from 'react';

import {Route, Routes, useLocation} from "react-router-dom";
import Place from "@/pages/Place/Page";
import Home from "@/pages/Home/Home";

const RouterProvider = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Routes>
            <Route path="/:place" element={<Place />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default RouterProvider;
