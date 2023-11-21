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

  const navigate = useNavigate();

  // console.log(movies);
  
  const handleSwipeLeft = (eventData) => {
    setMovies((prevMovies) => {
      // const updatedMovies = prevMovies.filter((movie, index) => index !== currentMovieIndex);
      setCurrentMovieIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : 0
      );
            console.log("Swiped Left", eventData);


      return prevMovies;
    });
  };
  

  const handleSwipeRight = async () => {

    try {
      const currentMovie = movies[currentMovieIndex];
      console.log("current movie:", currentMovie);
      console.log("current movie index:", currentMovieIndex);


      // setCurrentMovieIndex (currentMovieIndex + 1)

       setCurrentMovieIndex((prevIndex) =>
        prevIndex < movies.length - 1 ? prevIndex + 1 : 0
      );


      
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/likes`,
        {
          userId: "2", // Replace with the actual user ID
          movieId: currentMovie.id,
          title: currentMovie.title,
          poster_path: currentMovie.poster_path,
          overview: currentMovie.overview,
          release_date: currentMovie.release_date,
          vote_average: currentMovie.vote_average,
        }
      );

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

     

    } catch (error) {
      console.error(error);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") {
        handleSwipeLeft(eventData);
      } else if (eventData.dir === "Right") {
        handleSwipeRight(eventData);
      }
    },
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