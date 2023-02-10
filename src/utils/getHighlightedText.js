import React from "react";

const Compo = ({ higlight, value }) => {
    return <p>{getHighlightedText(value, higlight)}</p>;
};

function getHighlightedText(text, higlight) {
    // Split text on higlight term, include term itself into parts, ignore case
    console.log("------afad-----", text);
    var parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part.toLowerCase() === higlight.toLowerCase() ? (
                <b>{part}</b>
            ) : (
                part
            )}
        </React.Fragment>
    ));
}

export default Compo;
