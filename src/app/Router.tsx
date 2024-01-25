import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home/Home";
import {default as DomAvseevih} from "@/pages/DomAvseevih/Page";
import {default as SoborNeporochnogoZachatiyaPresvyatoyDeviMarii} from "@/pages/SoborNeporochnogoZachatiyaPresvyatoyDeviMarii/Page";

const router = createBrowserRouter([
        {
            path: "/dom-avseevih",
            element: <DomAvseevih/>,
        },
        {
            path: "/sobor-neporochnogo-zachatiya-presvyatoi-devi-marii",
            element: <SoborNeporochnogoZachatiyaPresvyatoyDeviMarii/>,
        },
        {
            path: "/",
            element: <Home/>,
        },
    ], {
        basename: "/tourism"
    }
);

export default router;