import { Link } from "react-router-dom";
import { AnimesTypes } from "../../types/animesTypes";
import { AnimesContainer } from "./style.js";

export const Anime = ({ name, image_url , id }:AnimesTypes ) => {

    return (
        <Link to={`/info/${id}`}>

            <AnimesContainer >

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