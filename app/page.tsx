async function getWindows(profile = 'demo-delhi') {
  const key = process.env.NEXT_PUBLIC_ASTROPOWER_API_KEY || 'demo-key-hackathon-2026'
  const base = process.env.NEXT_PUBLIC_ASTROPOWER_API_BASE || 'https://astropower.co.in'
  const res = await fetch(`${base}/api/v1/today?profile=${profile}`, {
    headers: { 'x-api-key': key },
    cache: 'no-store',
  })
  const data = await res.json()
  if (!data.success) throw new Error(data.message || 'Failed to fetch windows')
  return data
}

import { TimingDashboard } from '../components/TimingDashboard'

export default async function Page() {
  const data = await getWindows('demo-delhi')
  return (
    <main className="min-h-dvh bg-white p-6">
      <h1 className="text-2xl font-semibold">Today&apos;s Timing — {data.profile} · {data.date}</h1>
      <p className="text-sm text-gray-500 mt-1">{data.timezone} · {data.windows.length} windows</p>
      <TimingDashboard windows={data.windows} />
      <p className="mt-6 text-xs text-gray-400">Limits: 1000/day, 10/min — demo-key-hackathon-2026 works without registration.</p>
    </main>
  )
}
