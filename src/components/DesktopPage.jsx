import { useState, useEffect, useRef } from 'react';
import {
  TreePine, Clock, Map, Users, Smile, PawPrint,
  BookOpen, Flame, Compass, ShieldCheck, Smartphone,
  Heart, Quote, Sparkles, ArrowRight,
  Facebook, Instagram, Phone
} from 'lucide-react';

const TikTokIcon = ({ size = 18, color = '#f4f0cd' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z"/>
  </svg>
);

const YouTubeIcon = ({ size = 18, color = '#f4f0cd' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
import {
  IMG_LOGO, IMG_HERO_BG, IMG_CAMP_DECOR, IMG_S2_PHOTO,
  IMG_KIDS_MASK, IMG_TESTI_1, IMG_TESTI_2, IMG_TESTI_3, IMG_CTA_CHAR
} from '../assets';

// ─── CANVAS: 1440px centrat ───────────────────────────────────────────────────
// Toate coordonatele din Figma sunt relative la canvas-ul de 1440px.
// Fiecare secțiune are width:100% dar conținutul e într-un div de 1440px centrat.

const CANVAS = 1440;
const CANVAS_HALF = CANVAS / 2; // 720

// Hook: calculează scala curentă între 768px și 1440px
function useScale() {
  const [scale, setScale] = useState(() => Math.min(1, window.innerWidth / CANVAS));
  useEffect(() => {
    const fn = () => setScale(Math.min(1, window.innerWidth / CANVAS));
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return scale;
}

// Canvas: outer div sets visible height; inner 1440px div is scaled & centered via transform
// Using position:absolute + left:calc(50%-720px) so the div extends freely outside bounds,
// then transformOrigin:top center ensures it scales symmetrically around the viewport center.
function Canvas({ height, children, style = {} }) {
  const scale = useScale();
  const { overflow, ...outerStyle } = style;
  return (
    <div style={{ width: '100%', height: height * scale, position: 'relative', ...outerStyle }}>
      <div style={{
        position: 'absolute',
        width: CANVAS,
        height,
        left: `calc(50% - ${CANVAS_HALF}px)`,
        top: 0,
        transformOrigin: 'top center',
        transform: `scale(${scale})`,
        overflow: overflow || 'hidden',
      }}>
        {children}
      </div>
    </div>
  );
}

// ─── NAVIGAȚIE ────────────────────────────────────────────────────────────────
export function Nav() {
  const scale = useScale();
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 81 * scale, zIndex: 100,
      backdropFilter: 'blur(6px)',
      backgroundColor: 'rgba(14,39,44,0.9)',
      borderBottom: '1px solid rgba(244,240,205,0.15)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        width: CANVAS, height: 81,
        left: `calc(50% - ${CANVAS_HALF}px)`,
        top: 0,
        transformOrigin: 'top center',
        transform: `scale(${scale})`,
      }}>
        <a href="/" style={{ position: 'absolute', left: 132, top: 9.64, width: 46, height: 46, display: 'block' }}>
          <img src={IMG_LOGO} alt="Pilgrims" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
        </a>
        <a href="/" style={{
          position: 'absolute', left: 188, top: 28,
          fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
          fontSize: 23, lineHeight: '23px', color: '#5ca148', whiteSpace: 'nowrap',
        }}>Pilgrims</a>
        <a href="#experiente" style={{ position: 'absolute', left: 855, top: 30, fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, color: '#f4f0cd', whiteSpace: 'nowrap' }}>Experiențe</a>
        <a href="#beneficii" style={{ position: 'absolute', left: 967, top: 30, fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, color: '#f4f0cd', whiteSpace: 'nowrap' }}>Beneficii</a>
        <a href="#valori" style={{ position: 'absolute', left: 1065, top: 30, fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, color: '#f4f0cd', whiteSpace: 'nowrap' }}>Valori</a>
        <a href="https://www.facebook.com/PilgrimsTM" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute', left: 1142, top: 20,
          width: 154, height: 40,
          backgroundColor: '#5ca148', borderRadius: 20,
          boxShadow: '0px 4px 8px rgba(0,0,0,0.25)',
          fontFamily: "'Inter',sans-serif", fontWeight: 500,
          fontSize: 14, color: '#0e272c', whiteSpace: 'nowrap',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>Înscrie-te acum</a>
        <a href="tel:0769037702" style={{
          position: 'absolute', left: 1308, top: 20,
          width: 40, height: 40,
          backgroundColor: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(244,240,205,0.2)',
          borderRadius: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Phone size={18} color="#f4f0cd" strokeWidth={1.5} />
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const scale = useScale();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const parallax = scrollY * 0.35;
  const fade = Math.max(0, 1 - scrollY / 350);
  const slideUp = scrollY * 0.15;

  return (
    <div style={{ marginTop: 81 * scale, position: 'relative', backgroundColor: '#0e272c', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.73 }}>
        <img src={IMG_HERO_BG} alt="" style={{
          width: '100%', height: '120%', objectFit: 'cover', display: 'block',
          transform: `translateY(${parallax}px)`,
          willChange: 'transform',
        }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
      <Canvas height={618} style={{ backgroundColor: 'transparent' }}>

        {/* Badge */}
        <div style={{
          position: 'absolute', left: 572, top: 95, width: 296, height: 36,
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(244,240,205,0.2)',
          border: '1px solid rgba(244,240,205,0.3)',
          borderRadius: 18,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: fade, transform: `translateY(${-slideUp}px)`,
          willChange: 'opacity, transform',
        }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 14, color: '#f4f0cd' }}>
            Tabere Educaționale 5-12 ani
          </span>
        </div>

        <p style={{
          position: 'absolute', left: 0, right: 0, top: 155,
          fontFamily: "'Quicksand',sans-serif", fontWeight: 700,
          fontSize: 72, lineHeight: '72px',
          color: '#ffffff', textAlign: 'center',
          opacity: fade, transform: `translateY(${-slideUp}px)`,
          willChange: 'opacity, transform',
        }}>Experiențe care</p>

        <p style={{
          position: 'absolute', left: 0, right: 0, top: 227,
          fontFamily: "'Quicksand',sans-serif", fontWeight: 700,
          fontSize: 72, lineHeight: '72px', textAlign: 'center',
          opacity: fade, transform: `translateY(${-slideUp}px)`,
          willChange: 'opacity, transform',
        }}>
          <span style={{ color: '#f4f0cd' }}>cresc oameni</span>
          <span style={{ color: '#ffffff' }}>.</span>
        </p>

        <p style={{
          position: 'absolute', top: 323,
          left: (CANVAS - 641) / 2, width: 641,
          fontFamily: "'Inter',sans-serif", fontWeight: 300,
          fontSize: 24, lineHeight: '32px',
          color: 'rgba(255,255,255,0.9)', textAlign: 'center',
          opacity: fade, transform: `translateY(${-slideUp}px)`,
          willChange: 'opacity, transform',
        }}>
          Tabere în natură unde jocul, explorarea și relațiile autentice devin parte din procesul de creștere a copilului tău.
        </p>

        <a href="https://www.facebook.com/reel/1659221595082500" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute', left: 435, top: 467, width: 333, height: 56,
          backgroundColor: '#5ca148', borderRadius: 28,
          boxShadow: '0px 16px 32px rgba(92,161,72,0.2)',
          fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 18, color: '#ffffff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>Descoperă taberele Pilgrims</a>

        <a href="https://www.instagram.com/pilgrims_ro/" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute', left: 784, top: 467, width: 220, height: 56,
          backdropFilter: 'blur(2px)',
          backgroundColor: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 28,
          fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 18, color: '#ffffff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>Vezi activitățile</a>
      </Canvas>
    </div>
  );
}

// ─── SECTION 2 ────────────────────────────────────────────────────────────────
const CHIPS = [
  { Icon: Clock,  label: 'Timp de calitate fără ecrane', left: 128, top: 440, border: 'rgba(66,126,62,0.3)'  },
  { Icon: Map,    label: 'Explorare în mediu sigur',      left: 420, top: 440, border: 'rgba(66,126,62,0.3)'  },
  { Icon: Users,  label: 'Socializare autentică',         left: 128, top: 518, border: 'rgba(66,126,62,0.3)'  },
  { Icon: Smile,  label: 'Bucurie pură, nefiltrată',      left: 420, top: 518, border: 'rgba(66,126,62,0.3)'  },
];

export function Section2() {
  return (
    <Canvas height={752} style={{ backgroundColor: '#0e272c', overflow: 'hidden' }}>

      <h2 style={{
        position: 'absolute', left: 128, top: 180, width: 540,
        fontFamily: "'Quicksand',sans-serif", fontWeight: 700,
        fontSize: 36, lineHeight: '40px', color: '#f4f0cd',
      }}>Copiii de astăzi au nevoie de mai mult decât un ecran.</h2>

      <p style={{
        position: 'absolute', left: 128, top: 284, width: 549,
        fontFamily: "'Inter',sans-serif", fontWeight: 400,
        fontSize: 18, lineHeight: '29px', color: 'rgba(255,255,255,0.8)',
      }}>
        Majoritatea copiilor petrec tot mai mult timp în spații închise, deconectați de lumea reală. La Pilgrims, credem că dezvoltarea adevărată vine din experiențe tangibile: pământ sub tălpi, aer curat în plămâni și prietenii legate la foc de tabără.
      </p>

      {CHIPS.map(({ Icon, label, left, top, border }) => (
        <div key={label} style={{
          position: 'absolute', left, top, width: 268, height: 54,
          backgroundColor: '#0e272c', border: `1px solid ${border}`,
          borderRadius: 14,
          display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 16,
        }}>
          <Icon size={20} color="#5ca148" strokeWidth={2} />
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, color: '#f4f0cd', whiteSpace: 'nowrap' }}>{label}</span>
        </div>
      ))}

      <div style={{
        position: 'absolute', left: 752, top: 96, width: 560, height: 560,
        borderRadius: 14, overflow: 'hidden',
        boxShadow: '0px 25px 50px rgba(0,0,0,0.25)',
      }}>
        <img src={IMG_S2_PHOTO} alt="Copil cu binoclu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{
        position: 'absolute', left: 722, top: 562, width: 228, height: 124,
        backgroundColor: '#427e3e', borderRadius: 14,
        boxShadow: '0px 8.5px 13.75px rgba(23,26,31,0.22)',
        padding: '24px 32px',
      }}>
        <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: '#ffffff' }}>100%</p>
        <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#f4f0cd', textTransform: 'uppercase', letterSpacing: '0.7px', marginTop: 8, width: 109 }}>Prezență în prezent</p>
      </div>
    </Canvas>
  );
}

