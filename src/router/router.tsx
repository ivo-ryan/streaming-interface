import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "../pages/form/form";
//import { Home } from "../pages/home/home";
import { Dashboard } from "../pages/dashboard";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/cadastro" element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    )
}