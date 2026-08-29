/*
 * FIELD NOTES IN MOTION — page-level reminder
 * The paper plane is the protagonist, the route is the navigation, and every
 * portfolio section is a physical landmark inside one hand-drawn world.
 */
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ChevronDown,
  Compass,
  Github,
  Linkedin,
  Mail,
  Map,
  Menu,
  MoveDown,
  Send,
  X,
} from "lucide-react";

const WORLD_ASSET = "/manus-storage/sketchbook-world-reference_d962a01c.png";
const WORKSHOP_ASSET = "/manus-storage/workshop-roadside-landmark_68232250.png";
const LAB_ASSET = "/manus-storage/ai-research-lab_95567f2c.png";
const ROUTE_MARK_ASSET = "/manus-storage/route-plane-mark_44b3316e.png";

function PlaneMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" aria-hidden="true">
      <path d="M8 47 L108 10 L70 88 L57 57 Z" fill="#f2ead9" stroke="#2c2a25" strokeWidth="4" strokeLinejoin="round" />
      <path d="M8 47 L57 57 L108 10" fill="none" stroke="#a1592e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 57 L70 88" fill="none" stroke="#2c2a25" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 66 C 24 61, 31 61, 40 64" fill="none" stroke="#2c2a25" strokeOpacity=".42" strokeWidth="2" strokeLinecap="round" />
      <circle cx="108" cy="10" r="4" fill="#a1592e" />
    </svg>
  );
}

const WAYPOINTS = [0, 0.13, 0.25, 0.38, 0.52, 0.67, 0.82, 0.96];

function routedProgress(progress: number) {
  const nearest = WAYPOINTS.reduce((best, waypoint, index) => {
    const distance = Math.abs(progress - waypoint);
    return distance < best.distance ? { index, waypoint, distance } : best;
  }, { index: 0, waypoint: WAYPOINTS[0], distance: Infinity });
  if (nearest.distance < 0.022) {
    const local = (progress - nearest.waypoint) / 0.022;
    return nearest.waypoint + local * 0.022 * 0.32;
  }
  return progress;
}

const sections = [
  { id: "start", label: "START", eyebrow: "00 / takeoff" },
  { id: "about", label: "ABOUT", eyebrow: "01 / information tower" },
  { id: "education", label: "EDUCATION", eyebrow: "02 / schoolhouse" },
  { id: "skills", label: "SKILLS", eyebrow: "03 / inventor's shed" },
  { id: "projects", label: "PROJECTS", eyebrow: "04 / research outpost" },
  { id: "achievements", label: "ACHIEVEMENTS", eyebrow: "05 / bulletin board" },
  { id: "certifications", label: "CERTIFICATIONS", eyebrow: "06 / pinned wall" },
  { id: "contact", label: "CONTACT", eyebrow: "07 / final destination" },
];

const skills = {
  "AI / ML": [
    "Python",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "HuggingFace Transformers",
    "Scikit-learn",
    "QLoRA / PEFT",
    "LangChain",
    "RAG Pipelines",
    "Grad-CAM",
    "FAISS / Chroma",
    "Mistral 7B",
    "EfficientNetB0",
    "Swin Transformer",
  ],
  "Full Stack": ["React.js", "HTML", "CSS", "FastAPI", "Supabase", "REST APIs", "PWA", "PostgreSQL"],
  Languages: ["Python", "C", "C++", "Java", "Bash", "PowerShell"],
  "Tools & Libraries": ["OpenCV", "Pandas", "NumPy", "Matplotlib", "Faker", "Git", "Docker", "Jupyter", "VS Code", "n8n"],
  "Platforms & OS": ["Linux (Ubuntu)", "Windows", "Google Cloud", "Hugging Face Spaces", "Vercel"],
};

const education = [
  { school: "Woodbine Gardenia School", place: "Kanpur, Uttar Pradesh", detail: "High School (Class X) · Apr 2021 – May 2022", score: "92%" },
  { school: "Mittal International School", place: "Kota, Rajasthan", detail: "Intermediate (Class XII) · Apr 2023 – May 2024", score: "86%" },
  { school: "Vellore Institute of Technology, Bhopal", place: "Bhopal, Madhya Pradesh", detail: "B.Tech in Computer Science · 2024 – 2028 (Present)", score: "CGPA 8.69" },
];

