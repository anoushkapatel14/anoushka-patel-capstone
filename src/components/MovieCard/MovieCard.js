import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./MovieCard.scss";

export default function MovieCard({ movies, onSwipeLeft, onSwipeRight }) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    setCurrentMovieIndex(0);
  }, [movies]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      console.log("Swiped Left");
      setSwipeDirection("left");
      onSwipeLeft([...movies]); 
      moveToNextMovie();
    },

    onSwipedRight: () => {
      console.log("Swiped Right");
      setSwipeDirection("right");
      onSwipeRight();
      onSwipeRight(currentMovie);
      moveToNextMovie(); 
    },
  });

  const moveToNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
  };

  const getAnimationClass = () => {
    return swipeDirection === "left" ? "swipe-out-left" : swipeDirection === "right" ? "swipe-out-right" : "";
  };

  if (movies.length === 0) {
    return <p>No movies available</p>;
  }

  const currentMovie = movies[currentMovieIndex];
  if (!currentMovie) {
    return <p>No more movies to display</p>;
  }

  return (
    <div className={`movie-card-container ${getAnimationClass()}`} {...swipeHandlers}>
      <div key={currentMovie.id} className={`movie-card ${getAnimationClass()}`}>
        <h2 className="movie-card__title">{currentMovie.title}</h2>
        <img
          className="movie-card__img"
          src={baseImageUrl + currentMovie.poster_path}
          alt={currentMovie.title}
        />
        <p className="movie-card__overview">{currentMovie.overview}</p>
        <p className="movie-card__date">Release date: {currentMovie.release_date}</p>
        <p className="movie-card__rating">Rating: {currentMovie.vote_average}</p>
      </div>

      {currentMovieIndex < movies.length - 1 && (
        <div key={movies[currentMovieIndex + 1].id} className={`movie-card ${getAnimationClass()}`}></div>
      )}
    </div>
  );
}
