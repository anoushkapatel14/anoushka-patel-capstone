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
  const navigate = useNavigate();
  // console.log(movies);
  const handleSwipeLeft = (eventData) => {
    setCurrentMovieIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    setSwipeData(eventData);
  };
  useEffect(() => {
    if (swipeData) {
    }
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.slice(1);
      // console.log("updated movies:", updatedMovies);
      return updatedMovies;
    });
  }, [currentMovieIndex, swipeData]);
  const handleSwipeRight = async () => {
    try {
      let newIndex = currentMovieIndex;
      console.log("current movie index:", currentMovieIndex);
      if (currentMovieIndex < movies.length - 1) {
        newIndex = currentMovieIndex + 0;
        console.log("new index:", newIndex);
      } else {
        newIndex = 0;
      }
      setCurrentMovieIndex(newIndex);
      // console.log("new index:", newIndex);
      console.log("movies:", movies);
      const currentMovie = movies[newIndex];
      // console.log("current movie:", currentMovie);
      // console.log("current movie index:", currentMovieIndex);
      // console.log("SWPIED");
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/likes`, {
        userId: "2", // Replace with the actual user ID
        movieId: currentMovie.id,
        title: currentMovie.title,
        poster_path: currentMovie.poster_path,
        overview: currentMovie.overview,
        release_date: currentMovie.release_date,
        vote_average: currentMovie.vote_average,
      });
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
      setMovies((prevMovies) => {
        const updatedMovies = prevMovies.slice(1);
        return updatedMovies;
      });
    } catch (error) {
      console.error(error);
    }
  };
  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      // console.log("Swipe Event Data:", eventData);
      if (eventData.dir === "Left") {
        // handleSwipeLeft(eventData);
      } else if (eventData.dir === "Right") {
        // handleSwipeRight(eventData);
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
    <main className="main">
      <animated.div
        {...swipeHandlers}
        style={{
          transform: x.to((x) => `translateX(${x}px) rotate(${x / 200}deg)`),
        }}
      >
        <MovieCard
          movies={movies}
          currentMovieIndex={currentMovieIndex}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        />
      </animated.div>
    </main>
  );
}
//touch and mouse events, pointer events






