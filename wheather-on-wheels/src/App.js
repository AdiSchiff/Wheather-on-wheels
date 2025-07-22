import './App.css';
import {useEffect, useState} from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Form from "./formPage/Form";
import OnMap from "./map/OnMap";

function App() {
  const [places, setPlaces] = useState([]);

    //update the places list from the local storage
    useEffect(() => {
        const saved = localStorage.getItem('places');
        if (saved) {
            setPlaces(JSON.parse(saved));
        }
    }, []);

  return (
      console.log(places),
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Form places={places} setPlaces={setPlaces}/>} />
            <Route path="/map" element={<OnMap places={places}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
