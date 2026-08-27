import { Footer, Header } from '@/components/site-shell';
import { WaitlistForm } from '@/components/waitlist-form';

const steps = [['01', 'Talk', 'Tell MINE AI what’s going on.'], ['02', 'Plan', 'MINE AI organizes it into your day.'], ['03', 'Remember', 'Get reminders before things get missed.']];
const features = [
  ['Voice planning', 'Say what’s on your mind. MINE AI catches the details.'],
  ['AI day planning', 'Turn scattered thoughts into a day that makes sense.'],
  ['Smart reminders', 'Get a timely nudge before important things slip.'],
  ['Tasks & routines', 'Keep one-offs and everyday rhythms moving together.'],
  ['Today / Calendar', 'See what matters now and what’s coming next.'],
  ['Organize life in one place', 'Bring work, home, errands and plans into one clear view.'],
];

function AppPreview() {
  return <div className="app-preview" aria-label="Preview of the MINE AI day planner">
    <div className="preview-orbit orbit-one" /><div className="preview-orbit orbit-two" />
    <div className="voice-note"><span className="voice-dot" /><div><small>YOU SAID</small><p>“Dinner at 7, finish the proposal, and remind me to call Mum.”</p></div></div>
    <div className="phone-frame"><div className="phone-status"><span>9:41</span><i /><span>● ◒</span></div><div className="phone-screen">
      <div className="phone-brand"><span className="mini-mark">M</span><strong>MINE AI</strong><span className="profile-dot" /></div>
      <p className="phone-label">GOOD MORNING</p><h2>Your day,<br /><em>made clear.</em></h2>
      <div className="focus-card"><small>NEXT UP · 10:00 AM</small><strong>Finish the proposal</strong><span><i /> 45 min focus</span></div>
      <div className="today-title"><strong>Today</strong><small>3 things left</small></div>
      {[['12:30', 'Lunch with Maya', 'People'], ['4:00', 'Call Mum', 'Personal'], ['7:00', 'Dinner', 'Home']].map(([time, title, meta], index) => <div className="phone-task" key={title}><time>{time}</time><i className={`task-dot dot-${index}`} /><div><strong>{title}</strong><small>{meta}</small></div></div>)}
      <div className="phone-nav"><span className="active">●<small>Today</small></span><span>□<small>Calendar</small></span><span>＋<small>Add</small></span></div>
    </div></div>
    <div className="reminder-chip"><span>✓</span><div><small>SMART REMINDER</small><strong>Call Mum at 4:00</strong></div></div>
  </div>;
}

export default function Home() {
  return <><Header home /><main className="home-main">
    <section className="home-hero"><div className="hero-aurora" /><div className="shell hero-grid">
      <div className="hero-copy"><p className="hero-kicker"><span /> YOUR LIFE, MADE CLEAR</p><h1>Your own AI<br /><em>for life.</em></h1><p className="hero-lede">Tell MINE AI what’s happening in your day. It turns your thoughts into a clear plan, tasks and reminders.</p><WaitlistForm location="hero" /><p className="form-trust"><span>✓</span> Early access updates only. No noise.</p></div>
      <AppPreview />
    </div></section>
    <section id="how-it-works" className="home-section how-section"><div className="shell"><div className="section-intro"><p>HOW IT WORKS</p><h2>From thought<br />to handled.</h2></div><div className="steps-grid">{steps.map(([number, title, copy]) => <article key={title}><span>{number}</span><div className="step-symbol" aria-hidden>{title === 'Talk' ? '≋' : title === 'Plan' ? '⌁' : '◴'}</div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section id="features" className="home-section features-section"><div className="shell features-layout"><div className="features-copy"><p className="section-label">BUILT AROUND REAL LIFE</p><h2>Less juggling.<br /><em>More living.</em></h2><p>MINE AI brings the moving pieces of your day together—without turning life into another system to manage.</p></div><div className="feature-list">{features.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
    <section id="early-access" className="final-cta"><div className="cta-glow" /><div className="shell cta-inner"><p className="section-label">EARLY ACCESS</p><h2>Be one of the first<br />to try <em>MINE AI.</em></h2><p>A calmer day starts with getting everything out of your head.</p><WaitlistForm location="final" theme="light" /></div></section>
  </main><Footer /></>;
}
