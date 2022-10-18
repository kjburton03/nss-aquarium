export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}