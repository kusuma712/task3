import { useEffect, useState } from 'react'

export default function useDashboardData() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function fetchData(){
      try {
        setLoading(true)
        const res = await fetch('/data/data.json', {cache:'no-store'})
        if(!res.ok) throw new Error('Failed to fetch data')
        const json = await res.json()
        if(!cancelled) setData(json)
      } catch(err) {
        if(!cancelled) setError(err)
      } finally {
        if(!cancelled) setLoading(false)
      }
    }
    fetchData()
    return ()=> { cancelled = true }
  }, [])

  return { data, error, loading }
}
