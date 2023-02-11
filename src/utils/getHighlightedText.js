import React from "react";

const Compo = ({ higlight, value }) => {
    return <p className=" text-lg">{getHighlightedText(value, higlight)}</p>;
};

function getHighlightedText(text, higlight) {
    const searchWords = higlight.toLowerCase().split(" ");
    const query = searchWords.join("|");
    var parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {searchWords.includes(part.toLowerCase()) ? (
                <b>{part}</b>
            ) : (
                part
            )}
        </React.Fragment>
    ));
}

export default Compo;
