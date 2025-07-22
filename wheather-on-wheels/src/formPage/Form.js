import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Form.css';

function Form ({ places, setPlaces }){
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        //check the name's length
        if (name.length > 25){
            alert("The name is too long (25 characters top)");
            return;
        }

        //check name existence
        if (name === ''){
            alert("Enter the place's name");
            return;
        }

        //check that a type was selected
        if (type === '') {
            alert("Select a type");
            return;
        }

        //check address existence
        if (address === ''){
            alert("Enter the place's address");
            return;
        }

        const newPlace = {
            name: name,
            type: type,
            address: address
        };
        setPlaces([...places, newPlace]);
        alert("The new place was added successfully");
        navigate(`/map`);
    };

    //update the places in the local storage
    useEffect(() => {
        localStorage.setItem('places', JSON.stringify(places));
    }, [places]);

    //update the places list from the local storage
    useEffect(() => {
        const saved = localStorage.getItem('places');
        if (saved) {
            setPlaces(JSON.parse(saved));
        }
    }, []);

    return (
        <>
            <h1>Add a new place:</h1>
            <form className="form-container" onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />

                <select onChange={(e) => setType(e.target.value)} value={type}>
                    <option value="">Type</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Park">Park</option>
                </select>

                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                />

                <button type="submit">Add place</button>
            </form>
        </>
    );
}

export default Form;