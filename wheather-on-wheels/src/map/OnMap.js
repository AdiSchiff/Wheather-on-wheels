import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import FilterButtons from "./FilterButtons";
import PlaceList from "./PlaceList";

function OnMap ({ places }){
    const navigate = useNavigate()
    const [filter, setFilter] = useState('all'); // 'All' | 'Restaurant' | 'Hotel' | 'Park'

    const handleBack = () => {
        navigate(`/`);
    };

    const getFilteredPlaces = () => {
        if (filter === 'Restaurant') return places.filter(p => p.type === 'Restaurant');
        if (filter === 'Hotel') return places.filter(p => p.type === 'Hotel');
        if (filter === 'Park') return places.filter(p => p.type === 'Park');
        return places;
    };
    console.log(places);
    console.log(getFilteredPlaces());

    return (
        <>
            <button onClick={handleBack}>Add new place</button>
            <FilterButtons currentFilter={filter} setFilter={setFilter}/>
            <PlaceList tasks={getFilteredPlaces()} />
        </>
    );
}

export default OnMap;