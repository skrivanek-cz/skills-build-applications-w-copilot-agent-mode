const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function responseItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

export async function fetchResource(path) {
  const response = await fetch(`${apiBaseUrl}${path}`)
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
  return responseItems(await response.json())
}