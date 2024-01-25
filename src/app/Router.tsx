import { createHashRouter } from "react-router-dom";

import Home from "@/pages/Home/Home";
import {default as DomAseevih} from "@/pages/DomAseevih/Page";
import {default as SoborNeporochnogoZachatiyaPresvyatoyDeviMarii} from "@/pages/SoborNeporochnogoZachatiyaPresvyatoyDeviMarii/Page";

const router = createHashRouter([
        {
            path: "/dom-aseevih",
            element: <DomAseevih/>,
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
        basename: "tourism/"
    }
);

export default router;