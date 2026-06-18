import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Users,
  CalendarDays,
  Handshake,
  Building2,
  Sparkles,
  Rocket,
  Wrench,
  Trophy,
  MapPin,
  GraduationCap,
  Network,
  TrendingUp,
  Mic,
  Code2,
  Award,
  AtSign,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── DATA ────────────────────────────────────────────────────────────────────

const siteConfig = {
  tagline: "CONNECT · INNOVATE · BUILD",
  heroSubline:
    "TechEra is a student-led tech community organizing events, hackathons, workshops, and collaborations that shape the next generation of innovators.",
  ctaJoin: "Join TechEra",
  ctaExplore: "Explore Events",
  missionDescription:
    "We believe every student deserves access to a powerful network, real-world experience, and the encouragement to build without limits. TechEra is that place.",
};

const missionPoints = [
  { id: 1, Icon: Sparkles, title: "Connect",  description: "Bridge the gap between passionate learners, experienced mentors, and industry leaders in a thriving network.", accent: "#22D3EE" },
  { id: 2, Icon: Rocket,   title: "Innovate", description: "Host hackathons, workshops, and ideathons that push the boundaries of what student developers can build.",     accent: "#6366F1" },
  { id: 3, Icon: Wrench,   title: "Build",    description: "From side projects to startups — we give members the resources, mentorship, and community to ship real products.", accent: "#A78BFA" },
];

const stats = [
  { id: 1, value: 1500, suffix: "+", label: "Members" },
  { id: 2, value: 3,    suffix: "+", label: "Events"  },
  { id: 3, value: 10,   suffix: "+", label: "Collabs" },
  { id: 4, value: 7,    suffix: "+", label: "Depts"   },
];

const whatWeDo = [
  { Icon: CalendarDays, title: "Events & Meetups", desc: "In-person and virtual gatherings for builders, creators, and curious minds." },
  { Icon: Users,        title: "Community",        desc: "A network of 1500+ passionate students, mentors, and professionals." },
  { Icon: GraduationCap,title: "Learning",          desc: "Hands-on workshops, technical talks, and guided learning sessions." },
  { Icon: Handshake,    title: "Collaborations",    desc: "Partner with organizations and companies to unlock real-world opportunities." },
];

const featuredEvent = {
  tag: "LATEST EVENT",
  title: "TechEra Community Meetup",
  description: "Our biggest community gathering yet — featuring lightning talks, networking, live demos, and a surprise speaker from the industry.",
  date: "2026",
  location: "Delhi NCR",
  attendees: "100+",
  ctaText: "View Recap",
  ctaHref: "/events",
  // Drop a real photo here when ready, e.g. "/images/events/meetup-3.jpg".
  // Leave as null to keep the icon/gradient placeholder.
  image: "/event_images/developers_meetup6.jpeg",
};

const galleryItems = [
  // Set `image` to a real photo path (e.g. "/images/gallery/award-night.jpg")
  // to replace the icon placeholder for that tile. Leave as null until ready.
  { id: 1, Icon: Trophy,  label: "Award Ceremony",  span: true, image: "/event_images/developers_meetup10.jpeg" },
  { id: 2, Icon: Mic,     label: "Speaker Sessions", image: "/event_images/developers_meetup3.jpeg" },
  { id: 3, Icon: Code2,   label: "Our Team",  image: "/event_images/developers_meetup9.jpeg" },
  { id: 4, Icon: Users,   label: "Networking",       image: "/event_images/developers_meetup13.jpg" },
  { id: 5, Icon: Award,   label: "Our Winners",         image: "/event_images/developers_meetup16.jpg" },
  { id: 6, Icon: Sparkles,label: "Community Meetup", image: "/event_images/developers_meetup6.jpeg" },
];

const teamPreview = [
  // Set `image` to a real headshot path (e.g. "/images/team/aditya.jpg")
  // to replace the initials avatar. Leave as null until ready.
  { initials: "AC", name: "Aditya Choubey", role: "Founder, TechEra",    linkedin: "https://www.linkedin.com/in/aditya-c-366b90305", image: "/images/founder-techera.jpg" },
  { initials: "AD", name: "Arnav Das",      role: "Co-Founder, TechEra", linkedin: "https://www.linkedin.com/in/arnav-raj-18983a33a", image: "/images/cofounder-1.jpg" },
  { initials: "AS", name: "Amrita Singh",   role: "Co-Founder, TechEra", linkedin: "https://www.linkedin.com/in/amrita-singh-579262331", image: "/images/cofounder-2.jpg" },
];

// Set `logo` to a real logo path (e.g. "/images/partners/devfest.svg")
// to replace the Building2 icon + text chip with an actual logo image.
const partners = [
  { name: "Edubuk",    logo: "/logos/Edubuk.jpeg" },
  { name: "Metaspace", logo: "/logos/Metaspace.jpeg" },
  { name: "Oppskill",  logo: "/logos/Oppskill.png" },
  { name: "OSEN",      logo: "/logos/OSEN.png" },
  { name: "Tech4hack", logo: "/logos/Tech4hack.jpeg" },
];

