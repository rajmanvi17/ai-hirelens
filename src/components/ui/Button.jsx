export default function Button({ children, variant = 'primary', size = 'md', loading, disabled, fullWidth, onClick, type = 'button' }) {
    const base = {
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      gap: '8px', borderRadius: 'var(--radius-md)', fontWeight: 500,
      fontFamily: 'inherit', border: '1.5px solid transparent',
      transition: 'all var(--transition)', cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled || loading ? 0.6 : 1,
      width: fullWidth ? '100%' : 'auto',
    };
    const sizes = {
      sm: { padding: '6px 12px', fontSize: '13px' },
      md: { padding: '10px 20px', fontSize: '14px' },
      lg: { padding: '13px 28px', fontSize: '15px' },
    };
    const variants = {
      primary: { background: 'var(--primary)', color: '#fff', borderColor: 'var(--primary)' },
      secondary: { background: 'transparent', color: 'var(--primary)', borderColor: 'var(--primary)' },
      ghost: { background: 'transparent', color: 'var(--text-secondary)', borderColor: 'transparent' },
      danger: { background: 'var(--danger)', color: '#fff', borderColor: 'var(--danger)' },
    };
    return (
      <button type={type} onClick={onClick} disabled={disabled || loading} style={{ ...base, ...sizes[size], ...variants[variant] }}>
        {loading && <span style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.6s linear infinite', display: 'inline-block' }} />}
        {children}
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </button>
    );
  }