import "./MovieDetailsPopup.scss";

export default function MovieDetailsPopup({ match, onClose }) {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie-details-popup">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <h2 className="popup-title">{match.title}</h2>
      <img
        className="popup-img"
        src={baseImageUrl + match.poster_path}
        alt={match.title}
      />
      <p>{match.overview}</p>
    </div>
  );
}
