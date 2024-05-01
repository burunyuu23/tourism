import {RouterProvider} from "react-router-dom";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

import router from "./Router";
import './App.css';
import AppRouter from "./Router";

const App = () => {
    return (
        <main>
            <AnimatedCursor
                innerSize={8}
                outerSize={100}
                innerScale={1}
                outerScale={2}
                innerStyle={{
                    backgroundColor: 'white',
                    mixBlendMode: 'difference'
                }}
                outerStyle={{
                    backgroundColor: '#ffffff11',
                    mixBlendMode: 'difference'
                }}
            />
            <AppRouter />
        </main>
    );
};

export default App;