// ─── SECTION 3 — CITAT ────────────────────────────────────────────────────────
export function Section3() {
  const scale = useScale();
  return (
    <div style={{
      width: '100%', backgroundColor: '#0e272c',
      borderTop: '1px solid rgba(244,240,205,0.15)',
      borderBottom: '1px solid rgba(244,240,205,0.15)',
      position: 'relative', overflow: 'visible',
      height: 548 * scale,
    }}>
      <div style={{
        position: 'absolute', left: 'calc(50% - 944px)', top: -639,
        width: 1063, height: 1063, opacity: 0.3, pointerEvents: 'none', zIndex: 0,
      }}>
        <img src={IMG_CAMP_DECOR} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{
        position: 'absolute',
        width: CANVAS,
        height: 548,
        left: `calc(50% - ${CANVAS_HALF}px)`,
        top: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 1,
        transformOrigin: 'top center',
        transform: `scale(${scale})`,
      }}>
        <Heart size={48} color="#5ca148" strokeWidth={1.5} style={{ marginBottom: 22 }} />
        <h2 style={{
          width: 845, textAlign: 'center',
          fontFamily: "'Quicksand',sans-serif", fontWeight: 700,
          fontSize: 48, lineHeight: '52px', color: '#f4f0cd',
          marginBottom: 24,
        }}>
          "La Pilgrims credem că educația nu se întâmplă doar în clasă, ci în fiecare moment de explorare."
        </h2>
        <p style={{
          width: 636, textAlign: 'center',
          fontFamily: "'Inter',sans-serif", fontWeight: 500,
          fontSize: 20, lineHeight: '33px', color: 'rgba(244,240,205,0.8)',
        }}>
          Misiunea noastră este să oferim fiecărui copil contextul în care să crească frumos, în ritmul său, înconjurat de grijă, profesionalism și inspirație.
        </p>
      </div>
    </div>
  );
}

