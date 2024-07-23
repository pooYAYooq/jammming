import React, { useEffect, useState } from "react";
import Spotify from "./Spotify.js";

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
      {/* Your app content */}
      <h1>Jammming</h1>
      <p>You're now connected to Spotify!</p>
    </div>
  );
}

export default App;
