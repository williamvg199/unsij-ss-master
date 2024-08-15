import LayoutIndex from "./components/layouts/LayoutIndex.jsx";
import Home from "./components/pages/Home.jsx";
import Error404 from "./components/Error404.jsx";
import {Route, Routes} from "react-router-dom";
import CurricularMap from "./components/pages/CurricularMap.jsx";
import React from "react";
import PostgraduateMap from "./components/pages/PostgraduateMap.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LayoutIndex/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path="curricular/:idCarrer" element={<CurricularMap/>}/>
            <Route path="postgraduate/:idPostgraduate" element={<PostgraduateMap/>}/>
            {/* Route error */}
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}

export default App
