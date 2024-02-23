import { Link } from "react-router-dom";
import { FilmesTypes } from "../../types/filmesTypes";
import { useDispatch } from "react-redux";
import { FilmesContainer } from "./style.js";
import { filmesNextPage } from "../../redux/dataFilmes/action.js";

export const Filme = ({ name, description ,  filme_url , image_url  }:FilmesTypes ) => {

    const dispatch = useDispatch();

    const handleFilmeClick = () => {
        dispatch(filmesNextPage({name , description, filme_url, image_url}))
    };

    return (
        <Link to={`/filme-info/${name}`}>

            <FilmesContainer  onClick={() => handleFilmeClick()} >

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