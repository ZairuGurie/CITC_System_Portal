import dtrImage from './assets/DTR2.png'
import queryImage from './assets/Query.jpg'
import onlyLogo from './assets/onlyLogo.png'
import BG from './assets/BG.jpg'

type StatusType = 'live' | 'beta' | 'coming'

interface SystemCard {
  id: number
  tag: string
  title: string
  description: string
  image?: string
  status: StatusType
  visitUrl: string
  infoUrl: string
}

const SYSTEMS: SystemCard[] = [
  {
    id: 1,
    tag: 'Attendance',
    title: 'DTR System',
    description:
      'Daily Time Record management for faculty and staff. Log attendance and view records easily.',
    image: dtrImage,
    status: 'live',
    visitUrl: 'https://dtr-system-v1.vercel.app/',
    infoUrl: '#',
  },
  {
    id: 2,
    tag: 'Concern',
    title: 'Query System',
    description:
      "Submit concerns and track requests directly to the Dean's Office in real time.",
    status: 'live',
    image: queryImage,
    visitUrl: 'https://query-system-vrs1.vercel.app/',
    infoUrl: '#',
  }
]

export default function Page() {
  const liveSystems = SYSTEMS.filter(s => s.status === 'live').length
  const totalSystems = SYSTEMS.length

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: `url('${BG}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">

        {/* HEADER */}
        <header className="flex justify-between items-center px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <img src={onlyLogo} className="h-10" />
            <span className="font-semibold text-lg">Dean's Office</span>
          </div>

          {/* <nav className="hidden md:flex gap-6 text-sm">
            <a href="#systems" className="hover:text-gray-300">Systems</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="mailto:dean@university.edu.ph" className="hover:text-gray-300">Contact</a>
          </nav> */}
        </header>

        {/* HERO */}
        <section className="flex flex-col items-center text-center text-white px-4">
          <p className="text-sm tracking-wide text-gray-300">Office of the Dean - CITC</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            CITC System Portal<br />
          </h1>

          {/* <p className="text-gray-400 max-w-xl mt-4">
            Centralized access to all administrative systems. Fast, simple, and reliable.
          </p> */}

            {/* <a
              href="#systems"
              className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Browse Systems
            </a> */}

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-7 w-full max-w-3xl">
            <Stat label="Live Systems" value={liveSystems} />
            <Stat label="Total Systems" value={totalSystems} />
            <Stat label="Availability" value="24/7" />
          </div>
        </section>

        {/* SYSTEMS */}
        <section id="systems" className="mt-16 px-6 pb-16">
          <div className="text-center text-white mb-10">
            <h2 className="text-2xl font-bold">
              Available <span className="text-gray-300">Systems</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              {liveSystems} of {totalSystems} active
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SYSTEMS.map(card => (
              <SystemCardItem key={card.id} card={card} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="about" className="text-center text-gray-400 text-sm pb-6">
          <div className="relative z-10 mt-6 text-center text-xs text-gray-200">
        © 2026 CITC Dean’s Office Query System <br />
          </div>
        </footer>

      </div>
    </div>
  )
}

/* ── COMPONENTS ───────────────── */

function Stat({ label, value }: { label: string; value: any }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
      <p className="text-xl font-bold text-white">{value}</p>
      <p className="text-xs text-gray-300">{label}</p>
    </div>
  )
}

function SystemCardItem({ card }: { card: SystemCard }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:scale-[1.02] transition">

      <img
        src={card.image}
        alt={card.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-5 text-white">
        <span className="text-xs text-gray-300">{card.tag}</span>

        <h3 className="text-lg font-semibold mt-1">{card.title}</h3>

        <p className="text-sm text-gray-400 mt-2">
          {card.description}
        </p>

        {/* STATUS */}
        <div className="mt-3 text-xs">
          <span className="px-2 py-1 rounded bg-green-500/20 text-green-300">
            {card.status.toUpperCase()}
          </span>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-4">
          <a
            href={card.visitUrl}
            className="flex-1 text-center bg-white text-black py-2 rounded-lg text-sm hover:bg-gray-200 transition"
          >
            Visit
          </a>

          <a
            href={card.infoUrl}
            className="flex-1 text-center border border-white/30 py-2 rounded-lg text-sm hover:bg-white/10 transition"
          >
            Info
          </a>
        </div>
      </div>
    </div>
  )
}