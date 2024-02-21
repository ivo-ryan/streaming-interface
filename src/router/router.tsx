import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "../pages/form/form";
//import { Home } from "../pages/home/home";
import { Dashboard } from "../pages/dashboard";
import { Information } from "../pages/information";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/cadastro" element={<Form/>}/>

                <Route path="/info" element={<Information/>}/>
            </Routes>
        </BrowserRouter>
    )
}