import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Form } from "../pages/form/form"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    )
}