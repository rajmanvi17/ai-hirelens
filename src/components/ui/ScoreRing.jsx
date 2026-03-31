import { getScoreColor, getScoreLabel } from '@/utils/helpers';

export default function ScoreRing({ score, size = 120 }) {
  const r = 45;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = getScoreColor(score);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--border)" strokeWidth="8" />
        <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 50 50)"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="central"
          style={{ fontSize: '22px', fontWeight: 700, fill: color, fontFamily: 'inherit' }}>
          {score}
        </text>
      </svg>
      <span style={{ fontSize: '13px', fontWeight: 600, color }}>{getScoreLabel(score)}</span>
    </div>
  );
}