import MatchesMovieCard from "../../components/MatchesMovieCard/MatchesMovieCard";
import "./MatchesPage.scss";

export default function MatchesPage({ matches }) {
  return (
    <main className="matches">
      <h1 className="matches__title">Your Matches</h1>
      <div className="matches__text-div">
        <p className="matches__click-text">
          Click on a movie to see more details.
        </p>
        <p className="matches__rate-text">
          Don't forget to rate your movie once you have watched it!
        </p>
      </div>

      <div className="matches-cards">
        <MatchesMovieCard matches={matches} />
      </div>
    </main>
  );
}
