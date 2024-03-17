import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Place from "@/pages/Place/Page";

const router = createBrowserRouter([
    {
        path: "/:place",
        element: <Place />,
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