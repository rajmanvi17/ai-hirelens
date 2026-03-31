export default function Input({ label, name, type = 'text', value, onChange, placeholder, error, hint, disabled }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {label && <label htmlFor={name} style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>{label}</label>}
        <input
          id={name} name={name} type={type} value={value}
          onChange={onChange} placeholder={placeholder} disabled={disabled}
          style={{
            padding: '10px 14px', borderRadius: 'var(--radius-md)', fontSize: '14px',
            border: `1.5px solid ${error ? 'var(--danger)' : 'var(--border)'}`,
            outline: 'none', background: 'var(--surface)', color: 'var(--text-primary)',
            transition: 'border-color var(--transition)', width: '100%',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--primary)'}
          onBlur={e => e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border)'}
        />
        {error && <span style={{ fontSize: '12px', color: 'var(--danger)' }}>{error}</span>}
        {hint && !error && <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{hint}</span>}
      </div>
    );
  }