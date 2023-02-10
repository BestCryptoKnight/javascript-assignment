import React from "react";

const Compo = ({ higlight, value }) => {
    return <p className=" text-lg">{getHighlightedText(value, higlight)}</p>;
};

function getHighlightedText(text, higlight) {
    const searchWords = higlight.toLowerCase().split(" ");
    const query = searchWords.join("|");
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text.split(new RegExp(`(${query})`, "gi"));
    console.log({ parts, text, higlight });

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
