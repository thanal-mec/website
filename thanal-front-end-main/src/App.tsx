import { FormEvent, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CirclePlay,
  Download,
  FileText,
  Heart,
  ArrowUpRight,
  Menu,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const photos = {
  volunteers:
    'https://images.pexels.com/photos/6646952/pexels-photo-6646952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  hands:
    'https://images.pexels.com/photos/6646816/pexels-photo-6646816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  meals:
    'https://images.pexels.com/photos/6995298/pexels-photo-6995298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  sorting:
    'https://images.pexels.com/photos/7156168/pexels-photo-7156168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const reports = [
  { year: '2024–25', title: 'Growing together', summary: 'A year of small contributions, shared meals and steady hope.', highlight: '12 initiatives' },
  { year: '2023–24', title: 'The year we showed up', summary: 'Stories of student action, community care and collective courage.', highlight: '1,200+ volunteers' },
  { year: '2022–23', title: 'A shade for many', summary: 'Looking back on the people and moments that shaped our journey.', highlight: 'Since 2011' },
];

const initiatives = [
  {
    number: '01',
    title: 'One Day One Rupee',
    description: 'Small, everyday giving that grows into a dependable safety net for someone who needs it.',
    image: photos.sorting,
    accent: 'amber',
  },
  {
    number: '02',
    title: 'Pratheeksha',
    description: 'Standing with dialysis patients and their families through difficult, ongoing treatment.',
    image: photos.hands,
    accent: 'sage',
  },
  {
    number: '03',
    title: 'Food Packet Collection',
    description: 'Turning shared meals into moments of dignity, warmth and human connection.',
    image: photos.meals,
    accent: 'forest',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donationOpen, setDonationOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState('500');
  const [donationSent, setDonationSent] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageSent(true);
  };

  const handleDonation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDonationSent(true);
  };

  const closeDonation = () => {
    setDonationOpen(false);
    setDonationSent(false);
  };

  const playPreview = () => {
    void videoRef.current?.play();
  };

  const pausePreview = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Thanal MEC home">
          <img src="/image.png" alt="Thanal MEC logo" />
          <span>
            <strong>THANAL</strong>
            <small>MEC · KOCHI</small>
          </span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#initiatives" onClick={() => setMenuOpen(false)}>Initiatives</a>
          <a href="#impact" onClick={() => setMenuOpen(false)}>Our impact</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="nav-donate" onClick={() => setDonationOpen(true)}>
            Donate <ArrowUpRight size={15} />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Student-powered humanitarian action</p>
            <h1>A little kindness.<br /><em>A lasting impact.</em></h1>
            <p className="hero-intro">We are a community of students choosing to show up for one another — with compassion, consistency and courage.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => setDonationOpen(true)}>Make a difference <ArrowRight size={17} /></button>
              <a className="text-link" href="#story">Discover Thanal <ArrowDownRight size={17} /></a>
            </div>
          </div>

          <div className="hero-visual" onMouseEnter={playPreview} onMouseLeave={pausePreview}>
            <div className="hero-image-wrap">
              <img src={photos.volunteers} alt="Volunteers working together at a food collection" />
              <video ref={videoRef} muted loop playsInline poster={photos.volunteers} aria-label="A preview of volunteers in action">
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              </video>
              <div className="video-label"><CirclePlay size={16} fill="currentColor" /> Hover to preview</div>
            </div>
            <div className="hero-note"><Sparkles size={17} /><span>Every small act<br />makes room for hope.</span></div>
            <div className="hero-stamp">Since<br /><strong>2011</strong></div>
          </div>
        </section>

        <section className="impact-strip" id="impact">
          <div className="impact-heading"><span className="section-kicker">The ripple effect</span><strong>When we give together,<br />everyone goes further.</strong></div>
          <div className="impact-stat"><span className="stat-number">15<span>+</span></span><span className="stat-label">years of student-led<br />action</span></div>
          <div className="impact-stat"><span className="stat-number">1<span>₹</span></span><span className="stat-label">is all it takes<br />to begin</span></div>
          <div className="impact-stat"><span className="stat-number">∞</span><span className="stat-label">ways to show<br />you care</span></div>
        </section>

        <section className="story-section content-width" id="story">
          <div className="story-image">
            <img src={photos.hands} alt="A supportive hand held by a volunteer" />
            <div className="image-caption">Humanity is our common ground.</div>
          </div>
          <div className="story-copy">
            <p className="eyebrow"><span /> What Thanal means</p>
            <h2>A shade of hope<br /><em>for everyone.</em></h2>
            <p>Thanal means shade — a place of comfort and shelter. Born at Government Model Engineering College, we believe that a campus is at its best when its students look beyond themselves.</p>
            <p>From one rupee to one warm meal, we turn the spirit of giving into action that reaches real people, in real moments.</p>
            <a className="round-link" href="#initiatives" aria-label="Explore our initiatives"><ArrowDownRight size={20} /></a>
          </div>
        </section>

        <section className="initiatives-section" id="initiatives">
          <div className="content-width">
            <div className="section-heading-row">
              <div><p className="eyebrow"><span /> Where care becomes action</p><h2>Ways to <em>show up.</em></h2></div>
              <p>There is no single way to make a difference. Find the one that feels like yours.</p>
            </div>
            <div className="initiative-grid">
              {initiatives.map((initiative) => (
                <article className={`initiative-card ${initiative.accent}`} key={initiative.number}>
                  <div className="card-image"><img src={initiative.image} alt={initiative.title} /><span>{initiative.number}</span></div>
                  <div className="card-body"><h3>{initiative.title}</h3><p>{initiative.description}</p><a href="#contact">Learn more <ArrowUpRight size={15} /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reports-section" id="reports">
          <div className="content-width">
            <div className="section-heading-row reports-heading">
              <div><p className="eyebrow"><span /> Our journey in pages</p><h2>Stories worth<br /><em>remembering.</em></h2></div>
              <p>Explore the work, people and moments behind every contribution. Our annual reports keep the circle informed.</p>
            </div>
            <div className="reports-grid">
              {reports.map((report, index) => (
                <article className={`report-card ${index === 0 ? 'featured-report' : ''}`} key={report.year}>
                  <div className="report-cover"><FileText size={27} strokeWidth={1.2} /><span>THANAL<br />MEC</span><strong>{report.year}</strong><i>{index === 0 ? 'Annual report' : 'Impact report'}</i></div>
                  <div className="report-content"><p className="report-year">{report.year}</p><h3>{report.title}</h3><p>{report.summary}</p><div className="report-footer"><span>{report.highlight}</span><a href="#contact" aria-label={`Request the ${report.year} report`}>Request copy <Download size={14} /></a></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="join-section content-width">
          <div className="join-inner">
            <div><p className="eyebrow light"><span /> Your next small step</p><h2>Kindness is<br /><em>contagious.</em></h2></div>
            <div className="join-copy"><p>You don’t need a grand plan to make a difference. Start with what you have, where you are, and join a growing circle of people who care.</p><button className="button button-amber" onClick={() => setDonationOpen(true)}>Join the movement <ArrowRight size={17} /></button></div>
            <Heart className="join-heart" size={145} strokeWidth={0.7} />
          </div>
        </section>

        <section className="contact-section content-width" id="contact">
          <div className="contact-intro"><p className="eyebrow"><span /> Say hello</p><h2>Let’s make<br /><em>something good.</em></h2><p>Have a question, an idea, or simply want to be part of the circle? We would love to hear from you.</p><div className="contact-details"><span>thanal@mec.ac.in</span><span>Government Model Engineering College<br />Thrikkakara, Kochi</span></div></div>
          <form className="contact-form" onSubmit={handleContact}>
            {messageSent ? <div className="success-state"><span><Check size={20} /></span><h3>Thank you for reaching out.</h3><p>We’ll get back to you soon.</p><button type="button" className="text-link" onClick={() => setMessageSent(false)}>Send another message <ArrowRight size={16} /></button></div> : <>
              <label>Your name<input required type="text" placeholder="How should we call you?" /></label>
              <label>Email address<input required type="email" placeholder="you@example.com" /></label>
              <label>What’s on your mind?<textarea required placeholder="Tell us a little about it..." rows={3} /></label>
              <button className="submit-button" type="submit">Send message <Send size={16} /></button>
            </>}
          </form>
        </section>
      </main>

      <footer className="footer"><div className="footer-brand"><img src="/image.png" alt="Thanal logo" /><span>To Humans,<br /><em>A Noble Acme Life.</em></span></div><p>© {new Date().getFullYear()} Thanal MEC. Built with care.</p><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>

      {donationOpen && <div className="modal-backdrop" onClick={closeDonation}><div className="donation-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={closeDonation} aria-label="Close donation window"><X size={20} /></button>{donationSent ? <div className="success-state modal-success"><span><Check size={20} /></span><h3>Thank you for choosing kindness.</h3><p>Your intention to contribute matters. The donation experience will be connected here soon.</p><button className="button button-dark" onClick={closeDonation}>Done</button></div> : <><p className="eyebrow"><span /> Give with purpose</p><h2>Your kindness,<br /><em>in motion.</em></h2><p className="modal-text">Choose an amount to start a ripple. Every contribution supports Thanal’s student-led humanitarian work.</p><div className="amount-grid">{['100', '500', '1000', '2500'].map((amount) => <button className={donationAmount === amount ? 'amount active' : 'amount'} key={amount} onClick={() => setDonationAmount(amount)}>₹{amount}</button>)}</div><label className="custom-amount">Or enter another amount<input value={donationAmount} onChange={(event) => setDonationAmount(event.target.value)} inputMode="numeric" /></label><button className="button button-dark full-width" onClick={handleDonation}>Continue with ₹{donationAmount || '0'} <ArrowRight size={17} /></button><p className="secure-note"><ShieldCheck size={15} /> Secure giving experience · Frontend preview</p></>}</div></div>}
    </div>
  );
}

export default App;
