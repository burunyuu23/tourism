import { BrowserRouter as Router} from "react-router-dom";

import RouterProvider from "@/app/RouterProvider";

const AppRouter = () => {

    return (
        <Router basename="/tourism">
            <RouterProvider />
        </Router>
    );
};

export default AppRouter;