const certifications = [
  ["Python Essentials", "Vellore Institute of Technology · Sep 2024"],
  ["Cloud Computing", "NPTEL · Jan 2025"],
  ["Fundamentals of AI and ML", "Vellore Institute of Technology · Apr 2025"],
  ["Programming in Java", "Vellore Institute of Technology · Sep 2025"],
  ["Market Analytics", "NPTEL · May 2026"],
  ["MATLAB Onramp", "MathWorks · May 2026"],
  ["Advanced SQLite Queries", "Belkasoft · July 2026"],
  ["Generative AI and Workflow Automation using n8n", "E&ICT Academy, IIT Kanpur · July 2026"],
];

function PaperPlane({ progress }: { progress: number }) {
  const flightProgress = routedProgress(progress);
  const x = 16 + Math.sin(flightProgress * Math.PI * 2.6) * 22 + flightProgress * 43;
  const y = 70 - flightProgress * 58 + Math.sin(flightProgress * Math.PI * 3.1) * 5;
  const rotation = -11 + Math.sin(flightProgress * Math.PI * 4) * 8 + flightProgress * 13;
  const nearLandmark = WAYPOINTS.some((waypoint) => Math.abs(progress - waypoint) < 0.022);
  return (
    <div
      className={`plane-flight ${nearLandmark ? "plane-arriving" : ""}`}
      style={{
        transform: `translate3d(${x}vw, ${y}vh, 0) rotate(${rotation}deg)`,
      }}
      aria-label="Paper plane flying along Apoorv's journey"
    >
      <span className="plane-glow" />
      <PlaneMark className="plane-svg" />
      <span className="plane-trail trail-one" />
      <span className="plane-trail trail-two" />
      {nearLandmark && <span className="arrival-pulse" />}
    </div>
  );
}

function Signpost({ number, label, note }: { number: string; label: string; note: string }) {
  return (
    <div className="signpost" aria-hidden="true">
      <div className="signpost-post" />
      <div className="signpost-board">
        <span className="signpost-number">{number}</span>
        <strong>{label}</strong>
        <small>{note}</small>
      </div>
    </div>
  );
}

function LandmarkHeading({ number, kicker, title, note }: { number: string; kicker: string; title: string; note: string }) {
  return (
    <div className="landmark-heading">
      <div className="landmark-index"><span>{number}</span><i /></div>
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
        <p className="section-note">{note}</p>
      </div>
    </div>
  );
}

function RouteSketch({ progress }: { progress: number }) {
  return (
    <div className="route-sketch" aria-hidden="true">
      <svg viewBox="0 0 100 1000" preserveAspectRatio="none">
        <path className="route-road" d="M52 0 C 20 110, 82 190, 46 295 S 18 430, 60 540 S 84 670, 40 760 S 18 890, 55 1000" />
        <path className="route-shadow" d="M52 0 C 20 110, 82 190, 46 295 S 18 430, 60 540 S 84 670, 40 760 S 18 890, 55 1000" />
        <path
          className="route-line"
          style={{ strokeDashoffset: `${980 - progress * 980}` }}
          d="M52 0 C 20 110, 82 190, 46 295 S 18 430, 60 540 S 84 670, 40 760 S 18 890, 55 1000"
        />
        <path className="route-dashes" d="M52 0 C 20 110, 82 190, 46 295 S 18 430, 60 540 S 84 670, 40 760 S 18 890, 55 1000" />
      </svg>
      {WAYPOINTS.slice(1).map((waypoint, index) => <span className="route-stop" style={{ top: `${waypoint * 100}%` }} key={waypoint}><b>{String(index + 1).padStart(2, "0")}</b></span>)}
      <span className="route-label label-start">takeoff</span>
      <span className="route-label label-projects">the workbench</span>
      <span className="route-label label-finish">land here</span>
    </div>
  );
}

function LandscapeLayer({ progress }: { progress: number }) {
  return (
    <div className="landscape-layer" aria-hidden="true" style={{ "--world-progress": progress } as React.CSSProperties}>
      <div className="paper-glow" />
      <div className="distant-plate" style={{ backgroundImage: `url(${WORLD_ASSET})` }} />
      <div className="cloud cloud-a"><span /><span /><span /></div>
      <div className="cloud cloud-b"><span /><span /><span /></div>
      <div className="mountain mountain-a" />
      <div className="mountain mountain-b" />
      <div className="tree-line tree-line-back"><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="tree-line tree-line-front"><i /><i /><i /><i /><i /></div>
      <div className="bird flock-one">⌁⌁</div>
      <div className="bird flock-two">⌁⌁⌁</div>
      <div className="foreground-grass grass-left" />
      <div className="foreground-grass grass-right" />
    </div>
  );
}

