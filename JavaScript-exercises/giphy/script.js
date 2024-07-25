
const img = document.querySelector('img');
const input = document.querySelector('input');
const btn = document.querySelector("button");
const imageContainer = document.querySelector('.image');

const error = document.querySelector(".error");

const loader = document.querySelector('.spiner')

const copyLink = document.querySelector('.copy-btn');

imageContainer.style.display = 'none'

let id;

btn.addEventListener('click', async function () {
    let imageData = await fetchData(input.value ?? 'cat');
    img.src = imageData.url;
    id = imageData.id;
})


copyLink.addEventListener('click', function () {
    navigator.clipboard.writeText(`https://media4.giphy.com/media/${id}/giphy.mp4`)
        .then(() => {
            alert('Image URL copied to clipboard!');
        })
        .catch((error) => {
            alert('Failed to copy image URL:', error);
        });

})



async function fetchData(value) {

    try{

    img.src = ''
    imageContainer.style.display = 'none';
    loader.style.display = 'block';

    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=okh8QVYij0Fh4d2XFECyoP0MhGBXagv7&s=${value}`, { mode: 'cors' });
    let json = await response.json();

    loader.style.display = 'none';
    imageContainer.style.display = '';
    let url = json.data.images.downsized_medium.url;
    let id = json.data.id;

    return { url: url, id: id }

    }catch(e){
        return e; 
    }

}
