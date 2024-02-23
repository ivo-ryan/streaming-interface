import { FilmesActionTypes } from "./types";

export const filmesNextPage = (payload:object) => ({
    type: FilmesActionTypes.NEXT_PAGE,
    payload
})