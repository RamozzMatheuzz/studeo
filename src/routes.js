import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainIini from "./components/MainInit";
import Studeo from './components/Studeo';
import MyCourse from "./components/Studeo/components/pages/MyCourse";
import Diciplina from "./components/Studeo/components/pages/Dicliplina";


const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<MainIini/>}></Route>
            <Route path="/studeo" element={<Studeo/>}></Route>
            <Route path="/myCourse" element={<MyCourse/>}></Route>
            <Route path="/diciplina" element={<Diciplina/>}></Route>
        </Routes>
    </BrowserRouter>
);

export default Routers;