import React, {useState} from "react";

function PlaceList({ places }) {
    const [selectedPlace, setSelectedPlace] = useState([]);

    return (
        console.log(places),
        <ul>
            {places.map((p, index) => (
                <li key={index} onClick={() => setSelectedPlace(p)}>
                    {p.name}
                </li>
            ))}
        </ul>
    );
}

export default PlaceList;