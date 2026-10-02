import ResourcePage from './ResourcePage.jsx'

export default function Users() {
  return <ResourcePage path="/api/users/" title="Athletes" description="Meet the people turning small, consistent sessions into momentum." renderItem={(user) => (
    <article className="resource-card p-4" key={user._id || user.email}>
      <div className="d-flex align-items-center gap-3"><div className="rounded-circle bg-success text-white p-3 fw-bold">{user.avatar}</div><div><h2 className="h5 mb-1">{user.name}</h2><p className="text-secondary mb-0">{user.email}</p></div></div>
      <div className="mt-4"><span className="stat-number">{user.points}</span><span className="text-secondary ms-2">points</span></div>
    </article>
  )} />
}