import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAnalyses, deleteAnalysis } from '@/utils/storage';
import { formatDate, getScoreColor, getScoreLabel } from '@/utils/helpers';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function History() {
  const [analyses, setAnalyses] = useState(getAnalyses());
  const navigate = useNavigate();

  function handleDelete(e, id) {
    e.stopPropagation();
    if (window.confirm('Delete this analysis?')) {
      deleteAnalysis(id);
      setAnalyses(getAnalyses());
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 700 }}>Analysis History</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '6px', fontSize: '14px' }}>{analyses.length} total analyses</p>
        </div>
        <Button size="sm" onClick={() => navigate('/upload')}>+ New Analysis</Button>
      </div>

      {analyses.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '60px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🗂️</div>
          <h3 style={{ marginBottom: '8px' }}>No history yet</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>Your analyzed resumes will appear here</p>
          <Button onClick={() => navigate('/upload')}>Analyze First Resume</Button>
        </Card>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {analyses.map(a => (
            <Card key={a.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', cursor: 'pointer' }}
              onClick={() => navigate(`/analysis/${a.id}`)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '28px' }}>📄</span>
                <div>
                  <p style={{ fontWeight: 500 }}>{a.fileName}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{a.jobRole} · {formatDate(a.analyzedAt)}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: getScoreColor(a.score) }}>{a.score}/100</span>
                <Badge color={a.score >= 80 ? 'success' : a.score >= 60 ? 'warning' : 'danger'}>{getScoreLabel(a.score)}</Badge>
                <Button variant="ghost" size="sm" onClick={(e) => handleDelete(e, a.id)}>🗑️</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}