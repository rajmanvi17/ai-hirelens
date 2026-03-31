import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <div style={{ fontSize: '80px' }}>🔍</div>
      <h1 style={{ fontSize: '32px', fontWeight: 700 }}>404 — Page not found</h1>
      <p style={{ color: 'var(--text-secondary)' }}>The page you're looking for doesn't exist.</p>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </div>
  );
}