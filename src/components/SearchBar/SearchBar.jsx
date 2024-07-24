import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search songs, albums, artists" />
      <button className="search-btn">SEARCH</button>
    </div>
  );
}

export default SearchBar;
