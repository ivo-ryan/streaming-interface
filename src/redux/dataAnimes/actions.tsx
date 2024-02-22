import { AnimeActionTypes } from "./types";

export const animeNextPage = ( payload:any ) =>  ({
    type: AnimeActionTypes.NEXT_PAGE,
    payload
})