import "./Playlist.css";


function Playlist({ playlistName, onNameChange, onSave }) {
  return (
    <div className="Playlist">
      <input 
        value={playlistName}
        onChange={onNameChange}
        placeholder="New Playlist"
      />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
      {/* We'll add the TrackList component here later */}
    </div>
  );
}

export default Playlist;