function Hero({ goTo }: { goTo: (id: string) => void }) {
  return (
    <section id="start" className="scene-section hero-scene" data-index="0">
      <div className="hero-stamp">FIELD NOTE 00 <span>•</span> TAKEOFF</div>
      <div className="hero-sign">
        <div className="hero-sign-line"><span>✎</span> a sketchbook journey in motion</div>
        <h1>Hi, I'm <em>Apoorv Gupta</em></h1>
        <p>Computer Science <span>•</span> AI/ML <span>•</span> Full Stack</p>
        <div className="hero-sign-foot"><span>the story starts here</span><i /></div>
      </div>
      <div className="takeoff-mark">
        <div className="takeoff-ring"><PlaneMark className="takeoff-svg" /></div>
        <span className="takeoff-arrow">follow the line <ArrowDown size={16} /></span>
      </div>
      <button className="scroll-instruction" onClick={() => goTo("about")}>
        <span>Scroll to begin the journey</span><MoveDown size={17} />
      </button>
      <div className="hero-corner-note">nothing here is perfectly straight<br /><span>that is the point →</span></div>
    </section>
  );
}

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const activeIndex = Math.min(sections.length - 1, WAYPOINTS.reduce((best, waypoint, index) => progress >= waypoint ? index : best, 0));
  const activeSection = sections[activeIndex];
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };
  const worldStyle = useMemo(() => ({ "--journey-progress": progress } as React.CSSProperties), [progress]);

  return (
    <div className="journey-shell" style={worldStyle}>
      <LandscapeLayer progress={progress} />
      <RouteSketch progress={progress} />
      <div className="fixed-route-copy"><span>FLYING THROUGH</span><strong>APOORV'S STORY</strong><i /></div>
      <PaperPlane progress={progress} />

      <header className="journey-header">
        <button className="brand-lockup" onClick={() => goTo("start")} aria-label="Return to start">
          <span className="brand-mark"><PlaneMark className="brand-svg" /><img className="brand-generated-mark" src={ROUTE_MARK_ASSET} alt="" /></span>
          <span><b>APOORV</b><small>sketchbook / 2026</small></span>
        </button>
        <div className="header-progress" aria-label={`${activeSection.label} landmark active`}>
          <span className="header-progress-line"><i style={{ width: `${progress * 100}%` }} /></span>
          <span>{activeSection.label}</span>
        </div>
        <button className="journey-menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="journey-nav">
          {menuOpen ? <X size={16} /> : <Map size={16} />} <span>JOURNEY</span>
        </button>
        {menuOpen && (
          <nav id="journey-nav" className="journey-nav" aria-label="Journey landmarks">
            <div className="nav-title"><span>ROUTE MAP</span><small>choose a landmark</small></div>
            <div className="nav-route-line" />
            {sections.map((section, index) => (
              <button className={index === activeIndex ? "active" : ""} key={section.id} onClick={() => goTo(section.id)}>
                <span className="nav-dot">{String(index).padStart(2, "0")}</span>
                <span><b>{section.label}</b><small>{section.eyebrow.split("/ ")[1]}</small></span>
                {index === activeIndex && <Compass size={14} />}
              </button>
            ))}
            <div className="nav-footer">the plane is here <span>↗</span></div>
          </nav>
        )}
      </header>

      <main>
        <Hero goTo={goTo} />

        <section id="about" className="scene-section landmark-section about-section" data-index="1">
          <Signpost number="01" label="ABOUT ME" note="information tower" />
          <div className="landmark-grid about-grid">
            <div className="landmark-illustration tower-illustration" aria-hidden="true">
              <div className="tower-cloud" />
              <div className="tower-roof" />
              <div className="tower-body"><span /><span /><span /><span /></div>
              <div className="tower-note">who is flying?<br /><b>→ Apoorv</b></div>
              <div className="tower-ground" />
            </div>
            <article className="paper-sheet about-sheet">
              <LandmarkHeading number="01" kicker="roadside information tower" title="About me" note="a few pages from the person behind the plane" />
              <p>Computer Science undergraduate at <strong>VIT Bhopal</strong> (CGPA <strong>8.69</strong>) with hands-on experience building AI/ML systems and full-stack web applications.</p>
              <p>Developed production-grade projects including an AI-powered eye care PWA and a fine-tuned LLM-based medical recommendation system—demonstrating expertise in TensorFlow, PyTorch, FastAPI, and RAG pipelines.</p>
              <p>National hackathon finalist: <mark>Top 1.4% out of 2,096 teams</mark>, with a track record of applying research-driven approaches to solve real-world healthcare challenges.</p>
              <div className="ink-tags"><span>AI/ML systems</span><span>full-stack apps</span><span>healthcare research</span></div>
              <div className="sheet-signature">Apoorv's note <span>✎</span></div>
            </article>
          </div>
        </section>

        <section id="education" className="scene-section landmark-section education-section" data-index="2">
          <Signpost number="02" label="EDUCATION" note="the schoolhouse" />
          <div className="landmark-grid education-grid">
            <article className="paper-sheet school-sheet">
              <LandmarkHeading number="02" kicker="a visual timeline" title="Where I learned" note="three stops, one steadily lengthening route" />
              <div className="education-timeline">
                {education.map((item, index) => (
                  <div className="education-stop" key={item.school}>
                    <div className="stop-pin"><span>{index + 1}</span></div>
                    <div className="stop-copy"><h3>{item.school}</h3><p>{item.place}</p><small>{item.detail}</small></div>
                    <strong className="stop-score">{item.score}</strong>
                  </div>
                ))}
              </div>
              <div className="school-pencil">drawn in the margins <span>→</span></div>
            </article>
            <div className="landmark-illustration school-illustration" aria-hidden="true">
              <div className="school-sun" />
              <div className="school-building"><div className="school-roof" /><div className="school-door" /><div className="school-window w1" /><div className="school-window w2" /><div className="school-window w3" /></div>
              <div className="school-flag">learn</div>
              <div className="school-tree tree-one" /><div className="school-tree tree-two" />
              <div className="school-ground" />
            </div>
          </div>
        </section>

        <section id="skills" className="scene-section landmark-section skills-section" data-index="3">
          <Signpost number="03" label="MY TOOLKIT" note="inventor's workshop" />
          <div className="workshop-frame">
            <div className="workshop-art" aria-hidden="true"><span className="art-label">the shed is open</span></div>
            <article className="workshop-sheet paper-sheet">
              <LandmarkHeading number="03" kicker="things on the workbench" title="My toolkit" note="no meters, no rankings—just tools I reach for" />
              <div className="skill-list">
                {Object.entries(skills).map(([group, items], index) => (
                  <div className={`skill-row row-${index}`} key={group}><h3>{group}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></div>
                ))}
              </div>
              <div className="workshop-doodle">✎ <span>keep tinkering</span> <ArrowUpRight size={14} /></div>
            </article>
          </div>
        </section>

        <section id="projects" className="scene-section landmark-section projects-section" data-index="4">
          <Signpost number="04" label="PROJECTS" note="the research outpost" />
          <div className="projects-intro"><p className="section-kicker">the workbench gets bigger here</p><h2>Two builds worth landing for.</h2><p>Research-driven systems, drawn as places rather than listed as cards.</p><div className="campus-banner"><span>RESEARCH CAMPUS</span><i /> <b>02 locations / 01 flight between them</b></div></div>
          <div className="project-landmark optanex-landmark">
            <div className="project-art lab-art"><span className="project-stamp">PROJECT 01</span><span className="lab-label">OPTANEX</span></div>
            <article className="project-paper paper-sheet">
              <div className="project-paper-top"><span>01 / roadside building</span><b>OPTANEX</b></div>
              <h3>AI-Powered Eye Care <em>Progressive Web App</em></h3>
              <div className="project-modules"><span>OptiScreen</span><span>PrescriptTracker</span><span>GlareGuard</span><span>Power Tracker</span><span>Medical Record Vault</span></div>
              <ul className="hand-list"><li>Full-stack PWA built with <strong>React.js, FastAPI, Supabase</strong>—5 modules, compliant with <strong>DPDP 2023</strong>.</li><li>Ensemble of <strong>EfficientNetB0, CNN, Swin Transformer</strong> detecting Diabetic Retinopathy and AMD from fundus images, with <strong>Grad-CAM</strong> explainability.</li><li>Digital Snellen Chart and Pseudo-Ishihara Test remove the need for costly proprietary fundus cameras and clinical software.</li><li>GlareGuard adds automated 20-minute blue-light break reminders; PrescriptTracker syncs in real time with Supabase.</li></ul>
              <div className="diagram-strip"><span>image</span><i>→</i><span>ensemble</span><i>→</i><span>explanation</span></div>
            </article>
          </div>
          <div className="project-divider"><span>the plane crosses the lab</span><div /></div>
          <div className="project-landmark diabot-landmark">
            <article className="project-paper paper-sheet">
              <div className="project-paper-top"><span>02 / research outpost</span><b>DIA-BOT</b></div>
              <h3>LLM-Based Diabetes <em>Recommender System</em></h3>
              <div className="project-modules rust-modules"><span>Mistral 7B</span><span>QLoRA · 4-bit</span><span>RAG</span><span>FAISS / Chroma</span><span>Standards of Care 2024</span></div>
              <ul className="hand-list"><li>Fine-tuned <strong>Mistral 7B</strong> with <strong>QLoRA (4-bit)</strong>, cutting memory footprint by approximately 60% for deployment on 8GB VRAM hardware.</li><li>Built a RAG pipeline over the 281-page <i>Standards of Care 2024</i> PDF, chunked into 500+ indexed segments for sub-second retrieval.</li><li>Generated a privacy-safe synthetic dataset of 100+ patient records using <strong>Faker</strong>, ensuring HIPAA / ethical compliance.</li><li>Designed the end-to-end NLP pipeline: parsing → chunking → retrieval → context-augmented generation.</li></ul>
              <div className="diagram-strip rust-diagram"><span>question</span><i>→</i><span>retrieval</span><i>→</i><span>grounded answer</span></div>
            </article>
            <div className="research-drawing" aria-hidden="true"><div className="brain-orbit" /><div className="node n1" /><div className="node n2" /><div className="node n3" /><div className="node n4" /><span>context in / care out</span></div>
          </div>
        </section>

        <section id="achievements" className="scene-section landmark-section achievements-section" data-index="5">
          <Signpost number="05" label="ACHIEVEMENTS" note="the bulletin board" />
          <div className="bulletin-board">
            <LandmarkHeading number="05" kicker="found pinned to the board" title="Achievements" note="results from routes already traveled" />
            <div className="achievement-feature"><span className="pin pin-rust" /><div><strong>HackWiise Hackathon</strong><small>National Finalist</small></div><b>Top 30 / 2,096 teams</b><em>Top 1.4% · Jan 2026</em></div>
            <div className="achievement-list"><div><span>NEST (National Entrance Screening Test) 2024</span><b>Rank 1334</b></div><div><span>NFSU (National Forensic Science University) 2024</span><b>Rank 81</b></div><div><span>IAT (IISER Aptitude Test) 2024</span><b>Rank 659</b></div><div><span>NPTEL Elite — Cloud Computing (IIT Kharagpur)</span><b>76% · Jan 2025</b></div><div><span>NPTEL Elite — Market Analytics (IIT Kharagpur)</span><b>87% · May 2026</b></div></div>
            <div className="board-scribble">keep this pin <span>↗</span></div>
          </div>
        </section>

        <section id="certifications" className="scene-section landmark-section certifications-section" data-index="6">
          <Signpost number="06" label="CERTIFICATIONS" note="the pinned wall" />
          <div className="certificate-wall">
            <div className="wall-heading"><LandmarkHeading number="06" kicker="eight small receipts of curiosity" title="Certifications" note="papers collected along the road" /></div>
            <div className="certificate-grid">{certifications.map(([title, meta], index) => <div className={`certificate certificate-${index + 1}`} key={title}><span className="tape" /><span className="cert-mark">✦</span><h3>{title}</h3><p>{meta}</p><small>verified note / {String(index + 1).padStart(2, "0")}</small></div>)}</div>
            <div className="wall-arrow">there is always another page <ArrowDown size={14} /></div>
          </div>
        </section>

        <section id="contact" className="scene-section landmark-section contact-section" data-index="7">
          <Signpost number="07" label="LET'S CONNECT" note="end of the road" />
          <div className="contact-destination">
            <div className="mailbox-scene" aria-hidden="true"><div className="mailbox-post" /><div className="mailbox"><div className="mailbox-flag" /><div className="mailbox-door" /></div><div className="mailbox-note">you made it<br /><b>✎ hello?</b></div></div>
            <article className="paper-sheet contact-sheet"><LandmarkHeading number="07" kicker="the final destination" title="Let's connect" note="thanks for flying through the story" /><p>If something here catches your eye, send a note. The mailbox is open.</p><div className="contact-links"><a href="mailto:ag5098015@gmail.com"><Mail size={16} /> Email <ArrowUpRight size={14} /></a><a href="https://github.com/APOORV-sys" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a><a href="#contact" onClick={(event) => event.preventDefault()} aria-label="LinkedIn profile link not provided"><Linkedin size={16} /> LinkedIn <span className="not-linked">profile link not included</span></a></div><div className="contact-phone"><span>or call</span> +91-8081778068</div><div className="landing-line"><Send size={14} /> the paper plane lands here</div></article>
          </div>
        </section>
      </main>

      <footer className="journey-footer"><div className="footer-mark"><PlaneMark className="footer-svg" /><img className="footer-generated-mark" src={ROUTE_MARK_ASSET} alt="" /></div><p>drawn in pencil, rendered in a browser<br /><span>Apoorv Gupta · 2026</span></p><button onClick={() => goTo("start")}><ArrowUp size={14} /> fly again</button></footer>
    </div>
  );
}
