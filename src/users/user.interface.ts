export interface User {
    id: string,
    fullname: string,
    gender: string,
    email: string,
    location: string,
    dietary: Array<string>,
    favorites: Array<string>,
}