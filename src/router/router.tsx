import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Form } from "../pages/form/form"
import { Home } from "../pages/home/home"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    )
}