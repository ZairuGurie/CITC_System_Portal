import './App.css'
import dtrImage from './assets/DTR2.png'
import queryImage from './assets/Query.jpg'
import onlyLogo from './assets/onlyLogo.png'
// ── Types ────────────────────────────────────────────────────────────────────
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

// ── Data ─────────────────────────────────────────────────────────────────────
const SYSTEMS: SystemCard[] = [
  {
    id: 1,
    tag: 'Attendance',
    title: 'DTR System',
    description:
      'Daily Time Record management for faculty and staff. Log attendance, view history, and generate printable reports in compliance with CSC requirements.',
    image: dtrImage,
    status: 'live',
    visitUrl: 'https://dtr-system-v1.vercel.app/',
    infoUrl: '#',
  },
  {
    id: 2,
    tag: 'CONCERN',
    title: 'Query System',
    description:
      "A centralized platform for students and faculty to raise concerns, ask questions, and send requests directly to the Dean's Office. Monitor the status of your submission in real time.",
    status: 'live',
    image: queryImage,
    visitUrl: 'https://query-system-vrs1.vercel.app/',
    infoUrl: '#',
  }
]

const STATUS_LABELS: Record<StatusType, string> = {
  live: 'Live',
  beta: 'Beta',
  coming: 'Coming Soon',
}

// ── Sub-components ───────────────────────────────────────────────────────────

function SystemCardItem({ card }: { card: SystemCard }) {
  return (
    <article className="system-card">
      {card.image ? (
        <img
          src={card.image}
          alt={card.title}
          className="card-image"
          onError={(e) => {
            // Gracefully fall back if the asset doesn't exist
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling?.removeAttribute('style')
          }}
        />
      ) : null}
      {/* Placeholder is always in the DOM; hidden when real image loads */}
      <div className="card-image-placeholder" style={card.image ? { display: 'none' } : undefined}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
             style={{ opacity: 0.18, width: 56, height: 56 }}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      </div>

      <div className="card-body">
        <span className="card-tag">{card.tag}</span>
        <h3 className="card-title">{card.title}</h3>
        <p className="card-desc">{card.description}</p>

        <div className={`card-status status-${card.status}`}>
          <span className="status-dot" />
          {STATUS_LABELS[card.status]}
        </div>

        <div className="card-actions">
          <a
            href={card.visitUrl}
            className="btn-primary"
            aria-disabled={card.status === 'coming'}
            style={card.status === 'coming' ? { opacity: 0.4, pointerEvents: 'none' } : undefined}
          >
            Visit
          </a>
          <a href={card.infoUrl} className="btn-ghost">
            Info
          </a>
        </div>
      </div>
    </article>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
  const liveSystems   = SYSTEMS.filter((s) => s.status === 'live').length
  const totalSystems  = SYSTEMS.length

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────── */}
      <header className="header">
        <div className="header-logo">
          <div className="header-logo-badge" style={{ backgroundImage: `url(${onlyLogo})` }} />
          Dean's Office
        </div>
        <nav>
          <ul className="header-nav">
            <li><a href="#systems">Systems</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="mailto:dean@university.edu.ph">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden />

        <div className="hero-text animate-fade-up">
          <span className="hero-eyebrow">Office of the Dean</span>
          <h1 className="hero-title">
            One Portal.<br />
            <span>Every System.</span>
          </h1>
          <p className="hero-subtitle">
            Centralized access to all administrative and academic systems
            managed by the Dean's Office. Fast, official, and always available.
          </p>
          <a href="#systems" className="hero-cta">
            Browse Systems
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hero-stats animate-fade-up delay-2">
          <div className="stat-card">
            <div className="stat-number">{liveSystems}</div>
            <div className="stat-label">Live Systems</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{totalSystems}</div>
            <div className="stat-label">Total Systems</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Availability</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1</div>
            <div className="stat-label">Portal</div>
          </div>
        </div>
      </section>

      {/* ── SYSTEMS GRID ───────────────────────────────── */}
      <section id="systems" className="systems">
        <div className="section-header">
          <h2 className="section-title">
            Available <span>Systems</span>
          </h2>
          <span className="section-count">
            {liveSystems} of {totalSystems} active
          </span>
        </div>

        <div className="cards-grid">
          {SYSTEMS.map((card, i) => (
            <div
              key={card.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <SystemCardItem card={card} />
              
              
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className="footer" id="about">
        <span>
          &copy; {new Date().getFullYear()} <strong>Dean's Office</strong> — All rights reserved.
        </span>
        <span>
          For concerns, email{' '}
          <a href="mailto:dean@university.edu.ph"
             style={{ color: 'var(--gold)', textDecoration: 'none' }}>
            dean@university.edu.ph
          </a>
        </span>
      </footer>
    </>
  )
}