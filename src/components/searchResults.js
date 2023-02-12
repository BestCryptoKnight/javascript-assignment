import React from "react";
import List from "./movieList";

const Results = ({ movies, series, searchTerm }) => {

  return (
    <div>
      {
        movies.length > 0 &&
        <List title={"Movie"} items={movies} searchTerm={searchTerm} />
      }
      {
        series.length > 0 &&
        <List title={"TV shows"} items={series} searchTerm={searchTerm} />
      }
    </div>
  )

}

export default Results;