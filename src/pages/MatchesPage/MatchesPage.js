import MatchesMovieCard from "../../components/MatchesMovieCard/MatchesMovieCard";
import "./MatchesPage.scss";

export default function MatchesPage({ matches }) {
  return (
    <main className="matches">
      <h1 className="matches__title">Your Matches</h1>

      <div className="matches-cards">
        <MatchesMovieCard matches={matches}  />
      </div>
    </main>
  );
}
