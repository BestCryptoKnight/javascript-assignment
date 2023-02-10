import React, { useState, useEffect } from "react";
import getMovies, { getSeries } from "../api/Api";
import useDebounce from "../hooks/useDebounce";
import getHighlightedText from "../utils/getHighlightedText";
import Compo from "../utils/getHighlightedText";

const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        (async () => {
            try {
                const _movies = await getMovies(debouncedSearchTerm);
                setMovies(_movies);
                const _series = await getSeries(debouncedSearchTerm);
                setSeries(_series);
                console.log("_movies", _movies);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [debouncedSearchTerm])

    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="App px-20 py-20">
            <div className=" bg-white rounded-md drop-shadow-xl">
                <div className=" divide-y">
                    <input id="searchbox" className=" text-lg px-5 py-7 w-full outline-none" placeholder="Search for movie" onChange={onSearchTermChange} value={searchTerm} />
                    <>
                        {
                            movies.length > 0
                                ?
                                <div className=" px-6">
                                    <h3 className="pt-3 pb-2">Movies</h3>
                                    <ul>
                                        {movies.map((movie, index) => {
                                            return (
                                                <Compo key={index} value={movie.Title} higlight={searchTerm} />
                                            )
                                        })}
                                    </ul>
                                </div>
                                : ""
                        }
                        {
                            series.length > 0
                                ?
                                <div className=" px-6">
                                    <h3 className="pt-3 pb-2">TV shows</h3>
                                    <ul>
                                        {series.map((movie, index) => {
                                            return (
                                                <Compo key={index} value={movie.Title} higlight={searchTerm} />
                                            )
                                        })}
                                    </ul>
                                </div>
                                : ""
                        }
                    </>
                </div>
            </div>
        </div>
    )
}

export default Home;