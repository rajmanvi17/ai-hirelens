import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0f172a',
      color: '#fff',
      padding: '60px 48px 32px',
      marginTop: 'auto',
    }}>

      {/* TOP SECTION */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        maxWidth: '960px',
        margin: '0 auto 48px',
      }}>

        {/* BRAND */}
        <div>
          <div style={{
            fontSize: '22px', fontWeight: 900,
            color: '#fff', marginBottom: '12px',
            letterSpacing: '-0.5px',
          }}>
            ⚡ HireLens
          </div>
          <p style={{
            fontSize: '14px', color: '#94a3b8',
            lineHeight: 1.7, maxWidth: '220px',
          }}>
            AI-powered resume analysis to help you land your dream job faster.
          </p>

          {/* BADGES */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '20px', flexWrap: 'wrap' }}>
            {['React 18', 'Vite', 'Gemini AI'].map(tag => (
              <span key={tag} style={{
                fontSize: '11px', fontWeight: 600,
                padding: '4px 10px', borderRadius: '999px',
                background: 'rgba(99,102,241,0.2)',
                border: '1px solid rgba(99,102,241,0.4)',
                color: '#a5b4fc',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 style={{
            fontSize: '13px', fontWeight: 700,
            color: '#fff', marginBottom: '16px',
            textTransform: 'uppercase', letterSpacing: '1px',
          }}>
            Quick Links
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Home', path: '/' },
              { label: 'Analyze Resume', path: '/upload' },
              { label: 'Dashboard', path: '/dashboard' },
              { label: 'History', path: '/history' },
              { label: 'Settings', path: '/settings' },
            ].map(link => (
              <li key={link.label}>
                <span
                  onClick={() => navigate(link.path)}
                  style={{
                    fontSize: '14px', color: '#94a3b8',
                    cursor: 'pointer', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#a5b4fc'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* FEATURES */}
        <div>
          <h4 style={{
            fontSize: '13px', fontWeight: 700,
            color: '#fff', marginBottom: '16px',
            textTransform: 'uppercase', letterSpacing: '1px',
          }}>
            Features
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              '🎯 Resume Scoring',
              '🤖 ATS Checker',
              '💡 Skill Gap Analysis',
              '📈 Smart Suggestions',
              '🔒 100% Private',
            ].map(f => (
              <li key={f} style={{ fontSize: '14px', color: '#94a3b8' }}>{f}</li>
            ))}
          </ul>
        </div>

        {/* CTA BOX */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.15))',
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <div style={{ fontSize: '20px' }}>🚀</div>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>
            Ready to get hired?
          </h4>
          <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
            Analyze your resume now and get instant AI feedback for free.
          </p>
          <button
            onClick={() => navigate('/upload')}
            style={{
              background: '#6366f1',
              border: 'none',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              marginTop: '4px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#4f46e5';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#6366f1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Analyze My Resume →
          </button>
        </div>

      </div>

      {/* DIVIDER */}
      <div style={{
        maxWidth: '960px', margin: '0 auto',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <p style={{ fontSize: '13px', color: '#475569' }}>
          © {year} HireLens — Designed & Developed by Manvi Raj
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          {['Privacy Policy', 'Terms of Use', 'Contact'].map(item => (
            <span key={item} style={{
              fontSize: '13px', color: '#475569',
              cursor: 'pointer', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}
