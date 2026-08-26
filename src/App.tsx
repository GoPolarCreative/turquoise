import { FormEvent, ReactNode, useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, Award, Bath, Check, ChevronDown, Clock3, Droplets, Flame,
  Gauge, Home as HomeIcon, Mail, MapPin, Menu, Phone, ShieldCheck, Sparkles, Star,
  Thermometer, Wrench, X, Zap,
} from 'lucide-react';
import { serviceContent } from '@/serviceContent';
import { locationContent } from '@/locationContent';

const logo = '/images/image0.png';
const phone = '0491 241 255';
const phoneHref = 'tel:0491241255';
const email = 'turquoiseplumbing2024@gmail.com';
const reviewUrl = 'https://g.page/r/CZHskEAZFEa_EAE/review';
const formKey = 'bdc608c0-291a-4bd8-a02c-f25056b2eb89';

const services = [
  { slug: 'emergency-plumbing', name: '24/7 Emergency Plumbing', short: 'Fast, calm help when a plumbing problem cannot wait.', icon: Zap, detail: 'Burst pipes, overflowing fixtures, major leaks and urgent water loss need a plumber who knows how to make a home safe first. Turquoise Plumbing responds day or night across the Illawarra with practical advice over the phone, rapid arrival and a clear plan before work begins.', problems: ['Water pouring from a burst pipe', 'Overflowing toilets or drains', 'No water throughout the home', 'Urgent gas or hot water concerns'], cost: 'The cost depends on the time, access and complexity of the emergency. We explain the call-out and likely repair before proceeding.' },
  { slug: 'residential-plumbing', name: 'Residential Plumbing', short: 'Thoughtful plumbing care for the place you call home.', icon: HomeIcon, detail: 'From a dripping tap to a full pipe replacement, our residential plumbing service keeps everyday water systems working cleanly and reliably. We protect floors, walls and finishes while finding the real cause of the issue, not just covering up the symptom.', problems: ['Recurring leaks and damp patches', 'Low water pressure', 'Noisy or slow fixtures', 'Plumbing maintenance before a sale'], cost: 'Pricing is shaped by the diagnosis, parts, access and time required. You receive an upfront price with no surprises.' },
  { slug: 'hot-water', name: 'Hot Water Repairs & Installations', short: 'Reliable hot water, restored without the runaround.', icon: Thermometer, detail: 'A cold shower is rarely convenient. We repair and replace electric, gas and instantaneous hot water systems, assess leaks and pressure issues, and help you choose a practical replacement for your household size and budget.', problems: ['Water turning cold too quickly', 'Rusty or cloudy hot water', 'A leaking cylinder or relief valve', 'Strange sounds from the system'], cost: 'The final cost depends on the fault, system type, replacement capacity and any required compliance work.' },
  { slug: 'gas-fitting', name: 'Gas Fitting & Gas Repairs', short: 'Safe, compliant gas work for kitchens, laundries and homes.', icon: Flame, detail: 'Gas work should never be a guess. Our licensed gas fitting service covers repairs, appliance connections, leak investigations and new gas points, with careful testing at every stage.', problems: ['Gas smell or suspected leak', 'Appliance not lighting correctly', 'New cooktop or heater connection', 'Old gas lines needing attention'], cost: 'We consider the appliance, pipe run, access and testing requirements, then provide a clear quote.' },
  { slug: 'bathroom-renovations', name: 'Bathroom Renovations', short: 'Beautiful bathroom plumbing, planned properly from the start.', icon: Bath, detail: 'Great bathroom renovations begin behind the tiles. We coordinate rough-ins, waste points, fixtures, waterproofing interfaces and final fit-off so your new bathroom works as beautifully as it looks.', problems: ['Planning a bathroom renovation', 'Moving a toilet, basin or shower', 'Adding an ensuite', 'Replacing outdated plumbing'], cost: 'Renovation pricing is based on the design, number of fixtures, access and coordination with other trades.' },
  { slug: 'blocked-drains', name: 'Drain Cleaning & Blocked Drains', short: 'Get water moving again and find out why it stopped.', icon: Droplets, detail: 'A blocked drain is often a warning from deeper in the system. We clear sinks, showers, toilets and sewer lines, then look for grease, roots, collapsed sections or recurring damage that could cause the next blockage.', problems: ['Gurgling drains', 'Water pooling around floor wastes', 'Repeated toilet blockages', 'Slow sinks and showers'], cost: 'The price depends on the location of the blockage, equipment needed and whether a damaged section needs repair.' },
  { slug: 'renovation-plumbing', name: 'Renovation Plumbing & New Installations', short: 'Plumbing that is ready for the way your home will be used.', icon: Wrench, detail: 'Whether you are adding a second bathroom, upgrading a kitchen or building new, we install the pipework and fixtures carefully from the plan through to final testing.', problems: ['New kitchen or laundry fit-out', 'Second bathroom planning', 'New appliance water points', 'Changing existing pipe locations'], cost: 'We quote from your plans, fixture schedule, access and the level of new pipework required.' },
  { slug: 'leak-detection', name: 'Pipe Repairs & Leak Detection', short: 'Find the leak, protect the property and repair it properly.', icon: Gauge, detail: 'Hidden leaks can waste water and quietly damage a home. We trace visible and concealed leaks, isolate the affected section and complete durable repairs with minimal disruption.', problems: ['Unexpectedly high water bills', 'Damp walls, ceilings or cabinetry', 'Water stains with no obvious source', 'A constantly running water meter'], cost: 'The cost reflects access, investigation time, repair materials and any making-good required.' },
  { slug: 'tap-fixture-installations', name: 'Tap, Sink & Fixture Installations', short: 'Small changes that make a home feel considered.', icon: Sparkles, detail: 'New tapware, sinks and fixtures should look right and perform properly. We install and test kitchen, bathroom and laundry fixtures, including replacements that need careful alignment with existing plumbing.', problems: ['Dripping or stiff tapware', 'Cracked sinks or basins', 'A kitchen or laundry refresh', 'Fixture upgrades before selling'], cost: 'We price around the fixture, existing connections, access and any adjustment to the surrounding pipework.' },
  { slug: 'appliance-installations', name: 'Appliance Installations', short: 'Water and waste connections handled with care.', icon: ShieldCheck, detail: 'Dishwashers, washing machines, fridges and other water-connected appliances need secure connections and sensible drainage. We install, test and check for leaks before leaving your home.', problems: ['New dishwasher delivery', 'Washing machine relocation', 'Fridge water connection', 'Old appliance isolation'], cost: 'Pricing depends on existing points, distance, access and whether new valves or waste connections are needed.' },
  { slug: 'water-filters', name: 'Water Filter Installations', short: 'Better tasting water with a clean, tidy installation.', icon: Droplets, detail: 'We install under-sink and appliance water filtration systems with neat connections, correct isolation and a final leak check. The result is a practical upgrade that fits your kitchen rather than competing with it.', problems: ['Planning an under-sink filter', 'Replacing an old filter system', 'Adding filtered fridge water', 'Leaks around filter housings'], cost: 'The quote considers the chosen system, cabinet access, water point location and any new fittings.' },
  { slug: 'toilet-repairs', name: 'Toilet Repairs & Installations', short: 'Quiet, efficient toilets without the constant running water.', icon: HomeIcon, detail: 'We repair running, leaking and poorly flushing toilets, replace worn components and install new pans and cisterns with attention to seals, levels and clean finishing.', problems: ['Toilet constantly running', 'Weak or incomplete flush', 'Leaks around the pan', 'Bathroom toilet replacement'], cost: 'Costs vary with the fault, toilet type, access and whether a replacement or new connection is needed.' },
  { slug: 'general-maintenance', name: 'General Plumbing Repairs & Maintenance', short: 'The dependable upkeep that prevents bigger plumbing bills.', icon: Wrench, detail: 'Small plumbing problems become expensive when left alone. We handle repairs, maintenance and practical checks throughout kitchens, bathrooms, laundries and outside areas, with honest advice about what can wait and what should not.', problems: ['A list of small plumbing jobs', 'Loose or leaking connections', 'Outdoor taps and hose points', 'Maintenance before moving in'], cost: 'We group jobs efficiently where possible and explain the parts, time and priority before work begins.' },
];

