import React, { useState, useEffect, useRef } from 'react';
import {
  TreePine, Clock, Map, Users, Smile, PawPrint,
  BookOpen, Flame, Compass, ShieldCheck, Smartphone,
  Heart, Quote, Sparkles, ArrowRight,
  Facebook, Instagram, Menu, Mail, Phone, MapPin
} from 'lucide-react';

const TikTokIcon = ({ size = 16, color = '#f4f0cd' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z"/>
  </svg>
);

const YouTubeIcon = ({ size = 16, color = '#f4f0cd' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
import {
  IMG_LOGO_M, IMG_HERO_BG_M, IMG_S2_PHOTO_M, IMG_CAMP_DECOR_M,
  IMG_CTA_CHAR_M, IMG_TESTI_M1, IMG_TESTI_M2, IMG_TESTI_M3,
  IMG_KIDS_MASK
} from '../assets';

const EXP_CARDS = [
  { Icon: TreePine, title: 'Drumeții și explorări',   desc: 'Descoperim tainele pădurii, învățăm să respectăm natura și să ne orientăm folosind indicii naturale.',      border: 'rgba(66,126,62,0.3)' },
  { Icon: Heart,    title: 'Dezvoltare personală',    desc: 'Ateliere ghidate care pun accent pe emoții, autocunoaștere și exprimarea creativității proprii.',             border: 'rgba(92,162,73,0.2)' },
  { Icon: PawPrint, title: 'Interacțiune cu animale', desc: 'Copiii învață responsabilitatea și empatia prin îngrijirea și joaca cu animăluțele domestice de la fermă.',  border: 'rgba(66,126,62,0.3)' },
  { Icon: Users,    title: 'Jocuri de echipă',        desc: 'Activități în aer liber care consolidează colaborarea, leadership-ul și comunicarea asertivă între copii.',   border: 'rgba(92,162,73,0.2)' },
  { Icon: BookOpen, title: 'Seri de povești',         desc: 'Momente de liniște, mini-spectacole și legende povestite sub cerul înstelat pentru a stimula imaginația.',    border: 'rgba(66,126,62,0.3)' },
  { Icon: Flame,    title: 'Foc de tabără',           desc: 'Tradiția noastră favorită: strângerea în jurul focului pentru momente de comunitate autentică și cântece.',   border: 'rgba(92,161,72,0.2)' },
];

const KIDS_ITEMS = [
  { title: 'Încredere în sine',   desc: 'Depășirea micilor provocări zilnice.' },
  { title: 'Autonomie',           desc: 'Responsabilitate pentru propriile decizii.' },
  { title: 'Colaborare',          desc: 'Abilități de lucru în echipă.' },
  { title: 'Curaj',               desc: 'Dorința de a încerca lucruri noi.' },
  { title: 'Conexiune',           desc: 'Respect profund pentru mediul înconjurător.' },
  { title: 'Echilibru',           desc: 'Gestionarea sănătoasă a emoțiilor.' },
];

const PARENT_ITEMS = [
  { Icon: Users,       title: 'Echipă experimentată',  desc: 'Personal empatic și instruit pentru siguranța copiilor.' },
  { Icon: ShieldCheck, title: 'Cadru sigur',            desc: 'Organizare minuțioasă și supraveghere constantă.' },
  { Icon: Smartphone,  title: 'Comunicare constantă',  desc: 'Update-uri zilnice și poze pe grupul de WhatsApp.' },
  { Icon: Heart,       title: 'Liniște sufletească',   desc: 'Știi că cel mic este fericit și învață lucruri valoroase.' },
];

const CAMP_INFO = [
  { label: 'Vârstă',  value: 'Copii între 5 și 12 ani' },
  { label: 'Grupe',   value: 'Activități adaptate pe vârstă' },
  { label: 'Durată',  value: '6 zile (standard)' },
  { label: 'Ritm',    value: 'Ajustat după nevoile grupului' },
];

const VALUES = [
  { title: 'Dezvoltare holistică',   desc: 'Nu ne oprim la activități fizice, ci vizăm mintea, corpul și sufletul.' },
  { title: 'Responsabilitate',       desc: 'Avem grijă de cel mic cu cel mai înalt grad de profesionalism.' },
  { title: 'Respect pentru familie', desc: 'Încurajăm valorile învățate acasă și individualitatea fiecărui copil.' },
  { title: 'Grijă autentică',        desc: 'Suntem mentori și prieteni, oferind un mediu cald și protector.' },
  { title: 'Creativitate',           desc: 'Inspirăm imaginația prin jocuri care nu au limite.' },
  { title: 'Respect pentru natură',  desc: 'Mișcare și protejarea mediului sunt baza filozofiei noastre.' },
];

const TESTIMONIALS = [
  { quote: '"Maria s-a întors din tabără mai încrezătoare și mai responsabilă. Ne-au plăcut enorm pozele zilnice și faptul că am știut mereu că este pe mâini bune."', name: 'Elena Constantinescu', role: 'Mama Mariei (8 ani)', photo: IMG_TESTI_M1 },
  { quote: '"Prima tabără pentru Andrei a fost o reușită totală. N-a vrut să mai plece acasă! Echipa Pilgrims are un mod magic de a se conecta cu cei mici."', name: 'Radu Ionescu', role: 'Tatăl lui Andrei (6 ani)', photo: IMG_TESTI_M2 },
  { quote: '"Recomand din tot sufletul. Valorile pe care le promovează Pilgrims sunt exact ce căutam pentru fetița mea: respect, creativitate și multă mișcare."', name: 'Simona Popescu', role: 'Mama Ioanei (10 ani)', photo: IMG_TESTI_M3 },
];

const s = {
  // Typography helpers
  quickBold: (size, lh, color) => ({ fontFamily: "'Quicksand',sans-serif", fontWeight: 700, fontSize: size, lineHeight: lh, color }),
  inter: (w, size, lh, color) => ({ fontFamily: "'Inter',sans-serif", fontWeight: w, fontSize: size, lineHeight: lh, color }),
  montBold: (size, lh, color) => ({ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: size, lineHeight: lh, color }),
};

function Section5Beneficii() {
  const ref = useRef(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // how far the section center is from the viewport center
      const offset = (rect.top + rect.height / 2) - windowH / 2;
      setParallax(offset * 0.2);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', backgroundColor: '#0e272c', padding: '65px 35px 60px', borderTop: '1px solid rgba(244,240,205,0.1)', overflow: 'hidden' }}>
      {/* Background parallax */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }}>
        <img
          src={IMG_KIDS_MASK}
          alt=""
          style={{
            width: '100%', height: '120%', objectFit: 'cover', display: 'block',
            transform: `translateY(${parallax}px)`,
            willChange: 'transform',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Pentru Copii */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 36, height: 36, backgroundColor: '#5ca148', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={20} color="#ffffff" strokeWidth={2} />
          </div>
          <span style={s.montBold(24, '32px', '#f3f4f6')}>Pentru Copii</span>
        </div>
        {KIDS_ITEMS.map(({ title, desc }) => (
          <div key={title} style={{
            backgroundColor: 'rgba(14,39,44,0.85)', border: '1px solid rgba(92,162,73,0.2)',
            borderRadius: 16, height: 86, padding: '15px 16px', marginBottom: 12,
          }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 18, color: '#5ca148', marginBottom: 4 }}>{title}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'rgba(92,161,72,0.7)' }}>{desc}</div>
          </div>
        ))}

        {/* Pentru Părinți */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, marginTop: 48 }}>
          <div style={{ width: 36, height: 36, backgroundColor: '#5ca148', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Heart size={20} color="#ffffff" strokeWidth={2} />
          </div>
          <span style={s.montBold(24, '32px', '#f4f0cd')}>Pentru Părinți</span>
        </div>
        {PARENT_ITEMS.map(({ Icon, title, desc }) => (
          <div key={title} style={{
            backgroundColor: 'rgba(92,162,73,0.1)', border: '1px solid rgba(92,162,73,0.2)',
            borderRadius: 16, height: 120, padding: 20,
            display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16,
          }}>
            <div style={{ width: 36, height: 36, backgroundColor: '#f4f0cd', borderRadius: 10, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={20} color="#0e272c" strokeWidth={2} />
            </div>
            <div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#f4f0cd', marginBottom: 6 }}>{title}</div>
              <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '21px', color: 'rgba(244,240,205,0.7)' }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MobilePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: '#0e272c', overflowX: 'hidden' }}>

      {/* ── NAV — h:65 ── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        width: '100%', height: 65, zIndex: 100,
        backdropFilter: 'blur(6px)', backgroundColor: 'rgba(14,39,44,0.95)',
        borderBottom: '1px solid rgba(244,240,205,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 35px',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, overflow: 'hidden' }}>
            <img src={IMG_LOGO_M} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ ...s.montBold(20, '28px', '#5ca148'), letterSpacing: '-0.5px' }}>Pilgrims</span>
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          width: 40, height: 40, backgroundColor: 'transparent', border: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
        }}>
          <Menu size={24} color="#f4f0cd" strokeWidth={2} />
        </button>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 65, left: 0, right: 0,
          width: '100%', backgroundColor: '#0e272c', zIndex: 99,
          padding: '16px 35px', borderBottom: '1px solid rgba(244,240,205,0.1)',
        }}>
          {[
            { label: 'Experiențe', href: '#m-experiente' },
            { label: 'Beneficii',  href: '#m-beneficii' },
            { label: 'Valori',     href: '#m-valori' },
          ].map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '12px 0',
              ...s.inter(500, 16, '24px', '#f4f0cd'),
              borderBottom: '1px solid rgba(244,240,205,0.1)',
            }}>{label}</a>
          ))}
          <a href="tel:0769037702" onClick={() => setMenuOpen(false)} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 0',
            ...s.inter(500, 16, '24px', '#f4f0cd'),
            borderBottom: '1px solid rgba(244,240,205,0.1)',
          }}>
            <Phone size={16} color="#f4f0cd" strokeWidth={1.5} />
            <span>0769 037 702</span>
          </a>
          <a href="https://www.facebook.com/PilgrimsTM" target="_blank" rel="noopener noreferrer" style={{
            marginTop: 16, width: '100%', height: 48,
            backgroundColor: '#5ca148', borderRadius: 24,
            ...s.inter(700, 14, '20px', '#0e272c'),
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>Înscrie-te acum</a>
        </div>
      )}

      {/* ── HERO — h:650 ── */}
      <div style={{ position: 'relative', width: '100%', height: 650, marginTop: 65, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.7 }}>
          <img src={IMG_HERO_BG_M} alt="" style={{
            width: '100%', height: '120%', objectFit: 'cover', display: 'block',
            transform: `translateY(${scrollY * 0.25}px)`,
            willChange: 'transform',
          }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }} />

        {/* Badge — centrat top:80 */}
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 80,
          height: 34, paddingLeft: 16, paddingRight: 16,
          backdropFilter: 'blur(6px)', backgroundColor: 'rgba(244,240,205,0.2)',
          border: '1px solid rgba(244,240,205,0.3)', borderRadius: 17, overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap',
        }}>
          <span style={{ ...s.inter(600, 12, '22px', '#ffffff'), whiteSpace: 'nowrap' }}>Tabere Educaționale 5-12 ani</span>
        </div>

        {/* Titlu — centrat top:154 */}
        <div style={{ position: 'absolute', left: 0, right: 0, top: 154, textAlign: 'center' }}>
          <div style={s.quickBold(36, '40px', '#ffffff')}>Experiențe care</div>
          <div style={s.quickBold(36, '40px', '#f4f0cd')}>cresc oameni.</div>
        </div>

        {/* Subtitlu — centrat top:252 */}
        <p style={{
          position: 'absolute', top: 252, left: 35, right: 35,
          ...s.inter(300, 18, '25px', 'rgba(255,255,255,0.9)'), textAlign: 'center',
        }}>Tabere în natură unde jocul, explorarea și relațiile autentice devin parte din procesul de creștere a copilului tău.</p>

        {/* Buton primar */}
        <a href="https://www.facebook.com/reel/1659221595082500" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute', left: 35, right: 35, top: 380, height: 56,
          backgroundColor: '#5ca148', borderRadius: 28,
          ...s.inter(700, 16, '26px', '#ffffff'),
          boxShadow: '0px 8px 17px rgba(92,162,73,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>Descoperă taberele Pilgrims</a>

        {/* Buton secundar */}
        <a href="https://www.instagram.com/pilgrims_ro/" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute', left: 35, right: 35, top: 448, height: 56,
          backdropFilter: 'blur(2px)', backgroundColor: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.3)', borderRadius: 28,
          ...s.inter(400, 16, '26px', '#ffffff'),
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>Vezi activitățile</a>
      </div>

      {/* ── SECTION 2 — Problem ── */}
      <div style={{ backgroundColor: '#0e272c', padding: '48px 35px 32px' }}>
        {/* Foto 343×343 radius:16 */}
        <div style={{ width: '100%', height: 343, borderRadius: 16, overflow: 'hidden', boxShadow: '0px 17px 35px rgba(23,26,31,0.24)', marginBottom: 32 }}>
          <img src={IMG_S2_PHOTO_M} alt="Copii în natură" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Titlu — w:313 Quicksand Bold 30px */}
        <h2 style={{ width: '100%', ...s.quickBold(30, '35px', '#f4f0cd'), marginBottom: 24 }}>
          Copiii de astăzi au nevoie de mai mult decât un ecran.
        </h2>

        {/* Body text */}
        <p style={{ width: '100%', ...s.inter(400, 16, '24px', '#bdc1ca'), marginBottom: 32 }}>
          Majoritatea copiilor petrec tot mai mult timp în spații închise, deconectați de lumea reală. La Pilgrims, credem că dezvoltarea adevărată vine din experiențe tangibile: pământ sub tălpi, aer curat în plămâni și prietenii legate la foc de tabără.
        </p>

        {/* 4 chip-uri cu icoane Lucide */}
        {[
          { Icon: Clock,  label: 'Timp de calitate fără ecrane', border: 'rgba(66,126,62,0.3)' },
          { Icon: Map,    label: 'Explorare în mediu sigur',      border: 'rgba(92,162,73,0.2)' },
          { Icon: Users,  label: 'Socializare autentică',         border: 'rgba(66,126,62,0.3)' },
          { Icon: Smile,  label: 'Bucurie pură, nefiltrată',      border: 'rgba(92,162,73,0.2)' },
        ].map(({ Icon, label, border }) => (
          <div key={label} style={{
            width: '100%', height: 54,
            backgroundColor: '#0e272c', border: `1px solid ${border}`,
            borderRadius: 16, marginBottom: 12,
            display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 16,
            boxShadow: '0px 2px 5px rgba(23,26,31,0.09)',
          }}>
            <Icon size={20} color="#5ca148" strokeWidth={2} />
            <span style={{ ...s.inter(500, 14, '20px', '#f4f0cd'), whiteSpace: 'nowrap' }}>{label}</span>
          </div>
        ))}

        {/* Badge 100% — w:343 h:112 */}
        <div style={{
          width: '100%', height: 112, backgroundColor: '#427e3e', borderRadius: 10,
          padding: '23px 24px', boxShadow: '0px 8px 17px rgba(92,162,73,0.2)', marginTop: 12,
        }}>
          <div style={{ ...s.montBold(36, '40px', '#ffffff') }}>100%</div>
          <div style={{ ...s.inter(600, 14, '20px', '#f4f0cd'), textTransform: 'uppercase', letterSpacing: '0.7px' }}>Prezență în prezent</div>
        </div>
      </div>

      {/* ── SECTION 3 — Citat ── */}
      <div style={{ position: 'relative', backgroundColor: '#0e272c', padding: '25px 35px 60px', overflow: 'visible', borderTop: '1px solid rgba(244,240,205,0.1)' }}>
        <div style={{ position: 'absolute', left: -60, top: -220, width: 440, height: 440, opacity: 0.3, pointerEvents: 'none', zIndex: 0 }}>
          <img src={IMG_CAMP_DECOR_M} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, position: 'relative' }}>
          <Heart size={48} color="#5ca148" strokeWidth={1.5} />
        </div>
        <p style={{ position: 'relative', textAlign: 'center', ...s.quickBold(24, '30px', '#f4f0cd'), marginBottom: 24 }}>
          "La Pilgrims credem că educația nu se întâmplă doar în clasă, ci în fiecare moment de explorare."
        </p>
        <p style={{ position: 'relative', textAlign: 'center', ...s.inter(400, 16, '24px', '#f4f0cd') }}>
          Misiunea noastră este să oferim fiecărui copil contextul în care să crească frumos, în ritmul său, înconjurat de grijă, profesionalism și inspirație.
        </p>
      </div>

      {/* ── SECTION 4 — Experiențe ── */}
      <div id="m-experiente" style={{ background: 'linear-gradient(-19.46deg, #0e272c 30.96%, #427e3e 125.26%)', padding: '64px 35px', borderTop: '1px solid rgba(244,240,205,0.1)' }}>
        <h2 style={{ textAlign: 'center', ...s.quickBold(30, '36px', '#f4f0cd'), width: 333, margin: '0 auto 16px' }}>Ce experiențe trăiesc copiii?</h2>
        <p style={{ textAlign: 'center', ...s.inter(400, 16, '24px', '#f4f0cd'), width: 311, margin: '0 auto 40px' }}>
          Fiecare zi la Pilgrims este o nouă aventură gândită să dezvolte abilități practice și emoționale.
        </p>
        {EXP_CARDS.map(({ Icon, title, desc, border }) => (
          <div key={title} style={{
            width: '100%', backgroundColor: '#0e272c',
            border: `1px solid ${border}`, borderRadius: 10,
            padding: 23, marginBottom: 16, minHeight: 184,
            boxShadow: '0px 2px 5px rgba(23,26,31,0.09)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
              <div style={{
                width: 50, height: 50, backgroundColor: '#0e272c',
                border: '1px solid rgba(244,240,205,0.5)', borderRadius: 16, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={24} color="#f4f0cd" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600, fontSize: 20, lineHeight: '28px', color: '#f4f0cd', letterSpacing: '-0.5px' }}>{title}</h3>
            </div>
            <p style={{ fontFamily: "'Nunito Sans',sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#bdc1ca' }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* ── SECTION 5 — Beneficii ── */}
      <div id="m-beneficii"><Section5Beneficii /></div>

      {/* ── SECTION 6 — Organizare + Valori ── */}
      <div id="m-valori" style={{ backgroundColor: '#0e272c', padding: '64px 35px', borderTop: '1px solid rgba(244,240,205,0.1)' }}>
        <h2 style={{ textAlign: 'center', ...s.quickBold(30, '38px', '#f4f0cd'), marginBottom: 40 }}>Cum sunt organizate taberele?</h2>
        {CAMP_INFO.map(({ label, value }) => (
          <div key={label} style={{ paddingBottom: 24, marginBottom: 16, borderBottom: '1px solid rgba(244,240,205,0.1)' }}>
            <div style={{ ...s.inter(500, 14, '20px', '#bdc1ca'), marginBottom: 4 }}>{label}</div>
            <div style={{ ...s.inter(700, 16, '24px', '#5ca148') }}>{value}</div>
          </div>
        ))}
        <a href="/program_tabere_2026.pdf" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '100%', height: 56, backgroundColor: 'transparent',
          border: '2px solid #5ca148', borderRadius: 28,
          ...s.inter(700, 16, '26px', '#5ca148'), marginBottom: 48,
        }}>Descarcă programul complet</a>

        <h2 style={{ textAlign: 'center', ...s.quickBold(30, '38px', '#f4f0cd'), marginBottom: 12 }}>Valorile Pilgrims</h2>
        <p style={{ textAlign: 'center', ...s.inter(400, 16, '24px', '#bdc1ca'), width: 273, margin: '0 auto 32px' }}>
          Principiile care ne ghidează în fiecare interacțiune cu copilul tău.
        </p>
        {VALUES.map(({ title, desc }) => (
          <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 20 }}>
            <Sparkles size={16} color="#5ca148" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 6 }} />
            <div>
              <div style={{ ...s.inter(700, 18, '28px', '#f4f0cd'), marginBottom: 4 }}>{title}</div>
              <div style={{ ...s.inter(400, 14, '23px', '#bdc1ca') }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── SECTION 7 — Testimoniale ── */}
      <div style={{ background: 'linear-gradient(214.64deg, #0e272c 24.77%, #5ca148 128.08%)', padding: '65px 35px', borderTop: '1px solid rgba(244,240,205,0.1)' }}>
        <h2 style={{ textAlign: 'center', ...s.quickBold(30, '36px', '#f4f0cd'), width: 249, margin: '0 auto 12px' }}>Ce spun părinții Pilgrims?</h2>
        <p style={{ textAlign: 'center', ...s.inter(400, 16, '24px', '#bdc1ca'), width: 300, margin: '0 auto 40px' }}>
          Încrederea părinților este cel mai valoros certificat al nostru.
        </p>
        {TESTIMONIALS.map(({ quote, name, role, photo }) => (
          <div key={name} style={{
            position: 'relative', width: '100%', minHeight: 240,
            backgroundColor: '#0e272c', borderRadius: 10,
            padding: '32px 24px 24px', boxShadow: '0px 4px 9px rgba(23,26,31,0.11)',
            marginBottom: 32, overflow: 'visible',
          }}>
            {/* Badge citat top:-16 left:24 */}
            <div style={{
              position: 'absolute', top: -16, left: 24, width: 36, height: 36,
              backgroundColor: '#5ca148', borderRadius: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0px 8px 17px rgba(23,26,31,0.15)',
            }}>
              <Quote size={16} color="#ffffff" strokeWidth={2} />
            </div>
            <p style={{ ...s.inter(400, 15, '24px', '#f4f0cd'), fontStyle: 'italic', marginBottom: 20 }}>{quote}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 24, overflow: 'hidden', border: '2px solid rgba(92,162,73,0.2)', flexShrink: 0 }}>
                <img src={photo} alt={name} style={{ width: '150%', height: '100%', objectFit: 'cover', marginLeft: '-25%' }} />
              </div>
              <div>
                <div style={{ ...s.inter(700, 16, '24px', '#f4f0cd') }}>{name}</div>
                <div style={{ ...s.inter(600, 12, '16px', '#bdc1ca'), textTransform: 'uppercase', letterSpacing: '0.6px' }}>{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div style={{ backgroundColor: '#0e272c', paddingBottom: 60, paddingLeft: 35, paddingRight: 35 }}>
        {/* Imagine CTA — în flux normal deasupra cardului */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          pointerEvents: 'none',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)',
        }}>
          <img src={IMG_CTA_CHAR_M} alt="" style={{ width: 260, height: 240, objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{
          position: 'relative', backgroundColor: '#0e272c', borderRadius: 10, padding: 32,
          overflow: 'hidden', boxShadow: '0px 17px 35px rgba(23,26,31,0.24)',
          marginTop: -24,
        }}>
          <div style={{ position: 'absolute', top: -67, right: 0, width: 256, height: 256, backgroundColor: 'rgba(92,162,73,0.2)', borderRadius: 128, filter: 'blur(64px)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: -80, width: 256, height: 256, backgroundColor: 'rgba(92,162,73,0.15)', borderRadius: 128, filter: 'blur(64px)' }} />
          <h2 style={{ position: 'relative', textAlign: 'center', ...s.quickBold(30, '36px', '#f4f0cd'), width: '100%', margin: '0 auto 24px' }}>
            Oferă copilului tău o experiență care îl ajută să crească frumos.
          </h2>
          <p style={{ position: 'relative', textAlign: 'center', ...s.inter(400, 16, '22px', '#bdc1ca'), width: '100%', margin: '0 auto 32px' }}>
            Locurile în taberele Pilgrims se ocupă rapid. Rezervă acum un loc și fii parte din povestea noastră de creștere.
          </p>
          <a href="https://www.facebook.com/reel/1659221595082500" target="_blank" rel="noopener noreferrer" style={{
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '100%', height: 56, margin: '0 auto 12px',
            backgroundColor: '#ffffff', borderRadius: 28,
            fontFamily: "'Nunito Sans',sans-serif", fontWeight: 700, fontSize: 18, color: '#1c62a8',
            boxShadow: '0px 8px 17px rgba(92,162,73,0.2)',
          }}>Rezervă un loc</a>
          <a href="/program_tabere_2026.pdf" target="_blank" rel="noopener noreferrer" style={{
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            width: '100%', height: 56, margin: '0 auto',
            fontFamily: "'Nunito Sans',sans-serif", fontWeight: 600, fontSize: 16, color: '#f3f4f6',
          }}>
            <span>Vezi taberele disponibile</span>
            <ArrowRight size={16} color="#f3f4f6" strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ backgroundColor: '#0e272c', padding: '25px 35px 40px', borderTop: '1px solid rgba(244,240,205,0.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          <div style={{ width: 117, height: 117, borderRadius: 8, overflow: 'hidden' }}>
            <img src={IMG_LOGO_M} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <p style={{ textAlign: 'center', ...s.inter(400, 14, '20px', '#bdc1ca'), width: 250, margin: '0 auto 24px' }}>
          Tabere educaționale pentru o copilărie autentică, trăită în ritmul naturii și al curiozității.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <a href="mailto:infocontact.pilgrims@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Mail size={14} color="#bdc1ca" strokeWidth={1.5} />
            <span style={{ ...s.inter(400, 12, '20px', '#bdc1ca') }}>infocontact.pilgrims@gmail.com</span>
          </a>
          <a href="tel:0769037702" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Phone size={14} color="#bdc1ca" strokeWidth={1.5} />
            <span style={{ ...s.inter(400, 12, '20px', '#bdc1ca') }}>0769 037 702</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <MapPin size={14} color="#bdc1ca" strokeWidth={1.5} />
            <span style={{ ...s.inter(400, 12, '20px', '#bdc1ca') }}>Timișoara, România</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
          {[
            { Icon: Facebook,  href: 'https://www.facebook.com/PilgrimsTM' },
            { Icon: Instagram, href: 'https://www.instagram.com/pilgrims_ro/' },
          ].map(({ Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, backgroundColor: '#0e272c', border: '1px solid rgba(92,161,72,0.3)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={16} color="#f4f0cd" strokeWidth={1.5} />
            </a>
          ))}
          <a href="https://www.tiktok.com/@pilgrims.ro?_r=1&_t=ZN-95auEazNbE6" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, backgroundColor: '#0e272c', border: '1px solid rgba(92,161,72,0.3)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TikTokIcon size={16} />
          </a>
          <a href="https://youtube.com/@pilgrimsro?si=AUmqTSiVuWvnr6V5" target="_blank" rel="noopener noreferrer" style={{ width: 40, height: 40, backgroundColor: '#0e272c', border: '1px solid rgba(92,161,72,0.3)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <YouTubeIcon size={16} />
          </a>
        </div>
        <div style={{ borderTop: '1px solid rgba(244,240,205,0.1)', paddingTop: 16 }}>
          <a href="/legal#termeni" style={{ display: 'block', textAlign: 'center', ...s.inter(500, 10, '16px', '#bdc1ca'), textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 8 }}>Termeni și condiții</a>
          <a href="/legal#confidentialitate" style={{ display: 'block', textAlign: 'center', ...s.inter(500, 10, '16px', '#bdc1ca'), textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 8 }}>Politica de confidențialitate</a>
          <p style={{ textAlign: 'center', ...s.inter(500, 10, '16px', '#bdc1ca'), textTransform: 'uppercase', letterSpacing: '0.6px' }}>
            © 2026 Pilgrims Education. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </div>
  );
}
