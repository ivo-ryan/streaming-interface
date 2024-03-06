import { Link } from "react-router-dom";
import { FilmesTypes } from "../../types/filmesTypes";
import { FilmesContainer } from "./style.js";

export const Filme = ({ name , image_url , id }:FilmesTypes ) => {


    return (
        <Link to={`/filme-info/${id}`}>

            <FilmesContainer  >

                <div className="img-block">

                <img src={image_url} alt={name} />
                
                </div>
                <div className="text-block">
                <h3>{name}</h3>

                </div>
            </FilmesContainer>

        </Link>
    )
}