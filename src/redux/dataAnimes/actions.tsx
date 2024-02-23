import { AnimeActionTypes } from "./types";

export const animeNextPage = ( payload:object ) =>  ({
    type: AnimeActionTypes.NEXT_PAGE,
    payload
})