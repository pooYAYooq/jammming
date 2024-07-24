import React, { useEffect, useState } from "react";
import Spotify from "../../Spotify.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import "./App.css";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = Spotify.handleAuthorization();
    if (token) {
      setIsAuthorized(true);
    }
  }, []);

  if (!isAuthorized) {
    return <div>Authorizing with Spotify...</div>;
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <p>You're now connected to Spotify!</p>
      <SearchBar />
      <SearchResults />

    </div>
  );
}

export default App;