// ─── SECTION 4 — EXPERIENȚE ───────────────────────────────────────────────────
const EXP_CARDS = [
  { Icon: TreePine, title: 'Drumeții și explorări',   desc: 'Descoperim tainele pădurii, învățăm să respectăm natura și să ne orientăm folosind indicii naturale.', border: 'rgba(66,126,62,0.3)'  },
  { Icon: Smile,    title: 'Dezvoltare personală',    desc: 'Ateliere ghidate care pun accent pe emoții, autocunoaștere și exprimarea creativității proprii.', border: 'rgba(92,162,73,0.2)'  },
  { Icon: PawPrint, title: 'Interacțiune cu animale', desc: 'Copiii învață responsabilitatea și empatia prin îngrijirea și joaca cu animăluțele domestice de la fermă.', border: 'rgba(66,126,62,0.3)'  },
  { Icon: Users,    title: 'Jocuri de echipă',        desc: 'Activități în aer liber care consolidează colaborarea, leadership-ul și comunicarea asertivă între copii.', border: 'rgba(66,126,62,0.3)'  },
  { Icon: BookOpen, title: 'Seri de povești',         desc: 'Momente de liniște, mini-spectacole și legende povestite sub cerul înstelat pentru a stimula imaginația.', border: 'rgba(66,126,62,0.3)'  },
  { Icon: Flame,    title: 'Foc de tabără',           desc: 'Tradiția noastră favorită: strângerea în jurul focului pentru momente de comunitate autentică și cântece.', border: 'rgba(66,126,62,0.3)'  },
];

