import { useState, useEffect } from "react";
import "./MatchesMovieCard.scss";
import axios from "axios";

export default function MatchesMovieCard({ match, movies }) {
  const [matches, setMatches] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [movieIdDetails, setMovieIdDetails] = useState({});

  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

  //   const [isExpanded, setIsExpanded] = useState(false);

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

    


//     const fetchUserDetails = async (userId) => {
//       try {
//         const userResponse = await axios.get(
//           process.env.REACT_APP_BASE_URL + `/api/users/${userId}`
//         );
//         setUserDetails(userResponse.data);
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     const fetchMovieById = async (movieId) => {
//       try {

//         const numericMovieId = Number(movieId);

//         const response = await axios.get(
//           process.env.REACT_APP_BASE_URL + `/api/movies/${numericMovieId}`
//         );
//         setMovieIdDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };


//     if (match && match.userId && match.movieId) {

//     fetchUserDetails(match.userId);
//     fetchMovieById(match.movieId);

    
// }

fetchMatches();

}, [match]);

  //   const handleCardClick = () => {
  //     setIsExpanded(!isExpanded);
  //   };

//   console.log("Value of 'match' prop:", match);

  return (
    <>
      {matches.map((match) => (
        <div key={match.id} className="match-card">
          {/* <p className="match-card__user">User 2: {match.userId}</p> */}
          <p className="match-card__title" >{match.title}</p>
          <img className="match-card__img"
          src={baseImageUrl + match.poster_path} alt={match.title} />
        </div>
      ))}
    </>
  );
}

//     <>
//     <article
//       className={`matches-movie-card ${isExpanded ? "expanded" : ""}`}
//       onClick={handleCardClick}
//     >
//       <h3 className="matches-movie-card__title">Title</h3>
//       <img
//         className="matches-movie-card__img"
//         src="/"
//         alt=""
//       />
// </article>

// </>

// {/* // <article */}
//   className={`matches-movie-card ${isExpanded ? "expanded" : ""}`}
//   onClick={handleCardClick}
// >
//   <h3 className="matches-movie-card__title">{match.title}</h3>
//   <img
//     className="matches-movie-card__img"
//     src={match.poster_path}
//     alt={match.title}
//   />

//   {isExpanded && (
//     <div className="expanded-card">
//       <h3 className="expanded-card__title">{match.title} </h3>
//       <img className="expanded-card__img"
//       src={match.poster_path} alt={match.title} />
//       <p className="expanded-card__overview">{match.overview}</p>
//       <p className="expanded-card__date">Release date: {match.release_date}</p>
//       <p className="expanded-card__rating">Rating: {match.vote_average}</p>
//     </div>
//   )}
//     // </article>
//   );
// }