const locations = [
  { slug: 'shellharbour', name: 'Shellharbour', response: '15 to 20 minutes', style: 'Coastal family homes, renovated brick cottages and newer estates', focus: 'mixed-age homes, coastal wear and busy family bathrooms', landmark: 'Shellharbour Village, the waterfront and the quiet streets around Shell Cove', job: 'A family near Shellharbour Village had a recurring kitchen blockage. We cleared the line, found grease build-up in an older section and replaced the vulnerable connection so the problem stopped returning.', testimonial: 'Aytash was absolutely brilliant! I had a leak in my wall, not sure where it was coming from. He came out that day, was early and professional. Explained everything that needed to happen and was very thorough. Turned out it was from my in wall cistern (not installed properly by previous plumber) Aytash fixed it on the spot and went through everything step by step. Made sure it was working properly and left us with if anything happens to call him straight away! Would highly recommend. Amazing job! Thank you so much!' , nearby: 'Shell Cove, Oak Flats, Flinders' },
  { slug: 'wollongong', name: 'Wollongong', response: '25 to 30 minutes', style: 'older weatherboard cottages, apartment living and renovated terraces', focus: 'ageing connections, apartment fixtures and renovation plumbing', landmark: 'the Blue Mile, Crown Street and homes rising toward Mount Keira', job: 'A townhouse off Crown Street needed a new dishwasher point and a stubborn laundry waste corrected. The work was completed neatly without disturbing the finished joinery.', testimonial: 'Aytash was fantastic to deal with. He was reliable, friendly, and incredibly efficient. He quickly identified the problem and fixed it straight away. His pricing was also excellent, offering great value for the quality of service. I wouldn\'t hesitate to recommend Aytash to anyone looking for honest, professional, and reliable service.', nearby: 'Port Kembla, Dapto, Shellharbour' },
  { slug: 'albion-park', name: 'Albion Park', response: '10 to 15 minutes', style: 'established brick homes, family additions and newer subdivisions', focus: 'hot water changes, drainage and extra bathrooms for growing households', landmark: 'Tongarra Road, Macquarie Rivulet and the established streets near the village centre', job: 'A growing household near Tongarra Road needed a second bathroom roughed in during an extension. We planned the waste and water routes early so the new room felt like it had always been there.', testimonial: 'Highly recommend! They fixed a leak for me and also installed a new hot water system. The whole experience was easy from start to finish. They arrived on time, explained everything clearly, and the workmanship was excellent. Friendly, professional, and reliable, and they left everything clean and tidy when they were finished. Thanks again to the team for the fantastic service—I wouldn’t hesitate to use them again!', nearby: 'Dapto, Oak Flats, Shellharbour' },
  { slug: 'dapto', name: 'Dapto', response: '15 to 20 minutes', style: 'older brick homes, post-war housing and active renovation projects', focus: 'ageing pipework, blocked drains, tree roots and hot water replacements', landmark: 'the Dapto Mall precinct, Bong Bong Road and the foothills around Lake Illawarra', job: 'A homeowner near Bong Bong Road was dealing with slow drains and wet lawn patches. We traced tree root intrusion in the older sewer line and completed a targeted repair rather than repeated temporary clears.', testimonial: '“A genuinely honest local plumber. They fixed the cause, not just the symptom.”', nearby: 'Albion Park, Wollongong, Port Kembla' },
  { slug: 'warilla', name: 'Warilla', response: '10 to 15 minutes', style: 'classic coastal brick homes, low-set cottages and older family bathrooms', focus: 'ageing pipework, blocked drains, tree roots and hot water replacements', landmark: 'Warilla Beach, Shellharbour Road and the streets around the lagoon', job: 'An older home near the lagoon had a failing hot water system and a leaking relief valve. We replaced the system, checked the incoming pressure and left the service area clean.', testimonial: '“Fast response, fair price and a hot shower again the same day.”', nearby: 'Shellharbour, Oak Flats, Shell Cove' },
  { slug: 'kiama', name: 'Kiama', response: '25 to 30 minutes', style: 'weatherboard cottages, coastal renovations and homes on sloping blocks', focus: 'coastal corrosion, renovation pipework and hard-to-access drainage', landmark: 'Kiama Blowhole, Terralong Street and the lanes climbing back from the harbour', job: 'A renovated cottage close to Terralong Street needed a concealed leak investigated behind a new vanity. We isolated the issue with minimal disruption and replaced the connection cleanly.', testimonial: '“Thoughtful, careful and easy to deal with. We would call Turquoise again.”', nearby: 'Shellharbour, Albion Park, Flinders' },
  { slug: 'oak-flats', name: 'Oak Flats', response: '10 to 15 minutes', style: 'post-war brick homes, low-set family houses and later additions', focus: 'ageing pipework, blocked drains, tree roots and hot water replacements', landmark: 'Oak Flats station, the lake foreshore and the streets between the village and the water', job: 'A home near the foreshore had a repeated toilet blockage that had been cleared several times. Inspection found roots entering an older drain junction, which we repaired at the source.', testimonial: '“They listened, explained our options and left everything cleaner than they found it.”', nearby: 'Warilla, Shellharbour, Albion Park' },
  { slug: 'shell-cove', name: 'Shell Cove', response: '10 to 15 minutes', style: 'newer builds, architect-designed homes and active coastal developments', focus: 'renovations, new installations, gas fit-offs and second bathrooms', landmark: 'The Waterfront, Shell Cove Marina and the new streets around the marina precinct', job: 'A new build near The Waterfront needed a gas cooktop fit-off and final bathroom fixture installation. We worked through the builder handover list and tested every connection before sign-off.', testimonial: '“Excellent communication and a very polished result on our new home.”', nearby: 'Shellharbour, Flinders, Warilla' },
  { slug: 'flinders', name: 'Flinders', response: '10 to 15 minutes', style: 'newer family homes, larger floorplans and carefully finished interiors', focus: 'renovations, new installations, gas fit-offs and second bathrooms', landmark: 'the green corridors around Flinders, Shell Cove Road and the growing residential streets', job: 'A Flinders family converted an underused room into an ensuite. We planned the new waste, hot and cold lines around the existing slab and coordinated the final fit-off with the renovation team.', testimonial: '“A smooth experience from planning through to the final test. Highly recommended.”', nearby: 'Shell Cove, Shellharbour, Albion Park' },
  { slug: 'port-kembla', name: 'Port Kembla', response: '25 to 30 minutes', style: 'older cottages, industrial-era homes and practical family renovations', focus: 'ageing pipework, blocked drains, tree roots and hot water replacements', landmark: 'Five Islands Bridge, Wentworth Street and the harbour streets below the escarpment', job: 'An older cottage near Wentworth Street had a burst laundry pipe hidden behind cabinetry. We isolated the line, replaced the damaged section and upgraded the vulnerable valve while the area was open.', testimonial: '“Quick to respond, respectful in our home and completely upfront about the repair.”', nearby: 'Wollongong, Dapto, Warilla' },
];

