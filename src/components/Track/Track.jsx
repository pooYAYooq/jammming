import "./Track.css";

function Track() {
  return (
    <div className="track">
      <div className="track-information">
        <h3>Track Name</h3>
        <p>Artist | Album</p>
      </div>
      <button className="track-action"> + </button>
    </div>
  );
}

export default Track;
