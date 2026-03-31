export default function Badge({ children, color = 'primary' }) {
    const colors = {
      primary: { bg: 'var(--primary-light)', text: 'var(--primary-dark)' },
      success: { bg: '#dcfce7', text: '#15803d' },
      warning: { bg: '#fef9c3', text: '#92400e' },
      danger: { bg: '#fee2e2', text: '#991b1b' },
      gray: { bg: '#f1f5f9', text: 'var(--text-secondary)' },
    };
    const c = colors[color] || colors.primary;
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', padding: '3px 10px',
        borderRadius: '999px', fontSize: '12px', fontWeight: 500,
        background: c.bg, color: c.text,
      }}>
        {children}
      </span>
    );
  }