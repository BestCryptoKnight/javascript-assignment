import React from "react";
import Compo from "../utils/getHighlightedText";

const List = ({ title, items, searchTerm }) => {
	return (
		<div className="pb-5 px-6">
			<h3 className="pt-3 pb-2">{title}</h3>
			<ul>
				{items.map((movie, index) => {
					return (
						<Compo key={index} value={movie.Title} higlight={searchTerm} />
					)
				})}
			</ul>
		</div>
	)

}

export default List;