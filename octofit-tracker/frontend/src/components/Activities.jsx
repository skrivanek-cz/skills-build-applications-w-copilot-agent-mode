import ResourcePage from './ResourcePage.jsx'

export default function Activities() {
  return <ResourcePage path="/api/activities/" title="Activities" description="A clear record of the movement your teams are putting in." renderItem={(activity) => (
    <article className="resource-card p-4" key={activity._id || `${activity.user}-${activity.completedAt}`}>
      <p className="eyebrow">{activity.type}</p><h2 className="h4">{activity.user?.name || 'Athlete'}</h2>
      <p className="text-secondary mb-3">{activity.team?.name || 'Independent session'}</p>
      <div className="d-flex gap-4"><strong>{activity.durationMinutes} min</strong><span>{activity.calories} kcal</span></div>
    </article>
  )} />
}