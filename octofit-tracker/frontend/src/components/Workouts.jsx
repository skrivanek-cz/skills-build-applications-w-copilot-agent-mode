import ResourcePage from './ResourcePage.jsx'

export default function Workouts() {
  return <ResourcePage path="/api/workouts/" title="Workouts" description="A practical library of sessions for wherever your energy is today." renderItem={(workout) => (
    <article className="resource-card p-4" key={workout._id || workout.title}>
      <div className="d-flex justify-content-between gap-3"><p className="eyebrow">{workout.category}</p><span className="badge text-bg-light">{workout.difficulty}</span></div><h2 className="h4">{workout.title}</h2><p className="text-secondary">{workout.description}</p><strong>{workout.durationMinutes} minutes</strong>
    </article>
  )} />
}