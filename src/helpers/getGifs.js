

export const getGift = async ( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category ) }&limit=10&api_key=35k8fgO3YWH7cVW6fzlc8jUhg4nGzA1K`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gift = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }
    });
    return gift; 

}