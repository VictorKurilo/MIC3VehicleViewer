import axios from 'axios';

export const getPeople = (page = 1, search = '') => {
  return axios.get('https://swapi.dev/api/people', {
    params: {
      page,
      search
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching people:', error);
      return { results: [], count: 0 };
    });
};
