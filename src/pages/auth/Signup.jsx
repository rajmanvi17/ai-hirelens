import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      signup(form.name, form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '24px' }}>
      <Card style={{ width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>⚡</div>
          <h1 style={{ fontSize: '22px', fontWeight: 700 }}>Create account</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '6px' }}>Start analyzing your resume for free</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Manvi Raj" />
          <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          <Input label="Password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Min 6 characters" />
          {error && <p style={{ fontSize: '13px', color: 'var(--danger)', background: '#fee2e2', padding: '10px', borderRadius: 'var(--radius-sm)' }}>{error}</p>}
          <Button type="submit" fullWidth loading={loading}>Create Account</Button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-secondary)', marginTop: '24px' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 500 }}>Login</Link>
        </p>
      </Card>
    </div>
  );
}