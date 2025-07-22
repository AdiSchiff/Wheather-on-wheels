import React from 'react';

export default function FilterButtons({ currentFilter, setFilter }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <button
                onClick={() => setFilter("all")}
                disabled={currentFilter === "all"}
            >
                All
            </button>
            <button
                onClick={() => setFilter("Restaurant")}
                disabled={currentFilter === "Restaurant"}
            >
                Restaurant
            </button>
            <button
                onClick={() => setFilter("Hotel")}
                disabled={currentFilter === "Hotel"}
            >
                Hotel
            </button>
            <button
                onClick={() => setFilter("Park")}
                disabled={currentFilter === "Park"}
            >
                Park
            </button>
        </div>
    );
}
