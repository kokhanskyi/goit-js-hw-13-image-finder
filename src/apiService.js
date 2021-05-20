const BASE_URL = 'https://pixabay.com/api/';
const KEY = '21693312-e046a5dd5ad9428f47b4f981d';

function searchImages(shearchQuery, page = 1) {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${shearchQuery}&page=${page}&per_page=12&key=${KEY}`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
}

export { searchImages };