const faqs = [
  ['Do you offer emergency plumbing?', 'Yes. Turquoise Plumbing is available 24/7 for urgent plumbing problems, including burst pipes, overflowing fixtures, serious leaks and hot water emergencies.'],
  ['Do you provide free quotes?', 'Yes. We offer free quotes for planned work and explain the likely cost before starting repairs.'],
  ['How quickly can you arrive?', 'We are based in Barrack Heights and aim for same-day service wherever possible. Emergency response times vary by location, traffic and the nature of the call.'],
  ['What areas do you cover?', 'We cover a 40 kilometre radius from Barrack Heights across Shellharbour, Wollongong and surrounding Illawarra suburbs.'],
  ['Will you leave my home tidy?', 'Yes. We take care around your home, protect nearby finishes and clean the work area before we leave.'],
];

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const set = (name: string, content: string) => { let tag = document.querySelector(`meta[name="${name}"]`); if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', name); document.head.appendChild(tag); } tag.setAttribute('content', content); };
    set('description', description);
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link'); canonical.setAttribute('rel', 'canonical'); canonical.setAttribute('href', window.location.href); document.head.appendChild(canonical);
    set('og:title', title); set('og:description', description); set('og:image', logo); set('twitter:card', 'summary_large_image');
  }, [title, description]);
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  const closeAll = () => { setOpen(false); setServicesOpen(false); setAreasOpen(false); };
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="shell header-inner">
    <a className="brand" href="/" onClick={scrollToTop}><img src={logo} alt="Turquoise Plumbing logo" /><span className="brand-name">TURQUOISE PLUMBING</span></a>
    <nav className={open ? 'nav-open' : ''}>
      <a href="/" onClick={() => { closeAll(); scrollToTop(); }}>Home</a>
      <div className="nav-dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
        <button className="nav-trigger" onClick={() => setServicesOpen(!servicesOpen)}>Services <ChevronDown size={15} className={`nav-chevron ${servicesOpen ? 'open' : ''}`} /></button>
        <div className={`nav-menu ${servicesOpen ? 'open' : ''}`}>
          <a className="nav-menu-heading" href="/services" onClick={() => closeAll()}>All services</a>
          {services.map(service => <a key={service.slug} href={`/services/${service.slug}`} onClick={() => closeAll()}>{service.name}</a>)}
        </div>
      </div>
      <div className="nav-dropdown" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
        <button className="nav-trigger" onClick={() => setAreasOpen(!areasOpen)}>Service areas <ChevronDown size={15} className={`nav-chevron ${areasOpen ? 'open' : ''}`} /></button>
        <div className={`nav-menu ${areasOpen ? 'open' : ''}`}>
          <a className="nav-menu-heading" href="/service-areas" onClick={() => closeAll()}>All service areas</a>
          {locations.map(location => <a key={location.slug} href={`/locations/${location.slug}`} onClick={() => closeAll()}>{location.name}</a>)}
        </div>
      </div>
      <a href="/about" onClick={() => closeAll()}>About</a>
      <a href="/contact" onClick={() => closeAll()}>Contact</a>
    </nav>
    <div className="header-actions"><a className="header-phone" href={phoneHref}><Phone size={16} /> {phone}</a><a className="button button-small" href="/contact">Get a free quote <ArrowRight size={16} /></a></div>
    <button className="menu-button" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>;
}

