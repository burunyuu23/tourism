import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Home from "@/pages/Home/Home";
import Place from "@/pages/Place/Page";
import React from "react";

const AppRouter = () => {
    return (
        <Router basename="/tourism">
            <Routes>
                <Route path="/:place" element={<Place />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;