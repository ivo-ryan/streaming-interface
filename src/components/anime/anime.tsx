import { Link } from "react-router-dom";
import { AnimesTypes } from "../../types/animesTypes";
import { useDispatch } from "react-redux";
import { animeNextPage } from '../../redux/dataAnimes/actions.js';
import { AnimesContainer } from "./style.js";

export const Anime = ({ name, description ,  episodios, image_url  }:AnimesTypes ) => {
    

    const dispatch = useDispatch();

    const handleAnimeClick = () => {
        dispatch(animeNextPage({name , description, episodios, image_url}))
    };

    return (
        <Link to={"/info"}>

            <AnimesContainer onClick={() => handleAnimeClick()} >

                <div className="img-block">

                <img src={image_url} alt={name} />

                </div>
                <div className="text-block">
                <h3>{name}</h3>

                </div>
            </AnimesContainer>

        </Link>
    )
}