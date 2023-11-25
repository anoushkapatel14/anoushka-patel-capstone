import { useState, useEffect } from "react";
import "./MatchesMovieCard.scss";
import axios from "axios";
import MovieDetailsPopup from "../MovieDetailsPopup/MovieDetailsPopup";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function MatchesMovieCard({ match, movies }) {
  const [matches, setMatches] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [rating, setRating] = useState(() => {
    const storedRatings = localStorage.getItem("ratings");
    return storedRatings ? JSON.parse(storedRatings) : {};
  });

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

  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffd700",
    inactiveFillColor: "#f7f2e7",
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

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
    console.log("Saved watched:", watched);
  }, [watched]);

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(rating));
    console.log("Saved ratings:", rating);
  }, [rating]);

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
          <div className="star-rating">
            <Rating
              style={{ maxWidth: 150 }}
              itemStyles={myStyles}
              value={rating[match.id] || 0}
              onChange={(newRating) => {
                const newRatings = { ...rating, [match.id]: newRating };
                console.log("New ratings state:", newRatings);

                setRating(newRatings);
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