const COL_X = [128, 532, 937];
const ROW_Y = [274, 560];

export function Section4() {
  return (
    <Canvas
      height={912}
      style={{ background: 'linear-gradient(10.03deg, #0e272c 25.26%, #427e3e 100%)' }}
    >
      <p style={{
        position: 'absolute', left: 0, right: 0, top: 96,
        fontFamily: "'Quicksand',sans-serif", fontWeight: 700,
        fontSize: 36, lineHeight: '40px', color: '#f4f0cd', textAlign: 'center',
      }}>Ce experiențe trăiesc copiii?</p>

      <p style={{
        position: 'absolute', top: 152,
        left: (CANVAS - 605) / 2, width: 605,
        fontFamily: "'Inter',sans-serif", fontWeight: 400,
        fontSize: 18, lineHeight: '29px',
        color: 'rgba(244,240,205,0.7)', textAlign: 'center',
      }}>Fiecare zi la Pilgrims este o nouă aventură gândită să dezvolte abilități practice și emoționale.</p>

      {EXP_CARDS.map(({ Icon, title, desc, border }, i) => (
        <div key={title} style={{
          position: 'absolute',
          left: COL_X[i % 3], top: ROW_Y[Math.floor(i / 3)],
          width: 375, height: 256,
          backgroundColor: '#0e272c',
          border: `1px solid ${border}`,
          borderRadius: 12,
          padding: 32,
          boxShadow: '0px 1px 2.5px rgba(23,26,31,0.07)',
        }}>
          <div style={{
            width: 48, height: 48,
            backgroundColor: '#0e272c',
            border: '1px solid rgba(244,240,205,0.5)',
            borderRadius: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 24,
          }}>
            <Icon size={24} color="#f4f0cd" strokeWidth={1.5} />
          </div>
          <h3 style={{
            fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700,
            fontSize: 20, lineHeight: '28px', color: '#f4f0cd',
            marginBottom: 12, whiteSpace: 'nowrap',
          }}>{title}</h3>
          <p style={{
            fontFamily: "'Inter',sans-serif", fontWeight: 400,
            fontSize: 16, lineHeight: '26px', color: 'rgba(255,255,255,0.7)',
            maxWidth: 303,
          }}>{desc}</p>
        </div>
      ))}
    </Canvas>
  );
}

// ─── SECTION 5 — BENEFICII ────────────────────────────────────────────────────
const KIDS_CARDS = [
  { title: 'Încredere în sine',  desc: 'Depășirea micilor provocări zilnice.',        left: 128, top: 185, w: 272, h: 132 },
  { title: 'Autonomie',          desc: 'Responsabilitate pentru propriile decizii.',   left: 424, top: 185, w: 272, h: 132 },
  { title: 'Colaborare',         desc: 'Abilități de lucru în echipă.',               left: 128, top: 341, w: 272, h: 109 },
  { title: 'Curaj',              desc: 'Dorința de a încerca lucruri noi.',           left: 424, top: 341, w: 272, h: 109 },
  { title: 'Conexiune',          desc: 'Respect profund pentru mediul înconjurător.', left: 128, top: 474, w: 272, h: 132 },
  { title: 'Echilibru',          desc: 'Gestionarea sănătoasă a emoțiilor.',          left: 424, top: 474, w: 272, h: 132 },
];

const PARENT_CARDS = [
  { Icon: Users,      title: 'Echipă experimentată',  desc: 'Personal empatic și instruit pentru siguranța copiilor.',   top: 185 },
  { Icon: ShieldCheck,title: 'Cadru sigur',            desc: 'Organizare minuțioasă și supraveghere constantă.',          top: 309 },
  { Icon: Smartphone, title: 'Comunicare constantă',  desc: 'Update-uri zilnice și poze pe grupul de WhatsApp.',         top: 433 },
  { Icon: Heart,      title: 'Liniște sufletească',   desc: 'Știi că cel mic este fericit și învață lucruri valoroase.', top: 557 },
];

