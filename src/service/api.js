import axios from "axios";

export const getMovieData = () => {}
 
export const getyearsWithMoreThanOneWinner = () => {
 return axios.get('https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners')
}

export const getStudios = () => {
  return axios.get('https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count')
}

export const getPrizeRange = () => {
  return axios.get('https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers')
}

export const getFilmByYear = (year) => {
  return axios.get(`https://tools.texoit.com/backend-java/api/movies?winner=true&year=${year}`)
}