import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeStudeo from "./components/Studeo/components/pages/Home";


const RoutersStudeo = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/studeo" element={<HomeStudeo/>}></Route>
        </Routes>
    </BrowserRouter>
);

export default RoutersStudeo;
