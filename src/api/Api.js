import axios from "axios";

const getMovies = async (movieSearch) => {

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMBD_KEY}&s=${movieSearch}&type=movie`);
    console.log("data---------", data)
    return data.Search.slice(0, 3);
};

export const getSeries = async (seriesSearch) => {

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMBD_KEY}&s=${seriesSearch}&type=series`);

    return data.Search.slice(0, 3);
};

export default getMovies;