import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getAnalyses } from '../../utils/storage';
import { formatDate, getScoreColor, getScoreLabel } from '../../utils/helpers';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { user } = useAuth();
  const analyses = getAnalyses();
  const navigate = useNavigate();
  const latest = analyses[0];

  const stats = [
    { label: 'Total Analyses', value: analyses.length, icon: '📊', color: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
    { label: 'Latest Score', value: latest ? `${latest.score}/100` : '—', icon: '🎯', color: 'linear-gradient(135deg, #06b6d4, #0ea5e9)' },
    { label: 'ATS Score', value: latest ? `${latest.atsScore}/100` : '—', icon: '🤖', color: 'linear-gradient(135deg, #22c55e, #10b981)' },
    { label: 'Last Analyzed', value: latest ? formatDate(latest.analyzedAt) : '—', icon: '📅', color: 'linear-gradient(135deg, #f59e0b, #f97316)' },
  ];

  return (
    <div style={{ minHeight: '80vh' }}>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '32px' }}
      >
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
          Welcome back, {user?.name} 👋
        </h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          Here's your resume analysis overview
        </p>
      </motion.div>

      {/* STATS CARDS — glass effect */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '40px',
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.9)',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              cursor: 'default',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            }}
          >
            <div style={{
              width: '52px', height: '52px',
              borderRadius: '14px',
              background: stat.color,
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '22px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              flexShrink: 0,
            }}>
              {stat.icon}
            </div>
            <div>
              <p style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* RECENT ANALYSES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: '16px',
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>
            Recent Analyses
          </h2>
          <button
            onClick={() => navigate('/upload')}
            style={{
              background: '#6366f1', border: 'none', color: '#fff',
              padding: '8px 18px', borderRadius: '8px', fontWeight: 600,
              fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#4f46e5'}
            onMouseLeave={e => e.currentTarget.style.background = '#6366f1'}
          >
            + Analyze New
          </button>
        </div>

        {analyses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.9)',
              borderRadius: '20px',
              padding: '60px',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ fontSize: '52px', marginBottom: '16px' }}>📄</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>
              No analyses yet
            </h3>
            <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '14px' }}>
              Upload your first resume to get started
            </p>
            <button
              onClick={() => navigate('/upload')}
              style={{
                background: '#6366f1', border: 'none', color: '#fff',
                padding: '12px 28px', borderRadius: '10px', fontWeight: 600,
                fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#4f46e5'}
              onMouseLeave={e => e.currentTarget.style.background = '#6366f1'}
            >
              Analyze My Resume
            </button>
          </motion.div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {analyses.slice(0, 5).map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onClick={() => navigate(`/analysis/${a.id}`)}
                whileHover={{ x: 4 }}
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.9)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: '12px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '20px',
                    boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
                  }}>
                    📄
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '15px', color: '#0f172a' }}>
                      {a.fileName}
                    </p>
                    <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
                      {a.jobRole} · {formatDate(a.analyzedAt)}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    fontSize: '20px', fontWeight: 800,
                    color: getScoreColor(a.score),
                  }}>
                    {a.score}/100
                  </div>
                  <span style={{
                    fontSize: '12px', fontWeight: 600,
                    padding: '4px 12px', borderRadius: '999px',
                    background: a.score >= 80 ? '#dcfce7' : a.score >= 60 ? '#fef9c3' : '#fee2e2',
                    color: a.score >= 80 ? '#15803d' : a.score >= 60 ? '#92400e' : '#991b1b',
                  }}>
                    {getScoreLabel(a.score)}
                  </span>
                  <span style={{ color: '#94a3b8', fontSize: '18px' }}>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}