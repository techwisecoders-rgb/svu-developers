import Link from "next/link";
import { ArrowDownRight, ArrowRight, Building2, CheckCircle2, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { PropertyCard } from "@/components/property-card";
import { properties, projects, localities } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ParallaxHeroImage } from "@/components/scroll-effects";

export default function Home() {
  return <>
    <section className="hero">
      <ParallaxHeroImage />
      <div className="hero-shade" />
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="container hero-content">
        <div className="eyebrow light"><span className="eyebrow-line" /> SPACES FOR THE LIFE YOU IMAGINE</div>
        <h1>Find a place to<br/><em>build your future.</em></h1>
        <p className="hero-copy">Thoughtfully considered spaces, clearer choices, and a team ready to help you take the next step.</p>
        <div className="hero-actions"><Link className="button button-gold" href="/properties">Explore properties <ArrowRight size={17}/></Link><Link className="button button-glass" href="/projects">Discover our projects</Link></div>
        <div className="hero-foot"><span><span className="pulse-dot"/> Property discovery, made more human</span><span>SVU DEVELOPERS PRIVATE LIMITED</span></div>
      </div>
      <div className="hero-vertical">DESIGNED AROUND YOUR NEXT CHAPTER</div>
    </section>

    <section className="search-wrap container">
      <form className="search-panel" action="/properties">
        <div className="search-intro"><span className="eyebrow">START YOUR SEARCH</span><strong>What feels like home?</strong></div>
        <label>Looking for<select name="type" defaultValue="All"><option>All</option><option>Apartment</option><option>Villa</option><option>Plot</option><option>Commercial</option></select></label>
        <label>Location<input name="location" placeholder="City or locality"/></label>
        <label>Budget<select name="budget" defaultValue=""><option value="">Any budget</option><option value="under50">Under ₹50 lakh</option><option value="50to100">₹50 lakh – ₹1 crore</option><option value="over100">Above ₹1 crore</option></select></label>
        <button className="button button-dark" type="submit">Find properties <ArrowRight size={16}/></button>
      </form>
    </section>

    <section className="section container">
      <Reveal><div className="section-head"><div><span className="eyebrow">A MORE CONSIDERED SEARCH</span><h2>Room for your <em>next chapter.</em></h2></div><Link className="text-link" href="/properties">View all properties <ArrowRight size={16}/></Link></div></Reveal>
      <div className="property-grid">{properties.slice(0,3).map((p,i)=><Reveal key={p.slug} delay={i*.08}><PropertyCard property={p}/></Reveal>)}</div>
      <p className="demo-note">Illustrative demo listings for website preview. These are not verified SVU inventory or offers.</p>
    </section>

    <section className="dark-section">
      <div className="container split-section">
        <Reveal><div className="editorial-image"><div className="image-label"><span>01 / THE SVU APPROACH</span><span>Thoughtful by design</span></div></div></Reveal>
        <Reveal delay={.12}><div className="editorial-copy"><span className="eyebrow light">BUILT AROUND WHAT MATTERS</span><h2>Good spaces begin<br/>with <em>good thinking.</em></h2><p>Finding a property is about more than square footage. It is about the life you want to create, the place you want to belong, and the confidence to make a considered decision.</p><p>SVU Developers Private Limited brings a people-first perspective to property discovery, with an emphasis on clear information and helpful conversations.</p><Link href="/about" className="button button-outline-light">Get to know SVU <ArrowRight size={16}/></Link></div></Reveal>
      </div>
    </section>

    <section className="cinematic-section">
      <div className="container cinematic-grid">
        <Reveal><div className="cinematic-sticky"><div className="cinematic-photo" role="img" aria-label="Sunlit contemporary residential architecture"><span>SVU / 02</span><div className="cinematic-photo-caption">A more considered<br/><em>way home.</em></div></div><div className="cinematic-photo-foot"><span>THOUGHTFUL SPACES. CLEARER CHOICES.</span><span>SCROLL TO DISCOVER ↓</span></div></div></Reveal>
        <div className="cinematic-story">
          <Reveal><article className="story-beat"><span className="story-index">01 — DISCOVER</span><h2>Begin with<br/><em>possibility.</em></h2><p>Explore places and project information through a calmer, clearer property discovery experience.</p><Link className="text-link" href="/properties">Browse properties <ArrowRight size={16}/></Link></article></Reveal>
          <Reveal delay={.08}><article className="story-beat"><span className="story-index">02 — UNDERSTAND</span><h2>Details that<br/><em>matter.</em></h2><p>Compare the basics, understand the location, and prepare the right questions before making a decision.</p><Link className="text-link" href="/buyers-guide">Read the buyer guide <ArrowRight size={16}/></Link></article></Reveal>
          <Reveal delay={.16}><article className="story-beat"><span className="story-index">03 — CONNECT</span><h2>Your next step,<br/><em>made human.</em></h2><p>When something feels right, reach out to start a conversation about your requirements.</p><Link className="text-link" href="/contact">Talk to SVU <ArrowRight size={16}/></Link></article></Reveal>
        </div>
      </div>
    </section>

    <section className="section container">
      <Reveal><div className="section-head"><div><span className="eyebrow">EXPLORE WITH PURPOSE</span><h2>Find your kind of <em>place.</em></h2></div><Link className="text-link" href="/locations">Explore localities <ArrowRight size={16}/></Link></div></Reveal>
      <div className="locality-grid">{localities.map((l,i)=><Link href={`/properties?location=${encodeURIComponent(l.name)}`} className={`locality-card locality-${i+1}`} key={l.name} style={{backgroundImage:`linear-gradient(0deg,rgba(9,18,30,.78),transparent 75%),url("${l.image}")`}}><span>{l.tag}</span><strong>{l.name}</strong><small>Explore properties <ArrowDownRight size={14}/></small></Link>)}</div>
    </section>

    <section className="project-band">
      <div className="container project-band-inner"><div><span className="eyebrow light">OUR DEVELOPMENTS</span><h2>Spaces with a sense<br/>of <em>possibility.</em></h2><p>Discover project information and enquire with our team.</p><Link href="/projects" className="button button-gold">Explore projects <ArrowRight size={16}/></Link></div><div className="project-mini-grid">{projects.slice(0,2).map((p,i)=><Link className="project-mini" href={`/projects/${p.slug}`} key={p.slug}><div style={{backgroundImage:`url("${p.image}")`}}/><span>0{i+1} / PROJECT PREVIEW</span><strong>{p.name}</strong><small>{p.location}</small></Link>)}</div></div>
    </section>

    <section className="section container principles">
      <Reveal><div className="section-head"><div><span className="eyebrow">THE SVU DIFFERENCE</span><h2>Confidence at every <em>step.</em></h2></div></div></Reveal>
      <div className="principle-grid">
        <Reveal><article><div className="principle-icon"><Compass/></div><h3>Clear direction</h3><p>Helpful information that makes it easier to compare options and ask the right questions.</p></article></Reveal>
        <Reveal delay={.08}><article><div className="principle-icon"><ShieldCheck/></div><h3>Transparency first</h3><p>We encourage customers to review property details and independently verify documentation.</p></article></Reveal>
        <Reveal delay={.16}><article><div className="principle-icon"><Sparkles/></div><h3>People over process</h3><p>A more thoughtful enquiry experience, with room for your priorities and timeline.</p></article></Reveal>
      </div>
    </section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow light">YOUR NEXT STEP STARTS HERE</span><h2>Let’s find what<br/><em>fits your future.</em></h2></div><Link href="/contact" className="button button-gold">Talk to our team <ArrowRight size={16}/></Link></div></section>
  </>;
}