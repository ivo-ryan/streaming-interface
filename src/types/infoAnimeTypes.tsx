export interface InfoAnimeTypes {
    _id: string,
    name: string,
    description: string,
    image_url: string,
    epsodios: [{
        type: string,
        url: string
    }]
}