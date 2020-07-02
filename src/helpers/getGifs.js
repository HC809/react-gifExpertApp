
export const getGifs = async (categoria) => {
    const giphyApiKey = 'y39yJY0U3j96pcpu028XWPFjhCDVCBn1';
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${encodeURI(categoria)}&limit=3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        }
    });

    return gifs;
};
