import React, { useState, useEffect } from "react";
import { getMovies, getSeries } from "../api/Api";
import useDebounce from "../hooks/useDebounce";
import Compo from "../utils/getHighlightedText";

const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [hasError, setHasError] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        (async () => {
            try {
                if (debouncedSearchTerm === "") {
                    setMovies([]);
                    setSeries([]);
                    setHasError(false);
                } else {
                    const _movies = await getMovies(debouncedSearchTerm);
                    setMovies(_movies);
                    const _series = await getSeries(debouncedSearchTerm);
                    setSeries(_series);
                    setHasError(false);
                }
            } catch (error) {
                console.log(error);
                setHasError(true);
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
                    <input id="searchbox" className=" text-2xl px-5 py-7 w-full outline-none" placeholder="Search for movie" onChange={onSearchTermChange} value={searchTerm} />
                    {
                        hasError && <div className=" text-lg text-red-600">
                            There are too many results here or No matches. <br />
                            Please make more clear search!
                        </div>
                    }
                    {
                        !hasError && <div>
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
                                    <div className=" pt-5 px-6">
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
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;