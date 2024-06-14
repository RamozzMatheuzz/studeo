import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainIini from "./components/MainInit";
import Studeo from './components/Studeo';


const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<MainIini/>}></Route>
            <Route path="/studeo" element={<Studeo/>}></Route>
        </Routes>
    </BrowserRouter>
);

export default Routers;