import ResourcePage from './ResourcePage.jsx'

export default function Teams() {
  return <ResourcePage path="/api/teams/" title="Teams" description="Find your people, your pace, and the shared reason to keep going." renderItem={(team) => (
    <article className="resource-card p-4" key={team._id || team.name}>
      <span className="badge rounded-pill text-bg-warning mb-3">{team.members?.length || 0} members</span><h2 className="h4">{team.name}</h2><p className="text-secondary mb-0">{team.motto}</p>
    </article>
  )} />
}