import "./MatchesPage.scss";


export default function MatchesPage({ matches }) {
    return (
      <div>
        <h2>Your Matches</h2>
        {/* {matches.map((match) => (
          <div key={match.id} className="match-card">
            <h3>{match.title}</h3>
            <img src={match.poster_path} alt={match.title} />
          </div>
        ))} */}
      </div>
    );
  }