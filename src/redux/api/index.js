import axios from 'axios';

const baseURL = 'https://www.omdbapi.com/?apiKey=29329a87';

export const apiCall = (url, data, headers, method) => axios ({
    method,
    url: baseURL + url,
    data,
    headers
});
