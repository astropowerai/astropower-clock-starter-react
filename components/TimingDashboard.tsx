type ClockWindow = {
  id: string
  start: string
  end: string
  type: 'good' | 'warn' | 'bad' | 'neutral'
  activity: 'career' | 'wealth' | 'relationship' | 'spiritual' | 'rest' | 'caution'
  badge: string
  title: string
  description: string
}

export function TimingDashboard({ windows }: { windows: ClockWindow[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {windows.map((w) => (
        <div key={w.id} className={`rounded-xl border p-4 ${w.type === 'good' ? 'bg-green-50 border-green-200' : w.type === 'bad' ? 'bg-red-50 border-red-200' : 'bg-gray-50'}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium">{w.start}–{w.end}</span>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${w.badge === 'PEAK' ? 'bg-emerald-600 text-white' : 'bg-white border'}`}>{w.badge}</span>
          </div>
          <h3 className="mt-2 text-sm font-semibold">{w.title}</h3>
          <p className="text-xs text-gray-600 mt-1">{w.description}</p>
          <p className="text-xs mt-2"><span className="font-medium">{w.type}</span> · {w.activity}</p>
        </div>
      ))}
    </div>
  )
}