const whyPoints = [
  { Icon: Network,      title: "Real Networking",   desc: "Connect with 1500+ builders, designers, and innovators who share your drive." },
  { Icon: TrendingUp,   title: "Accelerated Growth", desc: "Level up with mentors, peers, and industry professionals guiding your journey." },
  { Icon: GraduationCap,title: "Industry Exposure",  desc: "Real events, live projects, and collaborations that open doors no classroom can." },
];

// ─── GLOBAL STYLES ───────────────────────────────────────────────────────────

const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { overflow-x: hidden; max-width: 100%; background: #050B16; }
    :focus-visible { outline: 2px solid #22D3EE; outline-offset: 3px; border-radius: 4px; }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
    }

    @keyframes shimmer    { 0%{background-position:0% center}100%{background-position:200% center} }
    @keyframes fadeUp     { from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)} }
    @keyframes pulseGlow  { 0%,100%{opacity:0.45}50%{opacity:1} }
    @keyframes blink      { 0%,100%{opacity:1}50%{opacity:0} }
    @keyframes pingAnim   { 75%,100%{transform:scale(2.1);opacity:0} }
    @keyframes dotGlow    { 0%,100%{opacity:.5;box-shadow:0 0 0 0 rgba(34,211,238,.4)}50%{opacity:1;box-shadow:0 0 0 4px rgba(34,211,238,0)} }
    @keyframes scrollLeft  { 0%{transform:translateX(0)}100%{transform:translateX(-50%)} }
    @keyframes scrollRight { 0%{transform:translateX(-50%)}100%{transform:translateX(0)} }
    @keyframes driftSlow  { 0%,100%{transform:translate(0,0)}50%{transform:translate(14px,-10px)} }

    .f1{animation:fadeUp .65s cubic-bezier(.16,1,.3,1) .08s both}
    .f2{animation:fadeUp .65s cubic-bezier(.16,1,.3,1) .2s both}
    .f3{animation:fadeUp .65s cubic-bezier(.16,1,.3,1) .32s both}
    .f4{animation:fadeUp .65s cubic-bezier(.16,1,.3,1) .44s both}
    .f5{animation:fadeUp .65s cubic-bezier(.16,1,.3,1) .56s both}

    .shimmer-text{
      background:linear-gradient(100deg,#22D3EE 0%,#6366F1 35%,#A78BFA 65%,#22D3EE 100%);
      background-size:220% auto;
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
      animation:shimmer 5s linear infinite;
    }
    .grad-text{
      background:linear-gradient(120deg,#22D3EE,#6366F1);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
    }

    .glass{
      background:linear-gradient(160deg, rgba(255,255,255,.045), rgba(255,255,255,.012));
      border:1px solid rgba(255,255,255,.07);
      backdrop-filter:blur(20px) saturate(140%);
      -webkit-backdrop-filter:blur(20px) saturate(140%);
    }

    /* ── HERO ── */
    .hero{position:relative;min-height:100vh;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;background:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,.16), transparent 60%),
      radial-gradient(ellipse 60% 40% at 85% 70%, rgba(34,211,238,.09), transparent 60%),
      #050B16;}
    .hero canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block;opacity:.8}
    .hero-content{position:relative;z-index:10;width:100%;max-width:940px;margin:0 auto;padding:108px 24px 56px;text-align:center}
    .hero-pill{display:inline-flex;align-items:center;gap:9px;padding:7px 18px 7px 14px;border-radius:999px;margin-bottom:28px}
    .hero-pill-dot{width:7px;height:7px;border-radius:50%;background:#22D3EE;animation:dotGlow 2.2s ease-in-out infinite;flex-shrink:0}
    .hero-pill-text{color:#67E8F9;font-size:11px;font-weight:600;letter-spacing:.14em;font-family:'JetBrains Mono',monospace}
    .hero-h1{font-size:clamp(34px,7vw,82px);font-weight:800;line-height:1.04;letter-spacing:-.03em;margin-bottom:22px;color:#F8FAFC;font-family:'Syne',sans-serif}
    .hero-sub{color:#94A3B8;font-size:clamp(15px,2vw,18px);max-width:600px;margin:0 auto 46px;line-height:1.75;font-family:'DM Sans',sans-serif}
    .hero-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:60px}
    .btn-primary{display:inline-flex;align-items:center;gap:9px;padding:14px 30px;border-radius:14px;font-weight:600;font-size:15px;color:#04080F;background:linear-gradient(135deg,#22D3EE,#6366F1);text-decoration:none;transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s;font-family:'DM Sans',sans-serif;box-shadow:0 1px 0 rgba(255,255,255,.25) inset,0 8px 24px rgba(34,211,238,.18)}
    .btn-primary:hover{transform:translateY(-2px);box-shadow:0 1px 0 rgba(255,255,255,.3) inset,0 14px 36px rgba(34,211,238,.32)}
    .btn-secondary{display:inline-flex;align-items:center;gap:8px;padding:14px 30px;border-radius:14px;font-weight:600;font-size:15px;color:#E2E8F0;text-decoration:none;transition:transform .3s cubic-bezier(.16,1,.3,1),border-color .3s,background .3s;font-family:'DM Sans',sans-serif}
    .btn-secondary:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.18) !important;background:rgba(255,255,255,.06) !important}
    .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;max-width:560px;margin:0 auto;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.07)}
    .stat-card{padding:18px 8px;text-align:center;background:rgba(255,255,255,.025);transition:background .3s}
    .stat-card:hover{background:rgba(34,211,238,.06)}
    .stat-val{font-size:clamp(19px,3vw,27px);font-weight:700;color:#F8FAFC;font-family:'JetBrains Mono',monospace;letter-spacing:-.02em}
    .stat-lbl{font-size:10px;color:#64748B;text-transform:uppercase;letter-spacing:.12em;margin-top:5px;font-family:'DM Sans',sans-serif;font-weight:500}
    .scroll-ind{position:absolute;bottom:26px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;opacity:.4;pointer-events:none}
    .scroll-line{width:1px;height:28px;background:linear-gradient(#22D3EE,transparent);animation:pulseGlow 2.4s ease-in-out infinite}

    /* ── WHAT WE DO ── */
    .sec-what{position:relative;padding:clamp(64px,9vw,116px) 24px;background:#050B16;overflow:hidden}
    .what-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.07)}
    .what-card{position:relative;padding:30px 24px;background:rgba(255,255,255,.018);transition:background .35s;overflow:hidden}
    .what-card:hover{background:rgba(34,211,238,.045)}
    .what-icon-wrap{width:44px;height:44px;border-radius:13px;background:rgba(34,211,238,.08);border:1px solid rgba(34,211,238,.16);display:flex;align-items:center;justify-content:center;margin-bottom:20px;color:#67E8F9;transition:transform .35s cubic-bezier(.16,1,.3,1)}
    .what-card:hover .what-icon-wrap{transform:translateY(-3px)}
    .what-title{font-size:16px;font-weight:700;color:#F8FAFC;margin-bottom:9px;font-family:'Syne',sans-serif}
    .what-desc{color:#64748B;font-size:13.5px;line-height:1.7;font-family:'DM Sans',sans-serif}

    /* ── FEATURED EVENT ── */
    .sec-event{position:relative;padding:clamp(48px,8vw,96px) 24px;background:#050B16;overflow:hidden}
    .event-card{position:relative;border-radius:26px;overflow:hidden;display:grid;grid-template-columns:0.85fr 1.15fr;min-height:320px;border:1px solid rgba(255,255,255,.08)}
    .event-visual{position:relative;background:
      radial-gradient(ellipse 100% 80% at 30% 20%, rgba(99,102,241,.35), transparent 60%),
      radial-gradient(ellipse 80% 60% at 80% 80%, rgba(34,211,238,.18), transparent 60%),
      #0A1326;
      display:flex;align-items:center;justify-content:center;overflow:hidden}
    .event-visual::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:32px 32px;mask-image:radial-gradient(circle at center, black, transparent 75%)}
    .event-icon-ring{position:relative;width:96px;height:96px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);color:#67E8F9;animation:driftSlow 6s ease-in-out infinite}
    .event-visual-img{position:relative;width:100%;height:100%;object-fit:cover;z-index:1}
    .event-body{padding:clamp(28px,4vw,52px);background:rgba(255,255,255,.02);display:flex;flex-direction:column;justify-content:center}
    .event-tag{display:inline-flex;align-items:center;gap:7px;padding:5px 14px;border-radius:999px;font-size:10px;font-weight:600;letter-spacing:.13em;color:#67E8F9;font-family:'JetBrains Mono',monospace;margin-bottom:18px;width:fit-content;background:rgba(34,211,238,.07);border:1px solid rgba(34,211,238,.15)}
    .event-title{font-size:clamp(21px,3vw,30px);font-weight:700;color:#F8FAFC;line-height:1.15;margin-bottom:14px;font-family:'Syne',sans-serif;letter-spacing:-.02em}
    .event-desc{color:#64748B;font-size:14px;line-height:1.75;margin-bottom:22px;font-family:'DM Sans',sans-serif}
    .event-meta-row{display:flex;gap:20px;margin-bottom:26px;flex-wrap:wrap}
    .event-meta-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:#64748B;font-family:'DM Sans',sans-serif}
    .event-meta-item svg{color:#475569}
    .event-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 26px;border-radius:12px;font-weight:600;font-size:14px;color:#04080F;background:linear-gradient(135deg,#22D3EE,#6366F1);text-decoration:none;transition:transform .3s cubic-bezier(.16,1,.3,1);width:fit-content}
    .event-btn:hover{transform:translateY(-2px)}

    /* ── GALLERY ── */
    .sec-gallery{position:relative;padding:clamp(64px,9vw,116px) 24px;background:#050B16;overflow:hidden}
    .gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .gallery-item{position:relative;aspect-ratio:4/3;border-radius:18px;overflow:hidden;cursor:pointer;border:1px solid rgba(255,255,255,.07);background:#0A1326;transition:border-color .3s}
    .gallery-item:hover{border-color:rgba(34,211,238,.25)}
    .gallery-item[data-span="true"]{grid-column:span 2;aspect-ratio:unset;min-height:230px}
    .gallery-bg{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transition:transform .5s cubic-bezier(.16,1,.3,1)}
    .gallery-bg-photo{background-size:cover;background-position:center}
    .gallery-item:hover .gallery-bg{transform:scale(1.06)}
    .gallery-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(5,11,22,.92) 0%,rgba(5,11,22,.2) 50%,transparent 75%);display:flex;align-items:flex-end;padding:18px;opacity:0;transition:opacity .35s}
    .gallery-item:hover .gallery-overlay{opacity:1}
    .gallery-label{font-size:13px;font-weight:600;color:#F8FAFC;font-family:'Syne',sans-serif;display:flex;align-items:center;gap:8px}
    .gallery-zoom{position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s,transform .3s;transform:scale(.85);color:#67E8F9}
    .gallery-item:hover .gallery-zoom{opacity:1;transform:scale(1)}

    .lightbox{position:fixed;inset:0;z-index:9999;background:rgba(5,11,22,.94);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(16px)}
    .lightbox-inner{position:relative;max-width:620px;width:90%;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.1)}
    .lightbox-close{position:absolute;top:14px;right:14px;width:38px;height:38px;border-radius:11px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#F8FAFC;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:10;transition:background .2s}
    .lightbox-close:hover{background:rgba(255,255,255,.15)}
    .lightbox-content{aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;background:
      radial-gradient(ellipse 100% 80% at 30% 20%, rgba(99,102,241,.35), transparent 60%),
      radial-gradient(ellipse 80% 60% at 80% 80%, rgba(34,211,238,.2), transparent 60%),
      #0A1326;color:#67E8F9}
    .lightbox-photo{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}
    .lightbox-label{padding:18px 22px;font-size:14px;font-weight:600;color:#F8FAFC;font-family:'Syne',sans-serif;background:#0B1424;border-top:1px solid rgba(255,255,255,.06)}

    /* ── SPEAKERS ── */
    .sec-speakers{position:relative;padding:clamp(64px,9vw,116px) 24px;background:#050B16;overflow:hidden}
    .speakers-row{display:flex;gap:16px;overflow-x:auto;padding-bottom:8px;scrollbar-width:none;-ms-overflow-style:none}
    .speakers-row::-webkit-scrollbar{display:none}
    .speaker-card{flex-shrink:0;width:168px;padding:24px 18px;border-radius:18px;text-align:center;transition:transform .35s cubic-bezier(.16,1,.3,1),border-color .35s;cursor:pointer;text-decoration:none;display:block;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02)}
    .speaker-card:hover{transform:translateY(-5px);border-color:rgba(34,211,238,.2)}
    .speaker-avatar{width:60px;height:60px;border-radius:50%;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#04080F;font-family:'Syne',sans-serif;background:linear-gradient(135deg,#22D3EE,#6366F1)}
    .speaker-avatar-photo{object-fit:cover;display:block;background:none}
    .speaker-name{font-size:12.5px;font-weight:700;color:#F8FAFC;margin-bottom:4px;font-family:'Syne',sans-serif;line-height:1.3}
    .speaker-role{font-size:10.5px;color:#64748B;font-family:'DM Sans',sans-serif;line-height:1.4}

    /* ── PARTNERS ── */
    .sec-partners{position:relative;padding:clamp(52px,7vw,84px) 0;background:#050B16;overflow:hidden;border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05)}
    .partner-track{overflow:hidden;white-space:nowrap;padding:5px 0;mask-image:linear-gradient(90deg,transparent,black 8%,black 92%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,black 8%,black 92%,transparent)}
    .partner-inner{display:inline-flex;gap:14px;animation:scrollLeft 22s linear infinite}
    .partner-inner2{display:inline-flex;gap:14px;animation:scrollRight 26s linear infinite}
    .partner-track:hover .partner-inner,
    .partner-track:hover .partner-inner2{animation-play-state:paused}
    .partner-chip{display:flex;align-items:center;justify-content:center;width:140px;height:64px;padding:14px 18px;border-radius:14px;flex-shrink:0;transition:border-color .3s,background .3s,transform .3s;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);color:#64748B}
    .partner-logo-img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}
    .partner-chip:hover{border-color:rgba(34,211,238,.2);background:rgba(34,211,238,.04);transform:translateY(-2px)}
    .partners-head{text-align:center;padding:0 24px;margin-bottom:clamp(30px,4vw,46px)}

    /* ── WHY TECHERA ── */
    .sec-why{position:relative;padding:clamp(64px,9vw,116px) 24px;background:#050B16;overflow:hidden}
    .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .why-card{position:relative;padding:34px 28px;border-radius:22px;text-align:left;transition:transform .35s cubic-bezier(.16,1,.3,1);overflow:hidden;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02)}
    .why-card:hover{transform:translateY(-5px)}
    .why-icon-wrap{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;background:rgba(99,102,241,.09);border:1px solid rgba(99,102,241,.18);color:#A5B4FC}
    .why-title{font-size:16.5px;font-weight:700;color:#F8FAFC;margin-bottom:11px;font-family:'Syne',sans-serif}
    .why-desc{color:#64748B;font-size:13.5px;line-height:1.7;font-family:'DM Sans',sans-serif}

    /* ── MISSION ── */
    .sec-mission{position:relative;padding:clamp(64px,9vw,116px) 24px;background:#050B16;overflow:hidden}
    .mission-layout{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,76px);align-items:center}
    .mission-card{position:relative;display:flex;gap:18px;padding:22px 24px;border-radius:18px;overflow:hidden;transition:transform .3s cubic-bezier(.16,1,.3,1);border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02)}
    .mission-card:hover{transform:translateX(4px)}
    .mission-icon{flex-shrink:0;width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center}
    .mission-title{font-size:16.5px;font-weight:700;color:#F8FAFC;margin-bottom:6px;font-family:'Syne',sans-serif}
    .mission-desc{color:#64748B;font-size:13.5px;line-height:1.72;font-family:'DM Sans',sans-serif}
    .terminal{border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#080F1E}
    .term-bar{padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;gap:8px}
    .term-dot{width:11px;height:11px;border-radius:50%;display:inline-block;flex-shrink:0}
    .term-body{padding:20px 22px;font-family:'JetBrains Mono',monospace;font-size:clamp(11.5px,1.4vw,13px);line-height:1.95}

    /* ── CTA ── */
    .sec-cta{position:relative;padding:clamp(64px,9vw,116px) 24px;background:#050B16;overflow:hidden}
    .cta-card{position:relative;border-radius:28px;overflow:hidden;border:1px solid rgba(255,255,255,.08)}
    .cta-inner{position:relative;padding:clamp(40px,7vw,88px) clamp(24px,6vw,84px);text-align:center}
    .cta-h2{font-size:clamp(28px,5.5vw,58px);font-weight:700;color:#F8FAFC;line-height:1.08;letter-spacing:-.03em;margin-bottom:20px;font-family:'Syne',sans-serif}
    .cta-sub{color:#64748B;font-size:clamp(14px,1.8vw,17px);max-width:460px;margin:0 auto 34px;line-height:1.75;font-family:'DM Sans',sans-serif}
    .perks-row{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:34px}
    .perk-tag{padding:7px 16px;border-radius:999px;font-size:12px;font-weight:600;color:#C4B5FD;font-family:'DM Sans',sans-serif;border:1px solid rgba(167,139,250,.18);background:rgba(167,139,250,.05)}
    .cta-btns{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}
    .cta-btn-p{display:inline-flex;align-items:center;gap:9px;justify-content:center;padding:15px 36px;border-radius:15px;font-weight:600;font-size:15px;color:#04080F;background:linear-gradient(135deg,#22D3EE,#6366F1);text-decoration:none;transition:transform .3s cubic-bezier(.16,1,.3,1)}
    .cta-btn-p:hover{transform:translateY(-2px)}
    .cta-btn-s{display:inline-flex;align-items:center;gap:9px;justify-content:center;padding:15px 36px;border-radius:15px;font-weight:600;font-size:15px;color:#94A3B8;text-decoration:none;transition:color .25s,border-color .25s,background .25s;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.02)}
    .cta-btn-s:hover{color:#F8FAFC;border-color:rgba(255,255,255,.16);background:rgba(255,255,255,.06)}

    /* SHARED */
    .sec-head{text-align:center;margin-bottom:clamp(40px,5vw,64px)}
    .sec-pill{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:999px;margin-bottom:18px}
    .sec-pill-text{font-size:11px;font-weight:600;letter-spacing:.18em;font-family:'JetBrains Mono',monospace}
    .sec-h2{font-size:clamp(27px,4.5vw,48px);font-weight:700;color:#F8FAFC;letter-spacing:-.03em;margin-bottom:14px;line-height:1.12;font-family:'Syne',sans-serif}
    .sec-sub{color:#64748B;font-size:clamp(14px,1.8vw,16.5px);max-width:480px;margin:0 auto;line-height:1.7;font-family:'DM Sans',sans-serif}
    .sec-divider{position:absolute;top:0;left:50%;transform:translateX(-50%);width:min(900px,92%);height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)}

    .te-grid-bg{
      background-image:
        linear-gradient(rgba(34,211,238,.02) 1px,transparent 1px),
        linear-gradient(90deg,rgba(34,211,238,.02) 1px,transparent 1px);
      background-size:60px 60px;
    }

    /* RESPONSIVE */
    @media(max-width:1023px){
      .mission-layout{grid-template-columns:1fr}
      .event-card{grid-template-columns:1fr}
      .event-visual{min-height:160px;padding:32px 0}
      .what-grid{grid-template-columns:repeat(2,1fr)}
      .why-grid{grid-template-columns:1fr}
    }
    @media(max-width:767px){
      .stats-grid{grid-template-columns:repeat(2,1fr)!important}
      .hero-ctas{flex-direction:column;align-items:center}
      .btn-primary,.btn-secondary{width:100%;max-width:320px;justify-content:center}
      .cta-btns{flex-direction:column;align-items:center}
      .cta-btn-p,.cta-btn-s{width:100%;max-width:320px}
      .gallery-grid{grid-template-columns:repeat(2,1fr)}
      .gallery-item[data-span="true"]{grid-column:span 2;min-height:170px}
      .speaker-card{width:144px}
    }
    @media(max-width:479px){
      .sec-mission,.sec-cta,.sec-what,.sec-event,.sec-gallery,.sec-speakers,.sec-why{padding-left:16px;padding-right:16px}
      .hero-content{padding-left:18px;padding-right:18px}
      .gallery-grid{grid-template-columns:1fr}
      .gallery-item[data-span="true"]{grid-column:span 1}
      .what-grid{grid-template-columns:1fr}
    }
  `}</style>
);

// ─── HERO ────────────────────────────────────────────────────────────────────

function HeroSection() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width  = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    const pts = Array.from({ length: 46 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - .5) * .00032, vy: (Math.random() - .5) * .00032,
      r: Math.random() * 1.2 + .4, a: Math.random() * .3 + .1,
    }));
    const draw = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(103,232,249,${p.a})`;
        ctx.fill();
      });
      const thresh = Math.min(w, h) * .11;
      pts.forEach((a, i) => {
        const ax = a.x * w, ay = a.y * h;
        pts.slice(i + 1).forEach(b => {
          const d = Math.hypot(ax - b.x * w, ay - b.y * h);
          if (d < thresh) {
            ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(b.x * w, b.y * h);
            ctx.strokeStyle = `rgba(99,102,241,${.06 * (1 - d / thresh)})`;
            ctx.lineWidth = .5; ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <section className="hero te-grid-bg">
      <canvas ref={canvasRef} />
      <div className="hero-content">
        <div className="f1">
          <div className="hero-pill glass">
            <span className="hero-pill-dot" />
            <span className="hero-pill-text">{siteConfig.tagline}</span>
          </div>
        </div>
        <h1 className="hero-h1 f2">The Community Where<br /><span className="shimmer-text">Builders Belong</span></h1>
        <p className="hero-sub f3">{siteConfig.heroSubline}</p>
        <div className="hero-ctas f4">
          <a href="https://chat.whatsapp.com/L5i3gkwI7gSErhUivmShMO" className="btn-primary">{siteConfig.ctaJoin} <ArrowRight size={16} /></a>
          <a href="/events" className="btn-secondary glass">{siteConfig.ctaExplore} <ChevronRight size={15} /></a>
        </div>
        <div className="stats-grid f5">
          {stats.map(s => (
            <div key={s.id} className="stat-card">
              <div className="stat-val">{s.value}{s.suffix}</div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-ind">
        <span style={{ fontSize:10, color:"#64748B", textTransform:"uppercase", letterSpacing:".14em", fontFamily:"'DM Sans',sans-serif" }}>Scroll</span>
        <div className="scroll-line" />
        <ChevronDown size={13} style={{ color: "#475569", marginTop: -4 }} />
      </div>
    </section>
  );
}

// ─── WHAT WE DO ──────────────────────────────────────────────────────────────

function WhatWeDoSection() {
  return (
    <section className="sec-what">
      <div className="sec-divider" />
      <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
        <div className="sec-head">
          <div className="sec-pill glass">
            <span className="sec-pill-text" style={{ color:"#67E8F9" }}>WHAT WE DO</span>
          </div>
          <h2 className="sec-h2">Built Around <span className="grad-text">You</span></h2>
          <p className="sec-sub">Four pillars that define how TechEra creates value for every member in the community.</p>
        </div>
        <div className="what-grid">
          {whatWeDo.map((item, i) => (
            <div key={i} className="what-card">
              <div className="what-icon-wrap"><item.Icon size={20} strokeWidth={1.75} /></div>
              <div className="what-title">{item.title}</div>
              <div className="what-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FEATURED EVENT ───────────────────────────────────────────────────────────

function FeaturedEventSection() {
  return (
    <section className="sec-event">
      <div className="sec-divider" />
      <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
        <div className="event-card">
          <div className="event-visual">
            {featuredEvent.image ? (
              <img src={featuredEvent.image} alt={featuredEvent.title} className="event-visual-img" />
            ) : (
              <div className="event-icon-ring"><Trophy size={34} strokeWidth={1.5} /></div>
            )}
          </div>
          <div className="event-body">
            <span className="event-tag">{featuredEvent.tag}</span>
            <h2 className="event-title">{featuredEvent.title}</h2>
            <p className="event-desc">{featuredEvent.description}</p>
            <div className="event-meta-row">
              <span className="event-meta-item"><MapPin size={14} /> {featuredEvent.location}</span>
              <span className="event-meta-item"><Users size={14} /> {featuredEvent.attendees} Attendees</span>
              <span className="event-meta-item"><CalendarDays size={14} /> {featuredEvent.date}</span>
            </div>
            <a href={featuredEvent.ctaHref} className="event-btn">
              {featuredEvent.ctaText} <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY ─────────────────────────────────────────────────────────────────

function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="sec-gallery">
      <div className="sec-divider" />
      <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
        <div className="sec-head">
          <div className="sec-pill glass">
            <span className="sec-pill-text" style={{ color:"#C4B5FD" }}>MOMENTS</span>
          </div>
          <h2 className="sec-h2">Inside <span className="grad-text">TechEra</span></h2>
          <p className="sec-sub">A glimpse into the events, hackathons, and moments that define our community.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              data-span={item.span ? "true" : "false"}
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setLightbox(item)}
            >
              {item.image ? (
                <div className="gallery-bg gallery-bg-photo" style={{ backgroundImage: `url(${item.image})` }} />
              ) : (
                <div className="gallery-bg" style={{
                  background: "radial-gradient(ellipse 100% 80% at 30% 20%, rgba(99,102,241,.3), transparent 60%), radial-gradient(ellipse 80% 60% at 80% 80%, rgba(34,211,238,.16), transparent 60%), #0A1326",
                  color: "#67E8F9",
                }}>
                  <item.Icon size={item.span ? 40 : 30} strokeWidth={1.4} />
                </div>
              )}
              <div className="gallery-overlay">
                <span className="gallery-label"><item.Icon size={14} strokeWidth={1.75} /> {item.label}</span>
              </div>
              <span className="gallery-zoom glass"><Sparkles size={14} /></span>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close"><X size={18} /></button>
            {lightbox.image ? (
              <img src={lightbox.image} alt={lightbox.label} className="lightbox-photo" />
            ) : (
              <div className="lightbox-content"><lightbox.Icon size={64} strokeWidth={1.3} /></div>
            )}
            <div className="lightbox-label">{lightbox.label}</div>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── SPEAKERS / TEAM PREVIEW ──────────────────────────────────────────────────

function TeamPreviewSection() {
  return (
    <section className="sec-speakers">
      <div className="sec-divider" />
      <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
        <div className="sec-head">
          <div className="sec-pill glass">
            <span className="sec-pill-text" style={{ color:"#A5B4FC" }}>MEET THE TEAM</span>
          </div>
          <h2 className="sec-h2">The People Behind <span className="grad-text">TechEra</span></h2>
          <p className="sec-sub">The founders building and growing the community.</p>
        </div>
        <div className="speakers-row" style={{ justifyContent: "center" }}>
          {teamPreview.map((s, i) => (
            <a key={i} href={s.linkedin} target="_blank" rel="noopener noreferrer" className="speaker-card">
              {s.image ? (
                <img src={s.image} alt={s.name} className="speaker-avatar speaker-avatar-photo" />
              ) : (
                <div className="speaker-avatar">{s.initials}</div>
              )}
              <div className="speaker-name">{s.name}</div>
              <div className="speaker-role">{s.role}</div>
            </a>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:32 }}>
          <a href="/team" className="btn-secondary glass" style={{ display:"inline-flex" }}>
            View Full Team <ChevronRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── PARTNERS ────────────────────────────────────────────────────────────────

function PartnersSection() {
  const doubled = [...partners, ...partners];
  const renderChip = (p, i) => (
    <div key={i} className="partner-chip" title={p.name}>
      {p.logo ? (
        <img src={p.logo} alt={p.name} className="partner-logo-img" />
      ) : (
        <Building2 size={20} strokeWidth={1.5} />
      )}
    </div>
  );
  return (
    <section className="sec-partners">
      <div className="partners-head">
        <p style={{ fontSize:"11px", fontWeight:600, letterSpacing:".18em", color:"#475569", textTransform:"uppercase", fontFamily:"'JetBrains Mono',monospace" }}>
          Trusted by communities & organizations
        </p>
      </div>
      <div className="partner-track">
        <div className="partner-inner">
          {doubled.map(renderChip)}
        </div>
      </div>
      <div className="partner-track" style={{ marginTop:10 }}>
        <div className="partner-inner2">
          {[...doubled].reverse().map(renderChip)}
        </div>
      </div>
    </section>
  );
}

// ─── WHY TECHERA ─────────────────────────────────────────────────────────────

function WhySection() {
  return (
    <section className="sec-why">
      <div className="sec-divider" />
      <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
        <div className="sec-head">
          <div className="sec-pill glass">
            <span className="sec-pill-text" style={{ color:"#67E8F9" }}>WHY TECHERA</span>
          </div>
          <h2 className="sec-h2">More Than Just <span className="grad-text">Events</span></h2>
          <p className="sec-sub">We're building the infrastructure for the next generation of builders to thrive.</p>
        </div>
        <div className="why-grid">
          {whyPoints.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-icon-wrap"><item.Icon size={22} strokeWidth={1.6} /></div>
              <div className="why-title">{item.title}</div>
              <div className="why-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MISSION ─────────────────────────────────────────────────────────────────

function MissionCard({ pt }) {
  return (
    <article className="mission-card">
      <div className="mission-icon" style={{ background:`${pt.accent}14`, border:`1px solid ${pt.accent}28`, color: pt.accent }}>
        <pt.Icon size={20} strokeWidth={1.75} />
      </div>
      <div>
        <div className="mission-title">{pt.title}</div>
        <div className="mission-desc">{pt.description}</div>
      </div>
    </article>
  );
}

function MissionSection() {
  return (
    <section id="mission" className="sec-mission">
      <div className="sec-divider" />
      <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
        <div className="mission-layout">
          <div>
            <div className="sec-pill glass" style={{ display:"inline-flex", marginBottom:22 }}>
              <span className="sec-pill-text" style={{ color:"#67E8F9" }}>OUR MISSION</span>
            </div>
            <h2 className="sec-h2" style={{ marginBottom:18 }}>
              Why TechEra <span className="grad-text">Exists</span>
            </h2>
            <p style={{ color:"#64748B", fontSize:"clamp(14px,1.8vw,16.5px)", lineHeight:1.78, marginBottom:30, fontFamily:"'DM Sans',sans-serif" }}>{siteConfig.missionDescription}</p>
            <div className="terminal">
              <div className="term-bar">
                {["#FF5F57","#FEBC2E","#28C840"].map((c,i) => <span key={i} className="term-dot" style={{ background:c }} />)}
                <span style={{ color:"#475569", fontSize:12, marginLeft:8, fontFamily:"'JetBrains Mono',monospace" }}>techera.config.js</span>
              </div>
              <div className="term-body">
                <div><span style={{color:"#818CF8"}}>const </span><span style={{color:"#67E8F9"}}>community</span><span style={{color:"#E2E8F0"}}> = </span><span style={{color:"#C4B5FD"}}>"TechEra"</span><span style={{color:"#E2E8F0"}}>;</span></div>
                <div><span style={{color:"#818CF8"}}>const </span><span style={{color:"#67E8F9"}}>mission</span><span style={{color:"#E2E8F0"}}> = [</span></div>
                {["Connect","Innovate","Build"].map((v,i) => (
                  <div key={i} style={{paddingLeft:18}}><span style={{color:"#C4B5FD"}}>"{v}"</span><span style={{color:"#E2E8F0"}}>,</span></div>
                ))}
                <div><span style={{color:"#E2E8F0"}}>];</span></div>
                <div style={{color:"#475569",marginTop:4}}>// Building the future, together</div>
                <div style={{display:"flex",alignItems:"center",gap:8,marginTop:4}}>
                  <span style={{color:"#67E8F9"}}>❯</span>
                  <span style={{color:"#E2E8F0"}}>npm run</span>
                  <span style={{color:"#C4B5FD"}}>build-community</span>
                  <span style={{width:7,height:15,background:"#67E8F9",display:"inline-block",animation:"blink 1s step-end infinite",opacity:.8,flexShrink:0}} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {missionPoints.map(pt => <MissionCard key={pt.id} pt={pt} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTASection() {
  const perks = ["Free Events","Mentorship","Hackathons","Networking","Real Projects"];
  return (
    <section id="join" className="sec-cta">
      <div className="sec-divider" />
      <div style={{ maxWidth:880, margin:"0 auto", position:"relative" }}>
        <div className="cta-card" style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(99,102,241,.16), transparent 60%), radial-gradient(ellipse 70% 60% at 90% 90%, rgba(34,211,238,.1), transparent 60%), #080F1E",
        }}>
          <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle,rgba(34,211,238,.05) 1px,transparent 1px)", backgroundSize:"26px 26px", pointerEvents:"none" }} />
          <div className="cta-inner">
            <div className="glass" style={{ position:"relative", display:"inline-flex", alignItems:"center", gap:8, padding:"7px 18px", borderRadius:999, marginBottom:26 }}>
              <span style={{ position:"absolute", left:14, width:7, height:7, borderRadius:"50%", background:"#22D3EE", opacity:.4, animation:"pingAnim 1.9s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span style={{ width:7, height:7, borderRadius:"50%", background:"#22D3EE", display:"inline-block", marginLeft:4, flexShrink:0 }} />
              <span style={{ color:"#67E8F9", fontSize:11, fontWeight:600, letterSpacing:".14em", fontFamily:"'JetBrains Mono',monospace", marginLeft:4 }}>NOW RECRUITING</span>
            </div>
            <h2 className="cta-h2">Ready to Build<br /><span className="grad-text">Something Great?</span></h2>
            <p className="cta-sub">Join hundreds of passionate builders, designers, and thinkers shaping the future of tech — together.</p>
            <div className="perks-row">
              {perks.map(p => <span key={p} className="perk-tag">{p}</span>)}
            </div>
            <div className="cta-btns">
              <a href="https://chat.whatsapp.com/L5i3gkwI7gSErhUivmShMO" className="cta-btn-p" target="_blank" rel="noopener noreferrer">Join the Community <ArrowRight size={16} /></a>
              <a href="https://www.instagram.com/tech__eraa?igsh=ZTNlcXBobWZ0NG16" className="cta-btn-s"><AtSign size={16} /> Follow on Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ minHeight:"100vh", background:"#050B16", fontFamily:"'DM Sans', sans-serif", overflowX:"hidden", width:"100%" }}>
      <GlobalStyles />
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <WhatWeDoSection />
        <WhySection />
        <PartnersSection />
        <FeaturedEventSection />
        <GallerySection />
        <TeamPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}