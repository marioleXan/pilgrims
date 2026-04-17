import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IMG_LOGO } from '../assets';

const h1Style = {
  fontFamily: "'Quicksand', sans-serif", fontWeight: 700,
  fontSize: 42, lineHeight: '48px', color: '#f4f0cd',
  marginBottom: 24, marginTop: 0,
};

const h2Style = {
  fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700,
  fontSize: 22, lineHeight: '30px', color: '#5ca148',
  marginBottom: 12, marginTop: 40,
};

const pStyle = {
  fontFamily: "'Inter', sans-serif", fontWeight: 400,
  fontSize: 16, lineHeight: '27px', color: 'rgba(244,240,205,0.8)',
  marginBottom: 0, marginTop: 0,
};

const dividerStyle = {
  width: '100%', height: 1,
  backgroundColor: 'rgba(244,240,205,0.12)',
  margin: '64px 0',
};

export default function LegalPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(170deg, #427e3e 0%, #0e272c 30%)',
      paddingBottom: 80,
    }}>
      {/* Nav minimal */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        backdropFilter: 'blur(6px)',
        backgroundColor: 'rgba(14,39,44,0.9)',
        borderBottom: '1px solid rgba(244,240,205,0.12)',
        height: 68, display: 'flex', alignItems: 'center',
        padding: '0 40px',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={IMG_LOGO} alt="Pilgrims" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 20, color: '#5ca148' }}>Pilgrims</span>
        </a>
      </div>

      {/* Anchor links */}
      <div style={{
        maxWidth: 760, margin: '0 auto', padding: '48px 40px 0',
        display: 'flex', gap: 32,
      }}>
        <a href="#termeni" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, color: '#5ca148', borderBottom: '1px solid #5ca148', paddingBottom: 2 }}>
          Termeni și condiții
        </a>
        <a href="#confidentialitate" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, color: 'rgba(244,240,205,0.6)', paddingBottom: 2 }}>
          Politica de confidențialitate
        </a>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 40px 0' }}>

        {/* Termeni */}
        <section id="termeni">
          <h1 style={h1Style}>Termeni și condiții</h1>
          <p style={pStyle}>Bine ai venit pe site-ul Pilgrims. Utilizarea acestui site implică acceptarea termenilor și condițiilor de mai jos. Te rugăm să citești cu atenție acest document înainte de a continua navigarea.</p>

          <h2 style={h2Style}>1. Informații generale</h2>
          <p style={pStyle}>Site-ul https://pilgrims.ro/ este administrat de Pilgrims. Conținutul acestui site este destinat exclusiv informării utilizatorilor și prezentării serviciilor oferite.</p>

          <h2 style={h2Style}>2. Drepturi de autor</h2>
          <p style={pStyle}>Întregul conținut al site-ului, incluzând texte, imagini, elemente grafice și design, este protejat de legislația privind drepturile de autor și aparține Pilgrims sau partenerilor săi. Este interzisă copierea, distribuirea sau utilizarea acestora fără acordul prealabil scris.</p>

          <h2 style={h2Style}>3. Utilizarea site-ului</h2>
          <p style={pStyle}>Utilizatorii se obligă să utilizeze site-ul într-un mod legal, fără a afecta funcționarea acestuia sau drepturile altor utilizatori. Este interzisă utilizarea site-ului în scopuri frauduloase sau abuzive.</p>

          <h2 style={h2Style}>4. Limitarea răspunderii</h2>
          <p style={pStyle}>Pilgrims nu poate fi responsabil pentru eventuale erori sau omisiuni în conținutul site-ului și își rezervă dreptul de a modifica informațiile în orice moment, fără notificare prealabilă.</p>

          <h2 style={h2Style}>5. Linkuri externe</h2>
          <p style={pStyle}>Site-ul poate conține linkuri către alte site-uri. Pilgrims nu este responsabil pentru conținutul sau politicile acestora.</p>

          <h2 style={h2Style}>6. Modificări ale termenilor</h2>
          <p style={pStyle}>Ne rezervăm dreptul de a actualiza acești termeni și condiții în orice moment. Continuarea utilizării site-ului reprezintă acceptarea modificărilor.</p>

          <h2 style={h2Style}>7. Legea aplicabilă</h2>
          <p style={pStyle}>Acești termeni sunt guvernați de legislația din România. Orice dispută va fi soluționată de instanțele competente din România.</p>
        </section>

        <div style={dividerStyle} />

        {/* Confidentialitate */}
        <section id="confidentialitate">
          <h1 style={h1Style}>Politica de confidențialitate</h1>
          <p style={pStyle}>Protecția datelor tale personale este importantă pentru noi. Această politică explică modul în care Pilgrims colectează, utilizează și protejează informațiile tale atunci când utilizezi site-ul https://pilgrims.ro/.</p>

          <h2 style={h2Style}>1. Ce date colectăm</h2>
          <p style={pStyle}>Putem colecta date personale precum numele, adresa de email, numărul de telefon sau alte informații furnizate voluntar prin formularele de contact sau interacțiunea cu site-ul.</p>

          <h2 style={h2Style}>2. Scopul colectării datelor</h2>
          <p style={pStyle}>Datele sunt colectate pentru a putea răspunde solicitărilor tale, pentru îmbunătățirea serviciilor și pentru comunicări legate de activitatea noastră.</p>

          <h2 style={h2Style}>3. Protecția datelor</h2>
          <p style={pStyle}>Implementăm măsuri tehnice și organizatorice pentru a proteja datele tale împotriva accesului neautorizat, pierderii sau utilizării abuzive.</p>

          <h2 style={h2Style}>4. Divulgarea datelor</h2>
          <p style={pStyle}>Nu vindem și nu distribuim datele tale personale către terți, cu excepția cazurilor prevăzute de lege sau atunci când este necesar pentru furnizarea serviciilor.</p>

          <h2 style={h2Style}>5. Cookie-uri</h2>
          <p style={pStyle}>Site-ul poate utiliza cookie-uri pentru a îmbunătăți experiența utilizatorilor. Poți controla sau dezactiva cookie-urile din setările browserului tău.</p>

          <h2 style={h2Style}>6. Drepturile utilizatorilor</h2>
          <p style={pStyle}>Ai dreptul de a solicita accesul la datele tale, rectificarea sau ștergerea acestora, precum și restricționarea prelucrării. Pentru exercitarea acestor drepturi, ne poți contacta.</p>

          <h2 style={h2Style}>7. Modificări ale politicii</h2>
          <p style={pStyle}>Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Orice modificare va fi afișată pe această pagină.</p>
        </section>

      </div>
    </div>
  );
}
