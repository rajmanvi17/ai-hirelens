import { useParams, useNavigate } from 'react-router-dom';
import { getAnalyses } from '@/utils/storage';
import { formatDate, getScoreColor } from '@/utils/helpers';
import ScoreRing from '@/components/ui/ScoreRing';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Analysis() {
  const { id } = useParams();
  const navigate = useNavigate();
  const analyses = getAnalyses();
  const data = analyses.find(a => a.id === id);

  if (!data) return (
    <div style={{ textAlign: 'center', padding: '80px' }}>
      <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Analysis not found.</p>
      <Button onClick={() => navigate('/upload')}>Analyze New Resume</Button>
    </div>
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '6px' }}>Resume Analysis</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            {data.fileName} · {data.jobRole} · {formatDate(data.analyzedAt)}
          </p>
        </div>
        <Button variant="secondary" size="sm" onClick={() => navigate('/upload')}>Analyze Another</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <Card style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>Overall Score</p>
          <ScoreRing score={data.score} />
        </Card>
        <Card style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>ATS Score</p>
          <ScoreRing score={data.atsScore} />
        </Card>
        <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
          <div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Experience Level</p>
            <p style={{ fontWeight: 600, marginTop: '4px' }}>{data.experienceLevel}</p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Target Role</p>
            <p style={{ fontWeight: 600, marginTop: '4px' }}>{data.jobRole}</p>
          </div>
        </Card>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Card>
          <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>📋 Summary</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{data.summary}</p>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Card>
            <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: 'var(--success)' }}>✅ Strengths</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {data.strengths?.map((s, i) => (
                <li key={i} style={{ fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--success)', marginTop: '2px' }}>•</span> {s}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: 'var(--danger)' }}>⚠️ Weaknesses</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {data.weaknesses?.map((w, i) => (
                <li key={i} style={{ fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--danger)', marginTop: '2px' }}>•</span> {w}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card>
          <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: 'var(--warning)' }}>🎯 Missing Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {data.missingSkills?.map((skill, i) => (
              <Badge key={i} color="warning">{skill}</Badge>
            ))}
          </div>
        </Card>

        <Card>
          <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: 'var(--primary)' }}>💡 Suggestions</h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data.suggestions?.map((s, i) => (
              <li key={i} style={{ fontSize: '14px', display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '10px', background: 'var(--bg)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span> {s}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}