export function Section5() {
  const ref = useRef(null);
  const [parallax, setParallax] = useState(0);
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2) - window.innerHeight / 2;
      setParallax(offset * 0.18);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div ref={ref} style={{
      position: 'relative',
      backgroundColor: '#0e272c',
      borderTop: '1px solid rgba(244,240,205,0.1)',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }}>
        <img src={IMG_KIDS_MASK} alt="" style={{
          width: '100%', height: '120%', objectFit: 'cover', display: 'block',
          transform: `translateY(${parallax}px)`,
          willChange: 'transform',
        }} />
      </div>
    <Canvas height={761} style={{ backgroundColor: 'transparent' }}>

      {/* ── PENTRU COPII ── */}
      <div style={{ position: 'absolute', left: 128, top: 97, width: 48, height: 48, backgroundColor: '#5ca148', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Compass size={24} color="#ffffff" strokeWidth={2} />
      </div>
      <p style={{ position: 'absolute', left: 192, top: 103, fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: '#f4f0cd', whiteSpace: 'nowrap' }}>Pentru Copii</p>

      {KIDS_CARDS.map(({ title, desc, left, top, w, h }) => (
        <div key={title} style={{
          position: 'absolute', left, top, width: w, height: h,
          backgroundColor: '#0e272c', border: '1px solid rgba(92,161,72,0.3)',
          borderRadius: 12, padding: 24,
        }}>
          <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#5ca148', marginBottom: 8, whiteSpace: 'nowrap' }}>{title}</p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '23px', color: 'rgba(92,161,72,0.7)' }}>{desc}</p>
        </div>
      ))}

      {/* ── PENTRU PĂRINȚI ── */}
      <div style={{ position: 'absolute', left: 744, top: 97, width: 48, height: 48, backgroundColor: '#427e3e', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ShieldCheck size={24} color="#ffffff" strokeWidth={2} />
      </div>
      <p style={{ position: 'absolute', left: 808, top: 103, fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: '#f4f0cd', whiteSpace: 'nowrap' }}>Pentru Părinți</p>

      {PARENT_CARDS.map(({ Icon, title, desc, top }) => (
        <div key={title} style={{
          position: 'absolute', left: 744, top, width: 568, height: 108,
          backgroundColor: 'rgba(66,126,62,0.1)', border: '1px solid rgba(66,126,62,0.3)',
          borderRadius: 14, display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px',
        }}>
          <div style={{ width: 48, height: 48, flexShrink: 0, backgroundColor: '#f4f0cd', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={24} color="#0e272c" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#f4f0cd', marginBottom: 4, whiteSpace: 'nowrap' }}>{title}</p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: 'rgba(244,240,205,0.7)', whiteSpace: 'nowrap' }}>{desc}</p>
          </div>
        </div>
      ))}
    </Canvas>
    </div>
  );
}

// ─── SECTION 6 — ORGANIZARE + VALORI ─────────────────────────────────────────
const CAMP_ROWS = [
  { label: 'Vârstă',  value: 'Copii între 5 și 12 ani',        top: 256 },
  { label: 'Grupe',   value: 'Activități adaptate pe vârstă',  top: 321 },
  { label: 'Durată',  value: '6 zile (standard)',               top: 386 },
  { label: 'Ritm',    value: 'Ajustat după nevoile grupului',   top: 451 },
];

const VALUES = [
  { title: 'Dezvoltare holistică',  desc: 'Nu ne oprim la activități fizice, ci vizăm mintea, corpul și sufletul.',  col: 0, row: 0 },
  { title: 'Responsabilitate',      desc: 'Avem grijă de cel mic cu cel mai înalt grad de profesionalism.',          col: 1, row: 0 },
  { title: 'Respect pentru familie',desc: 'Încurajăm valorile învățate acasă și individualitatea fiecărui copil.',  col: 0, row: 1 },
  { title: 'Grijă autentică',       desc: 'Suntem mentori și prieteni, oferind un mediu cald și protector.',        col: 1, row: 1 },
  { title: 'Creativitate',          desc: 'Inspirăm imaginația prin jocuri care nu au limite.',                     col: 0, row: 2 },
  { title: 'Respect pentru natură', desc: 'Mișcare și protejarea mediului sunt baza filozofiei noastre.',          col: 1, row: 2 },
];

const VAL_COL_X = [624, 1020];
const VAL_ROW_Y = [269, 391, 513];

export function Section6() {
  return (
    <Canvas
      height={716}
      style={{
        backgroundColor: '#0e272c',
        borderTop: '1px solid rgba(244,240,205,0.1)',
        overflow: 'hidden',
      }}
    >
      <h2 style={{
        position: 'absolute', left: 128, top: 136, width: 341,
        fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700,
        fontSize: 36, lineHeight: '40px', color: '#f4f0cd',
      }}>Cum sunt organizate taberele?</h2>

      {CAMP_ROWS.map(({ label, value, top }) => (
        <div key={label} style={{
          position: 'absolute', left: 128, top, width: 344, height: 41,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          borderBottom: '1px solid rgba(244,240,205,0.15)',
        }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 16, lineHeight: '24px', color: 'rgba(255,255,255,0.7)' }}>{label}</span>
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#5ca148' }}>{value}</span>
        </div>
      ))}

      <a href="/program_tabere_2026.pdf" target="_blank" rel="noopener noreferrer" style={{
        position: 'absolute', left: 128, top: 540, width: 344, height: 56,
        backgroundColor: 'transparent',
        border: '2px solid #5ca148', borderRadius: 28,
        fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 16, color: '#5ca148',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>Descarcă programul complet</a>

      {/* ── DREAPTA — Valori ── */}
      <h2 style={{
        position: 'absolute', left: 568, top: 136,
        fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700,
        fontSize: 36, lineHeight: '40px', color: '#f4f0cd', whiteSpace: 'nowrap',
      }}>Valorile Pilgrims</h2>
      <p style={{
        position: 'absolute', left: 568, top: 192,
        fontFamily: "'Inter',sans-serif", fontWeight: 400,
        fontSize: 18, lineHeight: '29px', color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap',
      }}>Principiile care ne ghidează în fiecare interacțiune cu copilul tău.</p>

      {/* Linii verticale separator — left:570 și left:966 */}
      {[570, 966].map(x => (
        <div key={x} style={{
          position: 'absolute', left: x, top: 269,
          width: 4, height: 82 * 3 + 20,
          backgroundColor: 'rgba(244,240,205,0.12)',
          borderRadius: 2,
        }} />
      ))}

      {/* 6 valori — grid 2col × 3row, cu Sparkles icon */}
      {VALUES.map(({ title, desc, col, row }) => (
        <div key={title} style={{
          position: 'absolute',
          left: VAL_COL_X[col],
          top: VAL_ROW_Y[row],
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <Sparkles size={20} color="#5ca148" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 4 }} />
            <div>
              <p style={{
                fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700,
                fontSize: 18, lineHeight: '28px', color: '#f4f0cd',
                marginBottom: 4, whiteSpace: 'nowrap',
              }}>{title}</p>
              <p style={{
                fontFamily: "'Inter',sans-serif", fontWeight: 400,
                fontSize: 14, lineHeight: '23px', color: 'rgba(255,255,255,0.7)',
                maxWidth: 289,
              }}>{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </Canvas>
  );
}

// ─── SECTION 7 — TESTIMONIALE ─────────────────────────────────────────────────
const TESTIMONIALS = [
  { quote: '"Am organizat o excursie de vis pentru copii împreună cu Pilgrims. Faptul că fetele Pilgrims au fost empatice și au răspuns nevoilor copiilor cu răbdare și blândețe, a făcut o mare diferență pentru noi educatoarele. Am fost liniștite și am reușit să ne distrăm de minune cu micuții noștri. Ne-am întors cu mic cu mare cu o experiență minunată. Abia așteptăm următoarea ieșire."', name: 'Marie Madeleine Olteanu', role: 'Educatoare', photo: '/testi_marie.jpg', left: 128 },
  { quote: '"Am avut o experiență foarte frumoasă alături de echipa Pilgrims! Organizează excursii pentru preșcolari și școlari într-un mod foarte bine pus la punct, iar monitorii sunt extrem de implicați și atenți la toate nevoile copiilor. Pe tot parcursul activităților, copiii au fost în siguranță, bine supravegheați și mereu antrenați în jocuri și activități interesante. Recomand cu drag această echipă!"', name: 'Danny Petrut Nicola', role: 'Părinte', photo: '/testi_danny.jpg', left: 532 },
  { quote: '"O excursie de 1 zi — cea mai tare zi! Am avut plăcerea să cunoaștem o echipă extraordinară, implicată și mereu gata să ajute. Entuziasmul lor este contagios, iar grija pentru copii și siguranța lor, excepțională. Mă bucur tare că v-am descoperit, Pilgrims! Așteptăm cu nerăbdare următoarea excursie. Mulțumim din suflet!"', name: 'Nicolescu Alexandra', role: 'Părinte', photo: '/testi_alexandra.jpg', left: 937 },
];

export function Section7() {
  return (
    <Canvas
      height={649}
      style={{
        background: 'linear-gradient(10.45deg, #427e3e 5.49%, #0e272c 68.77%)',
        borderTop: '1px solid rgba(244,240,205,0.15)',
        overflow: 'visible',
      }}
    >
      <p style={{
        position: 'absolute', left: 0, right: 0, top: 97,
        fontFamily: "'Quicksand',sans-serif", fontWeight: 700,
        fontSize: 36, lineHeight: '40px', color: '#f4f0cd', textAlign: 'center',
      }}>Ce spun părinții Pilgrims?</p>

      <p style={{
        position: 'absolute', left: 0, right: 0, top: 153,
        fontFamily: "'Inter',sans-serif", fontWeight: 400,
        fontSize: 18, lineHeight: '29px', color: 'rgba(255,255,255,0.7)', textAlign: 'center',
      }}>Încrederea părinților este cel mai valoros certificat al nostru.</p>

      {TESTIMONIALS.map(({ quote, name, role, photo, left }) => (
        <div key={name} style={{
          position: 'absolute', left, top: 246,
          width: 375, height: 307,
          backgroundColor: '#0e272c',
          border: '1px solid rgba(66,126,62,0.3)',
          borderRadius: 12,
          padding: '40px 40px 32px',
          overflow: 'visible',
        }}>
          <div style={{
            position: 'absolute', top: -22, left: 32,
            width: 44, height: 44,
            backgroundColor: '#427e3e', borderRadius: 22,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Quote size={20} color="#ffffff" strokeWidth={2} />
          </div>
          <p style={{
            fontFamily: "'Inter',sans-serif", fontStyle: 'italic',
            fontWeight: 400, fontSize: 18, lineHeight: '29px',
            color: '#f4f0cd', marginBottom: 24, maxWidth: 295,
          }}>{quote}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 9999, overflow: 'hidden', flexShrink: 0 }}>
              <img src={photo} alt={name} style={{ width: '100%', height: '150%', objectFit: 'cover', marginTop: '-25%' }} />
            </div>
            <div>
              <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#f4f0cd', whiteSpace: 'nowrap' }}>{name}</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 12, lineHeight: '18px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{role}</p>
            </div>
          </div>
        </div>
      ))}
    </Canvas>
  );
}

// ─── CTA FINAL ────────────────────────────────────────────────────────────────
export function SectionCTA() {
  return (
    <Canvas height={712} style={{ backgroundColor: '#0e272c', overflow: 'hidden' }}>
      {/* Personaj — extins deasupra cardului, blenduit cu background-ul */}
      <div style={{
        position: 'absolute', left: 0, top: 20,
        width: 560, height: 650, opacity: 0.85, pointerEvents: 'none',
        zIndex: 2,
        WebkitMaskImage: 'linear-gradient(to right, black 40%, transparent 90%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)',
        WebkitMaskComposite: 'intersect',
        maskImage: 'linear-gradient(to right, black 40%, transparent 90%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)',
        maskComposite: 'intersect',
      }}>
        <img src={IMG_CTA_CHAR} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Card interior — left:208 top:128 w:1024 h:456 radius:48 */}
      <div style={{
        position: 'absolute', left: 208, top: 128, width: 1024, height: 456,
        backgroundColor: '#0e272c', borderRadius: 48, overflow: 'hidden',
        boxShadow: '0px 25px 50px rgba(0,0,0,0.25)',
      }}>
        <div style={{ position: 'absolute', top: -64, right: 32, width: 256, height: 256, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 128, filter: 'blur(64px)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: -64, width: 256, height: 256, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 128, filter: 'blur(64px)' }} />

        {/* Titlu — centrat top:70, w:831, 48px */}
        <p style={{
          position: 'absolute', top: 70,
          left: (1024 - 831) / 2, width: 831,
          fontFamily: "'Quicksand',sans-serif", fontWeight: 700,
          fontSize: 48, lineHeight: '52px', color: '#f4f0cd', textAlign: 'center',
        }}>Oferă copilului tău o experiență care îl ajută să crească frumos.</p>

        {/* Subtitlu — centrat top:200, w:663, 24px */}
        <p style={{
          position: 'absolute', top: 200,
          left: (1024 - 663) / 2, width: 663,
          fontFamily: "'Inter',sans-serif", fontWeight: 300,
          fontSize: 24, lineHeight: '32px', color: 'rgba(244,240,205,0.9)', textAlign: 'center',
        }}>Locurile în taberele Pilgrims se ocupă rapid. Rezervă acum un loc și fii parte din povestea noastră de creștere.</p>

        {/* Buton alb — left:257 top:312 w:240 h:64 */}
        <a href="https://www.facebook.com/reel/1659221595082500" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute', left: 257, top: 312, width: 240, height: 64,
          backgroundColor: '#ffffff', borderRadius: 32,
          fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 20, color: '#1c62a8',
          boxShadow: '0px 4px 7px rgba(23,26,31,0.13)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>Rezervă un loc</a>

        {/* Link text cu săgeată — left:528 top:330 */}
        <a href="/program_tabere_2026.pdf" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute', left: 528, top: 330,
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 18, color: '#ffffff',
          whiteSpace: 'nowrap',
        }}>
          <span>Vezi taberele disponibile</span>
          <ArrowRight size={20} color="#ffffff" strokeWidth={2} />
        </a>
      </div>
    </Canvas>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export function Footer() {
  const scale = useScale();
  // Footer height: padding 81+40=121px top+bottom + content ~300px ≈ 420px
  const FOOTER_H = 420;
  return (
    <div style={{ width: '100%', backgroundColor: '#0e272c', borderTop: '1px solid rgba(244,240,205,0.15)', height: FOOTER_H * scale, overflow: 'hidden', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        width: CANVAS,
        left: `calc(50% - ${CANVAS_HALF}px)`,
        top: 0,
        padding: '81px 128px 40px',
        transformOrigin: 'top center',
        transform: `scale(${scale})`,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>

          {/* Brand col */}
          <div style={{ flex: '0 0 230px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <img src={IMG_LOGO} alt="Pilgrims" style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: '50%' }} />
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 20, lineHeight: '30px', color: '#5ca148' }}>Pilgrims</span>
            </div>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '23px', color: 'rgba(255,255,255,0.7)', width: 230 }}>
              Tabere educaționale pentru o copilărie autentică, trăită în ritmul naturii și al curiozității.
            </p>
          </div>

          {/* Navigare col */}
          <div style={{ flex: 1, paddingLeft: 80 }}>
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 12, color: '#5ca148', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: 20 }}>Navigare</p>
            {[
              { label: 'Acasă',      href: '/' },
              { label: 'Activități', href: '#experiente' },
              { label: 'Beneficii',  href: '#beneficii' },
              { label: 'Valori',     href: '#valori' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{ display: 'block', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, lineHeight: '21px', color: '#f4f0cd', marginBottom: 12 }}>{label}</a>
            ))}
          </div>

          {/* Contact col */}
          <div style={{ flex: 1, paddingLeft: 80 }}>
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 12, color: '#5ca148', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: 20 }}>Contact</p>
            <a href="mailto:infocontact.pilgrims@gmail.com" style={{ display: 'block', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, lineHeight: '21px', color: 'rgba(244,240,205,0.9)', marginBottom: 12 }}>infocontact.pilgrims@gmail.com</a>
            <a href="tel:0769037702" style={{ display: 'block', fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, lineHeight: '21px', color: '#f4f0cd', marginBottom: 12 }}>0769 037 702</a>
            <p style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 14, lineHeight: '21px', color: '#f4f0cd', marginBottom: 12 }}>Timișoara, România</p>
          </div>

          {/* Social col */}
          <div style={{ flex: 1, paddingLeft: 80 }}>
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 12, color: '#5ca148', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: 20 }}>Social</p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { Icon: Facebook,  href: 'https://www.facebook.com/PilgrimsTM' },
                { Icon: Instagram, href: 'https://www.instagram.com/pilgrims_ro/' },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                  width: 40, height: 40, backgroundColor: '#0e272c',
                  border: '1px solid rgba(66,126,62,0.3)', borderRadius: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color="#f4f0cd" strokeWidth={1.5} />
                </a>
              ))}
              <a href="https://www.tiktok.com/@pilgrims.ro?_r=1&_t=ZN-95auEazNbE6" target="_blank" rel="noopener noreferrer" style={{
                width: 40, height: 40, backgroundColor: '#0e272c',
                border: '1px solid rgba(66,126,62,0.3)', borderRadius: 20,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <TikTokIcon size={18} />
              </a>
              <a href="https://youtube.com/@pilgrimsro?si=AUmqTSiVuWvnr6V5" target="_blank" rel="noopener noreferrer" style={{
                width: 40, height: 40, backgroundColor: '#0e272c',
                border: '1px solid rgba(66,126,62,0.3)', borderRadius: 20,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <YouTubeIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 60, paddingTop: 20, borderTop: '1px solid rgba(244,240,205,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            © 2026 Pilgrims Education. Toate drepturile rezervate.
          </span>
          <div style={{ display: 'flex', gap: 40 }}>
            <a href="/legal#termeni" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.6px' }}>Termeni și condiții</a>
            <a href="/legal#confidentialitate" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.6px' }}>Politica de confidențialitate</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGINA DESKTOP COMPLETĂ ──────────────────────────────────────────────────
export default function DesktopPage() {
  return (
    <div style={{ backgroundColor: '#0e272c', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Section2 />
      <Section3 />
      <div id="experiente"><Section4 /></div>
      <div id="beneficii"><Section5 /></div>
      <div id="valori"><Section6 /></div>
      <Section7 />
      <SectionCTA />
      <Footer />
    </div>
  );
}
