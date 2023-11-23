import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./MovieCard.scss";
export default function MovieCard({ movies, onSwipeLeft, onSwipeRight, currentMovieIndex, setCurrentMovieIndex }) {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";


  const swipeHandlers = useSwipeable({
    onSwipedLeft: async () => {
      setSwipeDirection("left");
      await onSwipeLeft(currentMovie);
      moveToNextMovie();
    }, 
    onSwipedRight: async () => {
      setSwipeDirection("right");
      await onSwipeRight(currentMovie);
      moveToNextMovie();
    },
  });
  const moveToNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
    // Reset swipe direction after the animation duration
    setTimeout(() => {
      setSwipeDirection(null);
    }, 1000); // Adjust this value to match your animation duration
  };
  const getAnimationClass = () => {
    return swipeDirection === "left"
      ? "swipe-out-left"
      : swipeDirection === "right"
      ? "swipe-out-right"
      : "";
  };
  if (!movies || movies.length === 0) {
    return <p>No movies available</p>;
  }
  const currentMovie = movies[currentMovieIndex];
  if (!currentMovie) {
    return <p>No more movies to display</p>;
  }
  return (
    <div
      className={`movie-card-container ${getAnimationClass()}`}
      {...swipeHandlers}
    >
      <div
        key={currentMovie.id}
        className={`movie-card ${getAnimationClass()}`}
      >
        <h2 className="movie-card__title">{currentMovie.title}</h2>
        <img
          className="movie-card__img"
          src={baseImageUrl + currentMovie.poster_path}
          alt={currentMovie.title}
        />
        <p className="movie-card__overview">{currentMovie.overview}</p>
        <p className="movie-card__date">
          Release date: {currentMovie.release_date}
        </p>
        <p className="movie-card__rating">
          Rating: {currentMovie.vote_average}
        </p>
      </div>
      {movies?.[currentMovieIndex + 1] && (
        <div
          key={movies[currentMovieIndex + 1].id}
          className={`movie-card ${getAnimationClass()}`}
        ></div>
      )}
    </div>
  );}