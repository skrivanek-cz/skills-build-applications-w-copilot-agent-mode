import ResourcePage from './ResourcePage.jsx'

export default function Leaderboard() {
  return <ResourcePage path="/api/leaderboard/" title="Leaderboard" description="The weekly standings, sorted by the work behind every point." renderItem={(entry) => (
    <article className="resource-card p-4 d-flex align-items-center gap-3" key={entry._id || entry.rank}>
      <span className="stat-number">{entry.rank}</span><div><h2 className="h5 mb-1">{entry.user?.name || 'Athlete'}</h2><p className="text-secondary mb-0">{entry.points} points - {entry.team?.name || 'Solo'}</p></div>
    </article>
  )} />
}