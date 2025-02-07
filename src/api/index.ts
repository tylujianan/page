interface IParams {
    id: string
}
export const getUsers = async () => {
    const data = await fetch(`/users`)
    return await data.json()
}

export const getUser = async (id:string) => {
    const data = await fetch(`/users/${id}`)
    return await data.json()
}