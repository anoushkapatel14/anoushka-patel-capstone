import { useState, useEffect } from "react";
import "./MatchesMovieCard.scss";
import axios from "axios";

export default function MatchesMovieCard({ match, movies }) {
  const [matches, setMatches] = useState([]);


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



  return (
    <>
      {matches.map((match) => (
        <div key={match.id} className="match-card">
          {/* <p className="match-card__user">User 2: {match.userId}</p> */}
          <p className="match-card__title">{match.title}</p>
          <img
            className="match-card__img"
            src={baseImageUrl + match.poster_path}
            alt={match.title}
          />
        </div>
      ))}
    </>
  );
}


