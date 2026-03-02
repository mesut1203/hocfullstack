import React from "react";

export default function Attribute({ attributes }) {
    return (
        <ul className="attributes">
            {attributes.map((att, index) => (
                <li key={index}>{att}</li>
            ))}
        </ul>
    );
}

