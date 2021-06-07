export const getGifs = async (categoryName) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=l2skW87FFu0bl3R4fAU3lqqU3AWfICuN&q=${encodeURI(categoryName)}&limit=3`)
    const { data } = await response.json()

    const gifs = data.map(img => ({
        title: img.title,
        url: img.images?.downsized_medium?.url,
        id: img.id
    }))

    return gifs
}