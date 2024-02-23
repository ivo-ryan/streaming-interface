import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "../pages/form/form";
//import { Home } from "../pages/home/home";
import { Dashboard } from "../pages/dashboard";
import { Information } from "../pages/information";
import { FilmeInfo } from "../pages/filmeInfo/filmeInfo";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/cadastro" element={<Form/>}/>

                <Route path="/info/:name" element={<Information/>}/>

                <Route path="/filme-info/:name" element={<FilmeInfo/>}/>
            </Routes>
        </BrowserRouter>
    )
}