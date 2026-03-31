import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../ui/Button';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  const linkStyle = (path) => ({
    fontSize: '14px',
    fontWeight: 500,
    color: location.pathname === path ? 'var(--primary)' : 'var(--text-secondary)',
    textDecoration: 'none',
    padding: '6px 12px',
    borderRadius: 'var(--radius-sm)',
    background: location.pathname === path ? 'var(--primary-light)' : 'transparent',
    transition: 'all var(--transition)',
  });

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: '64px', background: 'var(--surface)',
      borderBottom: '1px solid var(--border)', position: 'sticky',
      top: 0, zIndex: 50, boxShadow: 'var(--shadow-sm)',
    }}>
      <Link to="/" style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none', letterSpacing: '-0.5px' }}>
      🔍 HireLens
      </Link>

      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Link to="/dashboard" style={linkStyle('/dashboard')}>Dashboard</Link>
          <Link to="/upload" style={linkStyle('/upload')}>Analyze</Link>
          <Link to="/history" style={linkStyle('/history')}>History</Link>
          <Link to="/settings" style={linkStyle('/settings')}>Settings</Link>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {user ? (
          <>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'var(--primary-light)', padding: '6px 14px',
              borderRadius: '999px', border: '1px solid #c7d2fe',
            }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'var(--primary)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: 700,
              }}>
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--primary-dark)' }}>
                {user.name}
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>Login</Button>
            <Button size="sm" onClick={() => navigate('/signup')}>Get Started</Button>
          </>
        )}
      </div>
    </nav>
  );
}