import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./HomePage.scss";
import axios from "axios";
import { useSwipeable } from "react-swipeable";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [matches, setMatches] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [swipeData, setSwipeData] = useState(null);
  const [showMatchPopup, setShowMatchPopup] = useState(false);
  const [userId, setUserId] = useState(null); 


  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserId = async () => {
     const token = sessionStorage.getItem("token");
   
     try {
       const response = await axios.get("http://localhost:8081/profile", {
         headers: {
           Authorization: "Bearer " + token,
         },
       });
       setUserId(response.data.id); 
       console.log(response.data.id);
     } catch (error) {
       console.error(error);
     }
    };
   
    fetchUserId();
    }, []);

  useEffect(() => {
    const storedIndex = localStorage.getItem(
      "currentMovieIndex",
      currentMovieIndex + 1
    );
    setCurrentMovieIndex(storedIndex !== null ? parseInt(storedIndex, 10) : 0);
  }, []);

  const handleSwipeLeft = (eventData) => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex < prevIndex - 1 ? prevIndex + 1 : prevIndex
    );
    setSwipeData(eventData);
  };

  const handleSwipeRight = async () => {
    try {
      const currentMovie = movies[currentMovieIndex];

      localStorage.setItem("currentMovieIndex", currentMovieIndex + 1);

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/likes`,
        {
          //to be discussed
          userId: userId,
          movieId: currentMovie.id,
          title: currentMovie.title,
          poster_path: currentMovie.poster_path,
          overview: currentMovie.overview,
          release_date: currentMovie.release_date,
          vote_average: currentMovie.vote_average,
        }
      );
      if (response.status === 201) {
        setMatches((prevMatches) => [
          ...prevMatches,
          {
            id: currentMovie.id,
            title: currentMovie.title,
            posterPath: currentMovie.poster_path,
            overview: currentMovie.overview,
            releaseDate: currentMovie.release_date,
            voteAverage: currentMovie.vote_average,
          },
        ]);
        setShowMatchPopup(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") {
      } else if (eventData.dir === "Right") {
      }
    },
    swipeDuration: 250,
  });
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get(
          process.env.REACT_APP_BASE_URL + "/api/movies"
        );
        setMovies(data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
    };
    getMovies();
  }, []);
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  return (
    <main className="swipe-main">
      {showMatchPopup && (
        <div className="match-popup">
          <h2>Match found!</h2>
          <button
            className="match-popup__btn"
            onClick={() => setShowMatchPopup(false)}
          >
            Close
          </button>
        </div>
      )}
      <animated.div
        {...swipeHandlers}
        style={{
          transform: x.to((x) => `translateX(${x}px) rotate(${x / 200}deg)`),
        }}
      >
        <MovieCard
          movies={movies}
          currentMovieIndex={currentMovieIndex}
          setCurrentMovieIndex={setCurrentMovieIndex}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      </animated.div>
    </main>
  );
}
