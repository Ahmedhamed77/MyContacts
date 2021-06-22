export type LoginPayload = {
    username: string,
    password: string,
}

export type User = {
    username: string,
    first_name: string,
    last_name: string,
    email: string,
}

export type LoginResponsePayload = {
    user:User,
    token:string,
}