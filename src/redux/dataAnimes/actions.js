import { AnimeActionTypes } from "./types";

export const animeNextPage = ( payload ) =>  ({
    type: AnimeActionTypes.NEXT_PAGE,
    payload
})