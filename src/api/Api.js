import axios from "axios";

export const getMovies = async (movieSearch) => {

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMBD_KEY}&s=${movieSearch}&type=movie`);
    return data.Search.slice(0, 3);
};

export const getSeries = async (seriesSearch) => {

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMBD_KEY}&s=${seriesSearch}&type=series`);

    return data.Search.slice(0, 3);
};