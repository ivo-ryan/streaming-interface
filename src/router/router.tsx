import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Information } from "../pages/information";
import { FilmeInfo } from "../pages/filmeInfo/filmeInfo";
import { PlayAnime } from "../pages/playAnime/playAnime";
import { PlayFilme } from "../pages/playFilme/playFilme";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>

                <Route path="/info/:id" element={<Information/>}/>

                <Route path="/filme-info/:id" element={<FilmeInfo/>}/>

                <Route path="/video/:id/:index" element={<PlayAnime/>}/>

                <Route path="/filme/:id" element={<PlayFilme/>}/>

            </Routes>
        </BrowserRouter>
    )
}