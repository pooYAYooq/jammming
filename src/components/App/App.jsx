import React, { useEffect, useState } from "react";
import Spotify from "../../Spotify.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";
import TrackList from "../TrackList/TrackList.jsx";
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
      <Playlist/>
      <TrackList/>


    </div>
  );
}

export default App;
