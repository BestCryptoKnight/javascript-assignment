import React, { useState, useEffect } from "react";
import { getMovies, getSeries } from "../api/Api";
import useDebounce from "../hooks/useDebounce";
import Results from "../components/searchResults";
import WarningResult from "../components/warningResult";

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
				console.error(error);
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
						hasError && <WarningResult />
					}
					{
						!hasError && <Results movies={movies} series={series} searchTerm={debouncedSearchTerm} />
					}
				</div>
			</div>
		</div>
	)
}

export default Home;