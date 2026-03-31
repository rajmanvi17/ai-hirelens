export default function Card({ children, style = {}, hover = false, onClick }) {
    return (
      <div
        onClick={onClick}
        style={{
          background: 'var(--surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          transition: hover ? 'all var(--transition)' : 'none',
          cursor: onClick ? 'pointer' : 'default',
          ...style,
        }}
        onMouseEnter={e => {
          if (hover) {
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            e.currentTarget.style.borderColor = 'var(--border-hover)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }
        }}
        onMouseLeave={e => {
          if (hover) {
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }}
      >
        {children}
      </div>
    );
  }