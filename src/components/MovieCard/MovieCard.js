import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./MovieCard.scss";

export default function MovieCard({
  movies,
  onSwipeLeft,
  onSwipeRight,
  currentMovieIndex,
  setCurrentMovieIndex,
}) {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

  const swipeHandlers = useSwipeable({
    onSwipedLeft: async () => {
      setSwipeDirection("left");
      await onSwipeLeft(currentMovie);

      setTimeout(() => {
        moveToNextMovie();
      }, 1000);
    },
    onSwipedRight: async () => {
      setSwipeDirection("right");
      await onSwipeRight(currentMovie);

      setTimeout(() => {
        moveToNextMovie();
      }, 1000);
    },
  });
  const moveToNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => {
      setSwipeDirection(null);
    }, 1000);
  };

  const getAnimationClass = () => {
    return swipeDirection === "left"
      ? "swipe-out-left"
      : swipeDirection === "right"
      ? "swipe-out-right"
      : "";
  };
  if (!movies || movies.length === 0) {
    return <p className="fail">No movies available</p>;
  }
  const currentMovie = movies[currentMovieIndex];
  if (!currentMovie) {
    return <p className="fail">No more movies to display</p>;
  }

  const formattedReleaseDate = new Date(
    currentMovie.release_date
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

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
        <p className="movie-card__date">Release date: {formattedReleaseDate}</p>
        <p className="movie-card__rating">
          Rating: {currentMovie.vote_average} /10
        </p>
      </div>
      {movies?.[currentMovieIndex + 1] && (
        <div
          key={movies[currentMovieIndex + 1].id}
          className={`movie-card ${getAnimationClass()}`}
        ></div>
      )}
    </div>
  );
}
