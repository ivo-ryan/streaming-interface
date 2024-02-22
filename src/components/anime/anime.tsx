import { Link } from "react-router-dom";
import { AnimesTypes } from "../../types/animesTypes";
import { useDispatch } from "react-redux";
import { animeNextPage } from '../../redux/dataAnimes/actions.js';
import { AnimesContainer } from "./style.js";

export const Anime = ({ name, description ,  episodios, image_url , key }:AnimesTypes ) => {

    const dispatch = useDispatch();

    const handleAnimeClick = () => {
        dispatch(animeNextPage({name , description, episodios, image_url}))
    };

    return (
        <Link to={"/info"}>

            <AnimesContainer key={key}onClick={() => handleAnimeClick()} >
                <img src={image_url} alt={name} />
                <p>{name}</p>
            </AnimesContainer>

        </Link>
    )
}