function Form({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const form = event.currentTarget; const data = new FormData(form); data.append('access_key', formKey); data.append('subject', 'New Turquoise Plumbing enquiry'); fetch('https://api.web3forms.com/submit', { method: 'POST', body: data }).then(() => setSent(true)).catch(() => setSent(true)); };
  if (sent) return <div className="form-success"><Check size={28} /><h3>Thanks, we have your enquiry.</h3><p>We will be in touch shortly. For urgent plumbing help, please call {phone}.</p><a className="button" href={phoneHref}>Call now <Phone size={16} /></a></div>;
  return <form className={`contact-form ${compact ? 'compact' : ''}`} onSubmit={submit}><div className="form-heading"><span className="eyebrow">Start a conversation</span><h2>Tell us what is happening.</h2><p>We will get back to you with a clear next step and no pressure.</p></div><div className="form-grid"><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" required type="tel" placeholder="0491 241 255" /></label></div><label>Email<input name="email" required type="email" placeholder="you@example.com" /></label><label>What do you need help with?<textarea name="message" required rows={compact ? 3 : 4} placeholder="A few details about the job" /></label><button className="button" type="submit">Send enquiry <ArrowRight size={17} /></button><small>By submitting, you agree to be contacted about your enquiry.</small></form>;
}

function Breadcrumbs({ current }: { current: string }) { return <div className="shell breadcrumbs"><a href="/">Home</a><span>/</span><span>{current}</span></div>; }
function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-intro"><div className="shell"><Reveal><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></Reveal></div></section>; }
function CTA({ title = 'Need a plumber you can count on?', text = 'Tell us what is happening and we will help you find the right next step.' }) { return <section className="cta-band"><div className="shell cta-inner"><div><span className="eyebrow eyebrow-light">Here when you need us</span><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><a className="button button-light" href={phoneHref}><Phone size={18} /> Call {phone}</a><a className="text-link light" href="/contact">Send an enquiry <ArrowRight size={16} /></a></div></div></section>; }
function Footer() { return <footer><div className="shell footer-grid"><div className="footer-brand"><a className="brand" href="/"><img src={logo} alt="Turquoise Plumbing logo" /><span className="brand-name">TURQUOISE PLUMBING</span></a><p>Honest, reliable plumbing for homes across the Illawarra. Local care, quality workmanship and no surprises.</p><a className="review-link" href={reviewUrl} target="_blank" rel="noreferrer"><Star size={15} fill="currentColor" /> Review us on Google</a></div><div><h4>Explore</h4><a href="/about">About us</a><a href="/service-areas">Service areas</a><a href="/contact">Contact</a><a href="/#faq">FAQs</a></div><div><h4>Popular services</h4>{services.slice(0, 5).map(service => <a key={service.slug} href={`/services/${service.slug}`}>{service.name}</a>)}</div><div><h4>Contact</h4><a href={phoneHref}><Phone size={14} /> {phone}</a><a href={`mailto:${email}`}><Mail size={14} /> {email}</a><span><MapPin size={14} /> Barrack Heights, NSW</span><span><Clock3 size={14} /> 24/7 emergency service</span></div></div><div className="shell footer-bottom"><span>© 2026 Turquoise Plumbing Pty Ltd. All rights reserved.</span><span>Licence details available on request.</span><a href="https://www.itscold.com.au" target="_blank" rel="noreferrer">Website by Go Polar</a></div></footer>; }
function Layout({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /><a className="mobile-call" href={phoneHref}><Phone size={18} /> Emergency call</a></>; }

function Hero() { return <section className="hero"><div className="hero-glow" /><div className="shell hero-grid"><Reveal className="hero-copy"><img className="hero-brand-mark" src={logo} alt="" /><span className="eyebrow">Local plumbers. Serious about doing it right.</span><h1>Water, gas and plumbing handled with <em>care.</em></h1><p>Turquoise Plumbing is your family-owned local team for honest advice, quality workmanship and reliable help across the Illawarra.</p><div className="hero-actions"><a className="button" href={phoneHref}><Phone size={17} /> Call {phone}</a><a className="text-link" href="#services">Explore services <ArrowRight size={16} /></a></div><div className="trust-mini"><span><ShieldCheck size={17} /> Licensed & insured</span><span><Star size={17} fill="currentColor" /> 5-star care</span><span><Clock3 size={17} /> 24/7 response</span></div></Reveal><Reveal className="hero-form"><Form /></Reveal></div></section>; }
function TrustBar() { return <section className="trust-bar"><div className="shell trust-grid"><div><ShieldCheck /><span><b>Licensed & insured</b><small>Work you can trust</small></span></div><div><Clock3 /><span><b>24/7 emergency service</b><small>Here when you need us</small></span></div><div><Award /><span><b>Free quotes</b><small>Clear before we start</small></span></div><div><Check /><span><b>Upfront pricing</b><small>No surprises</small></span></div></div></section>; }
function ServicesGrid({ limit }: { limit?: number }) { const shown = limit ? services.slice(0, limit) : services; return <div className="service-grid">{shown.map((service, index) => { const Icon = service.icon; return <Reveal key={service.slug} className="service-card" ><div className="card-number">0{index + 1}</div><div className="icon-box"><Icon size={23} /></div><h3>{service.name}</h3><p>{service.short}</p><a className="card-link" href={`/services/${service.slug}`}>View service <ArrowRight size={15} /></a></Reveal>; })}</div>; }
function Stats() { const stats = [['1200+', 'jobs completed'], ['30 min', 'average response'], ['5.0', 'Google rating'], ['24/7', 'availability']]; return <section className="stats-band"><div className="shell stats-grid">{stats.map(([number, label]) => <div key={label} className="stat"><strong>{number}</strong><span>{label}</span></div>)}</div></section>; }
function AreasPreview() { return <section className="section area-section"><div className="shell split-heading"><div><span className="eyebrow">Close to home</span><h2>Good plumbing travels<br /><em>locally.</em></h2></div><div><p>Based in Barrack Heights, we cover a 40 kilometre radius across the Illawarra. That means a local response, a familiar team and someone who understands the homes in your area.</p><a className="text-link" href="/service-areas">See all service areas <ArrowRight size={16} /></a></div></div><div className="shell area-layout"><div className="coverage-card"><div className="coverage-ring ring-one" /><div className="coverage-ring ring-two" /><div className="coverage-center"><MapPin size={22} /><b>Barrack Heights</b><small>40km local radius</small></div></div><div className="area-list">{locations.map((location, i) => <a href={`/locations/${location.slug}`} key={location.slug}><span>0{i + 1}</span><b>{location.name}</b><ArrowRight size={16} /></a>)}</div></div></section>; }
function Process() { return <section className="section process-section"><div className="shell split-heading"><div><span className="eyebrow">The Turquoise standard</span><h2>A better experience<br /><em>from the first call.</em></h2></div><p>Good service is more than a quick fix. We bring clear communication, careful work and respect for your home to every job.</p></div><div className="shell process-grid">{[['01', 'Call or enquire', 'Tell us what is happening. We will ask the right questions and help you understand the next step.'], ['02', 'We arrive prepared', 'We show up ready to diagnose the problem and protect the surrounding space.'], ['03', 'A clear plan', 'You get practical options and upfront pricing before work begins.'], ['04', 'Job complete', 'We test the repair, tidy the area and make sure you are comfortable with the result.']].map(([number, title, text]) => <Reveal className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>; }
function Testimonials() { return <section className="section testimonials-section"><div className="shell"><div className="section-heading centered"><span className="eyebrow">Kind words from local homes</span><h2>Good work gets <em>noticed.</em></h2></div><div className="testimonial-grid">{locations.slice(0, 3).map((location) => <Reveal className="testimonial" key={location.slug}><div className="stars">★★★★★</div><p>{location.testimonial}</p><div className="testimonial-meta"><div className="avatar">{location.name[0]}</div><span><b>Local customer</b><small>{location.name}, NSW</small></span></div></Reveal>)}</div><div className="center-link"><a className="text-link" href={reviewUrl} target="_blank" rel="noreferrer">Read our Google reviews <ArrowRight size={16} /></a></div></div></section>; }
function FAQ({ items = faqs }: { items?: string[][] }) { const [active, setActive] = useState<number | null>(null); return <div className="faq-list">{items.map(([question, answer], index) => <div className={`faq-item ${active === index ? 'active' : ''}`} key={question}><button onClick={() => setActive(active === index ? null : index)}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div>; }
function Home() { usePageMeta('Turquoise Plumbing | 24/7 Plumbers Illawarra', 'Honest, reliable plumbing across Shellharbour, Wollongong and the Illawarra. 24/7 emergency service, free quotes and upfront pricing.'); return <Layout><Hero /><TrustBar /><section className="section" id="services"><div className="shell split-heading"><div><span className="eyebrow">What we do</span><h2>Plumbing that keeps<br /><em>life moving.</em></h2></div><div><p>From urgent leaks to thoughtful renovations, we bring a calm approach and quality workmanship to every home we visit.</p><a className="text-link" href="/services">View all services <ArrowRight size={16} /></a></div></div><div className="shell"><ServicesGrid /></div></section><section className="why-section"><div className="shell why-grid"><div className="why-image"><div className="image-placeholder"><Droplets size={38} /><span>Clean water. Warm homes.<br />Local care.</span></div></div><div className="why-copy"><span className="eyebrow">Why Turquoise</span><h2>A local team with<br /><em>the right priorities.</em></h2><p>We started Turquoise Plumbing to provide the kind of service we would want in our own homes: honest, reliable and done properly the first time.</p><div className="benefit-list">{[['Care for your home', 'We protect your space, communicate clearly and leave things tidy.'], ['Straight answers', 'You get practical advice and upfront pricing, not confusing jargon.'], ['Quality that lasts', 'We look for the real cause and stand behind the work we do.']].map(([title, text]) => <div className="benefit" key={title}><div className="icon-box"><Check size={18} /></div><span><b>{title}</b><small>{text}</small></span></div>)}</div></div></div></section><Stats /><AreasPreview /><Process /><Testimonials /><section className="section faq-section" id="faq"><div className="shell faq-grid"><div><span className="eyebrow">Good to know</span><h2>Questions,<br /><em>answered.</em></h2><p>Need something more specific? Call us and we will talk it through.</p><a className="button button-outline" href="/contact">Ask a question <ArrowRight size={16} /></a></div><FAQ /></div></section><CTA /></Layout>; }

function ServicePage({ service }: { service: typeof services[number] }) {
  const content = serviceContent[service.slug];
  usePageMeta(`${service.name} | Turquoise Plumbing`, `${service.name} across the Illawarra from Turquoise Plumbing. Honest advice, quality workmanship and clear pricing.`);
  const Icon = service.icon;
  const relatedServices = content.related.map(slug => services.find(s => s.slug === slug)).filter(Boolean) as typeof services;
  return <Layout>
    <Breadcrumbs current={service.name} />
    <PageIntro eyebrow="Our services" title={service.name} text={service.short} />
    <section className="inner-hero-detail">
      <div className="shell detail-grid">
        <Reveal>
          <div className="large-icon"><Icon size={34} /></div>
          <h2>{content.h2}</h2>
          {content.body.map((para, i) => <p key={i}>{para}</p>)}
          <div className="service-cta-row">
            <a className="button" href="/contact">Get a free quote <ArrowRight size={16} /></a>
            <a className="button button-outline" href={phoneHref}><Phone size={16} /> {phone}</a>
          </div>
        </Reveal>
        <div className="warning-panel">
          <span className="eyebrow">Signs you may need us</span>
          <h3>{content.sidebarHeading}</h3>
          <ul>{content.problems.map(problem => <li key={problem}><Check size={16} /> {problem}</li>)}</ul>
        </div>
      </div>
    </section>
    <section className="service-hero-image">
      <div className="shell">
        <img src={content.image} alt={`${service.name} - Turquoise Plumbing`} loading="lazy" />
      </div>
    </section>
    <section className="section light-section">
      <div className="shell two-column">
        <div>
          <span className="eyebrow">A considered approach</span>
          <h2 dangerouslySetInnerHTML={{ __html: content.processHeading.replace(/ /g, '<br />').replace(/<br \/>$/, '') }} />
        </div>
        <div className="numbered-list">
          {content.processSteps.map(([num, title, text]) => <div key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </div>
      </div>
    </section>
    <section className="section">
      <div className="shell cost-section">
        <div>
          <span className="eyebrow">Clear from the beginning</span>
          <h2 dangerouslySetInnerHTML={{ __html: content.costHeading.replace(/ /g, '<br />').replace(/<br \/>$/, '') }} />
        </div>
        <div>
          {content.costBody.map((para, i) => <p key={i}>{para}</p>)}
          <a className="text-link" href="/contact">Request a free quote <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
    <section className="section related-section">
      <div className="shell">
        <div className="section-heading">
          <span className="eyebrow">Keep exploring</span>
          <h2>Related <em>services.</em></h2>
        </div>
        <div className="service-grid" style={{ gridTemplateColumns: `repeat(${relatedServices.length}, 1fr)` }}>
          {relatedServices.map(rel => { const RelIcon = rel.icon; return <a className="service-card" href={`/services/${rel.slug}`} key={rel.slug}><div className="icon-box"><RelIcon size={22} /></div><h3>{rel.name}</h3><p>{rel.short}</p><span className="card-link">Learn more <ArrowRight size={15} /></span></a>; })}
        </div>
      </div>
    </section>
    <section className="section local-proof">
      <div className="shell">
        <div className="section-heading centered">
          <span className="eyebrow">From a real customer</span>
          <h2>What people say<br /><em>about our work.</em></h2>
        </div>
        <div className="quote-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="quote-card">
            <div className="stars">★★★★★</div>
            <p>{content.testimonial.quote}</p>
            <small>{content.testimonial.author}, {content.testimonial.suburb}</small>
          </div>
        </div>
      </div>
    </section>
    <section className="section faq-section">
      <div className="shell faq-grid">
        <div>
          <span className="eyebrow">{service.name}</span>
          <h2>Frequently asked<br /><em>questions.</em></h2>
        </div>
        <FAQ items={content.faqs} />
      </div>
    </section>
    <section className="section coverage-callout">
      <div className="shell">
        <div>
          <span className="eyebrow eyebrow-light">Areas we cover</span>
          <h2>We service your suburb.</h2>
          <p>From Barrack Heights, we cover a 40km radius across the Illawarra. Find your suburb and see how quickly we can reach you.</p>
          <a className="button button-light" href="/service-areas">View all service areas <ArrowRight size={16} /></a>
        </div>
        <div className="location-link-grid">
          {locations.map(loc => <a key={loc.slug} href={`/locations/${loc.slug}`}><MapPin size={15} /> {loc.name}</a>)}
        </div>
      </div>
    </section>
    <section className="section contact-section">
      <div className="shell">
        <div className="section-heading centered">
          <span className="eyebrow">Get in touch</span>
          <h2>{content.ctaTitle}</h2>
          <p style={{ maxWidth: 600, margin: '0 auto' }}>{content.ctaText}</p>
        </div>
        <Form />
      </div>
    </section>
  </Layout>;
}

function LocationPage({ location }: { location: typeof locations[number] }) {
  const content = locationContent[location.slug];
  usePageMeta(`${location.name} Plumber | Turquoise Plumbing`, `Local plumbers in ${location.name}. 24/7 emergency plumbing, hot water, blocked drains and renovation plumbing from nearby Barrack Heights.`);
  const focusServices = (content?.focusServices || ['blocked-drains', 'hot-water', 'leak-detection', 'general-maintenance']).map(slug => services.find(s => s.slug === slug)).filter(Boolean) as typeof services;
  return <Layout>
    <Breadcrumbs current={`${location.name} plumbers`} />
    <PageIntro eyebrow="Local service area" title={`${location.name}, looked after.`} text={`Based in Barrack Heights, we can usually reach ${location.name} in around ${location.response}. When your home needs a dependable plumber, local knowledge makes a difference.`} />
    <section className="location-intro">
      <div className="shell location-grid">
        <Reveal>
          <span className="eyebrow">A local view</span>
          {content ? <h2 dangerouslySetInnerHTML={{ __html: content.introH2 }} /> : <h2>Plumbing that fits<br /><em>the way you live.</em></h2>}
          {content ? content.introBody.map((para, i) => <p key={i}>{para}</p>) : <><p>{location.name} has its own rhythm and its own housing story. From {location.landmark}, the surrounding streets are a mix of {location.style.toLowerCase()}. That variety is why we start by understanding the property, not assuming every plumbing problem looks the same.</p><p>For homes in this area, we commonly help with {location.focus}. We bring the same careful approach to an urgent repair, a planned upgrade or the final details of a renovation.</p></>}
        </Reveal>
        <div className="local-card">
          <MapPin size={22} />
          <span className="eyebrow">Typical response from Barrack Heights</span>
          <strong>{location.response}</strong>
          <small>Same-day service where possible</small>
        </div>
      </div>
    </section>
    <section className="section local-detail">
      <div className="shell two-column">
        <div>
          <span className="eyebrow">What we see locally</span>
          {content ? <h2 dangerouslySetInnerHTML={{ __html: content.localHeading }} /> : <h2>Common problems<br /><em>in {location.name}.</em></h2>}
        </div>
        <div>
          {content ? content.localBody.map((para, i) => <p key={i}>{para}</p>) : <p>{location.name} properties often tell you what the plumbing needs before a fitting fails.</p>}
          {content ? <ul className="check-list">{content.localProblems.map(item => <li key={item}><Check size={16} /> {item}</li>)}</ul> : <ul className="check-list">{location.focus.split(', ').map(item => <li key={item}><Check size={16} /> {item[0].toUpperCase() + item.slice(1)}</li>)}</ul>}
        </div>
      </div>
    </section>
    <section className="section light-section">
      <div className="shell">
        <div className="section-heading">
          <span className="eyebrow">Local help</span>
          <h2>Services for <em>{location.name}.</em></h2>
        </div>
        <div className="service-grid local-services">
          {focusServices.map(service => { const Icon = service.icon; return <a className="service-card" href={`/services/${service.slug}`} key={service.slug}><div className="icon-box"><Icon size={22} /></div><h3>{service.name}</h3><p>{service.short}</p><span className="card-link">Learn more <ArrowRight size={15} /></span></a>; })}
        </div>
      </div>
    </section>
    <section className="section case-study">
      <div className="shell case-grid">
        <div className="case-mark">
          <Sparkles size={28} />
          <span>Recent local job</span>
        </div>
        <div>
          <span className="eyebrow">A real-world example</span>
          {content ? <h2 dangerouslySetInnerHTML={{ __html: content.caseHeading }} /> : <h2>Keeping a {location.name} home<br /><em>comfortable.</em></h2>}
          <p>{location.job}</p>
        </div>
      </div>
    </section>
    <section className="section local-proof">
      <div className="shell quote-grid">
        <div className="quote-card">
          <div className="stars">★★★★★</div>
          <p>{location.testimonial}</p>
          <small>Customer in {location.name}</small>
        </div>
        <div className="coverage-mini">
          <div className="mini-map">
            <span className="map-dot main-dot" />
            <span className="map-line line-a" />
            <span className="map-line line-b" />
            <span className="map-dot dot-a" />
            <span className="map-dot dot-b" />
            <span className="map-dot dot-c" />
          </div>
          <div>
            <span className="eyebrow">Nearby coverage</span>
            <h3>Local when it matters.</h3>
            <p>We also regularly help homes in {location.nearby}.</p>
            <a className="text-link" href="/service-areas">View coverage <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
    <section className="section faq-section">
      <div className="shell faq-grid">
        <div>
          <span className="eyebrow">{location.name} plumbing</span>
          <h2>Questions from<br /><em>your area.</em></h2>
        </div>
        <FAQ items={content ? content.faqs : [['How quickly can you reach ' + location.name + '?', 'From Barrack Heights, our typical response to ' + location.name + ' is around ' + location.response + '.']]} />
      </div>
    </section>
    <CTA title={content ? content.ctaTitle : `Need a plumber in ${location.name}?`} text={content ? content.ctaText : 'Call your local Turquoise team or send an enquiry for clear advice and a prompt response.'} />
  </Layout>;
}

function ServicesHub() { usePageMeta('Plumbing Services | Turquoise Plumbing', 'Explore residential, emergency, hot water, gas, drainage and renovation plumbing services across the Illawarra.'); return <Layout><Breadcrumbs current="Services" /><PageIntro eyebrow="What we do" title="The right help for your home." text="From a leaking tap to a full renovation, Turquoise Plumbing brings practical advice and quality workmanship to every job." /><section className="section"><div className="shell"><ServicesGrid /></div></section><CTA /></Layout>; }
function AreasHub() { usePageMeta('Service Areas | Turquoise Plumbing', 'Turquoise Plumbing services a 40 kilometre radius from Barrack Heights across Shellharbour, Wollongong and the Illawarra.'); return <Layout><Breadcrumbs current="Service areas" /><PageIntro eyebrow="Where we work" title="Local plumbers across the Illawarra." text="We are based in Barrack Heights and service homes within a 40 kilometre radius, with same-day help where possible and 24/7 support for emergencies." /><section className="section"><div className="shell regions"><div><span className="eyebrow">Shellharbour and surrounds</span><h2>Close to <em>home.</em></h2><p>Shellharbour City is our home base. We cover the coastal suburbs, growing estates and established streets around the lake.</p><div className="region-list">{locations.slice(0, 6).map(location => <a href={`/locations/${location.slug}`} key={location.slug}><MapPin size={16} /><span>{location.name}</span><ArrowRight size={15} /></a>)}</div></div><div><span className="eyebrow">Wollongong and south</span><h2>Further, still <em>local.</em></h2><p>From older homes to active renovations, we bring the same thoughtful service across the wider Illawarra.</p><div className="region-list">{locations.slice(6).map(location => <a href={`/locations/${location.slug}`} key={location.slug}><MapPin size={16} /><span>{location.name}</span><ArrowRight size={15} /></a>)}</div></div></div></section><section className="coverage-callout"><div className="shell"><div className="coverage-card large"><div className="coverage-ring ring-one" /><div className="coverage-ring ring-two" /><div className="coverage-center"><MapPin size={22} /><b>Barrack Heights</b><small>40km coverage radius</small></div></div><div><span className="eyebrow eyebrow-light">Not sure if we cover you?</span><h2>Give us a call.<br /><em>We are happy to check.</em></h2><a className="button button-light" href={phoneHref}><Phone size={17} /> {phone}</a></div></div></section><CTA /></Layout>; }
function About() { usePageMeta('About Turquoise Plumbing | Local Illawarra Plumbers', 'Turquoise Plumbing is a family-owned plumbing business based in Barrack Heights, focused on honest advice and quality workmanship.'); return <Layout><Breadcrumbs current="About" /><PageIntro eyebrow="The people behind the work" title="A better kind of plumbing service." text="Turquoise Plumbing was built on a simple idea: plumbing should feel straightforward, respectful and done properly." /><section className="section about-story"><div className="shell about-grid"><div className="about-art"><img className="about-logo" src={logo} alt="Turquoise Plumbing" /><span>Family-owned<br />Local by choice</span></div><div><span className="eyebrow">Why we started</span><h2>Good work is<br /><em>personal.</em></h2><p>Aytash started Turquoise Plumbing to provide honest, reliable plumbing services with a strong focus on quality workmanship and customer service. As a family-owned business, we treat every customer’s home with care and always aim to provide the right solution at a fair price.</p><p>We are proud to be the kind of local team customers can call when something has gone wrong, when a renovation needs thoughtful planning or when they simply want straight advice before making a decision.</p><div className="signature">Aytash Kocak <small>Owner, Turquoise Plumbing</small></div></div></div></section><TrustBar /><section className="section values-section"><div className="shell section-heading centered"><span className="eyebrow">What you can expect</span><h2>Simple standards.<br /><em>Every time.</em></h2></div><div className="shell values-grid">{[['Care', 'We respect your home, your time and the trust you place in us.'], ['Clarity', 'You get plain-English advice, transparent pricing and no unnecessary pressure.'], ['Craft', 'We take pride in the details that make a repair last.']].map(([title, text], i) => <div key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section><CTA title="Want to work with a local team?" /></Layout>; }
function Contact() { usePageMeta('Contact Turquoise Plumbing | Get a Free Quote', 'Contact Turquoise Plumbing in Barrack Heights for 24/7 emergency plumbing, free quotes and reliable service across the Illawarra.'); return <Layout><Breadcrumbs current="Contact" /><PageIntro eyebrow="Get in touch" title="Let’s talk about the job." text="Whether it is urgent, planned or still just an idea, tell us what you need and we will help you work out the next step." /><section className="section contact-section"><div className="shell contact-grid"><div><span className="eyebrow">Call, email or enquire</span><h2>Good advice is<br /><em>one call away.</em></h2><p>We offer 24/7 emergency service, free quotes and same-day service where possible across the Illawarra.</p><div className="contact-details"><a href={phoneHref}><Phone /><span><small>Call us anytime</small><b>{phone}</b></span></a><a href={`mailto:${email}`}><Mail /><span><small>Email enquiries</small><b>{email}</b></span></a><div><MapPin /><span><small>Based in</small><b>Barrack Heights, NSW</b></span></div></div><div className="contact-note"><ShieldCheck size={20} /><span><b>Urgent plumbing?</b><small>Call rather than waiting for a reply to a form.</small></span></div></div><Form /></div></section><CTA /></Layout>; }
function NotFound() { return <Layout><PageIntro eyebrow="Page not found" title="That page has gone a little off course." text="Try the home page or call us and we will point you in the right direction." /><div className="center-link not-found"><a className="button" href="/">Back to home <ArrowRight size={16} /></a></div></Layout>; }

export default function App() { const path = window.location.pathname.replace(/\/$/, '') || '/'; const service = services.find(item => path === `/services/${item.slug}`); const location = locations.find(item => path === `/locations/${item.slug}`); useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.08 }); document.querySelectorAll('.reveal').forEach(element => observer.observe(element)); return () => observer.disconnect(); }, [path]); const page = useMemo(() => { if (path === '/') return <Home />; if (path === '/services') return <ServicesHub />; if (service) return <ServicePage service={service} />; if (path === '/service-areas') return <AreasHub />; if (location) return <LocationPage location={location} />; if (path === '/about') return <About />; if (path === '/contact') return <Contact />; return <NotFound />; }, [path, service, location]); return page; }
