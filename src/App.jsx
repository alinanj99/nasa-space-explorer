import { useEffect, useState } from "react";
import DateForm from "./components/DateForm";
import SpaceCard from "./components/SpaceCard";
import "./App.css";

function App() {
  const [spaceData, setSpaceData] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  async function getSpaceData(date = "") {
    try {
      setLoading(true);
      setError("");

      let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

      if (date) {
        url += `&date=${date}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Unable to get NASA data.");
      }

      const data = await response.json();

      setSpaceData(data);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    getSpaceData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    getSpaceData(selectedDate);
  }

  return (
    <div className="app">
      <header>
        <h1>NASA Space Explorer</h1>
        <p>Explore NASA's Daily Space Media</p>
      </header>

      <DateForm
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleSubmit={handleSubmit}
      />

      {loading && <p className="message">Loading...</p>}

      {error && <p className="message">{error}</p>}

      {!loading && !error && spaceData && (
        <SpaceCard spaceData={spaceData} />
      )}
    </div>
  );
}

export default App;