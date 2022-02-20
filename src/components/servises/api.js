import axios from 'axios';
const API_KEY = '24728459-be2225cc9633c01bc9e770090';
axios.defaults.baseURL = 'https://pixabay.com/api/';

function fetchImg(query, currentPage = 1, imgPerPage = 12) {
  return axios.get(`?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${currentPage}&per_page=${imgPerPage}`).then(response => response.data.hits);
}

export default { fetchImg };