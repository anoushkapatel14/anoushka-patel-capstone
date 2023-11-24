import { useState, useEffect } from "react";
import "./MatchesMovieCard.scss";
import axios from "axios";
import MovieDetailsPopup from "../MovieDetailsPopup/MovieDetailsPopup";
import { Link } from "react-router-dom";

export default function MatchesMovieCard({ match, movies }) {
  const [matches, setMatches] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watched, setWatched] = useState(() => {
    const storedWatched = localStorage.getItem("watched");
    return storedWatched ? JSON.parse(storedWatched) : {};
  });

  const handleMovieClick = (match) => {
    setSelectedMovie(match);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_BASE_URL + "/api/matches"
        );

        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, [match]);

  // Save watched movies to localStorage whenever the watched state changes
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
    console.log("Saved watched:", watched);
  }, [watched]);

  return (
    <>
      {matches.map((match) => (
        <article key={match.id} className="match-card">
          <p className="match-card__title">{match.title}</p>
          <img
            className="match-card__img"
            onClick={() => handleMovieClick(match)}
            src={baseImageUrl + match.poster_path}
            alt={match.title}
          />

          <div className="watched-toggle">
            <p className="watched-toggle__text">Watched? </p>
            <input
              type="checkbox"
              checked={watched[match.id] || false}
              onChange={() => {
                const newWatched = { ...watched };
                newWatched[match.id] = !newWatched[match.id];
                console.log("New watched state:", newWatched);

                setWatched(newWatched);
              }}
            />
          </div>
        </article>
      ))}
      {selectedMovie && (
        <MovieDetailsPopup match={selectedMovie} onClose={closePopup} />
      )}
    </>
  );
}
