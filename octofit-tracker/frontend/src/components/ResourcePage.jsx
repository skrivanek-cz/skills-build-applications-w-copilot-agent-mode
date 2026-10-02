import { useEffect, useState } from 'react'
import { fetchResource } from '../api.js'

export default function ResourcePage({ path, title, description, renderItem, emptyLabel }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchResource(path)
      .then((nextItems) => active && setItems(nextItems))
      .catch((requestError) => active && setError(requestError.message))
    return () => { active = false }
  }, [path])

  return (
    <section>
      <p className="eyebrow">OctoFit / {title}</p>
      <h1 className="display-title mb-3">{title}</h1>
      <p className="intro mb-5">{description}</p>
      {error && <div className="alert alert-warning">Could not load this view: {error}</div>}
      {!error && items.length === 0 && <div className="empty-state rounded p-4">{emptyLabel || 'No records yet.'}</div>}
      <div className="resource-grid">{items.map((item) => renderItem(item))}</div>
    </section>
  )
}