import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useAnalysis } from '../../hooks/useAnalysis';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import { STORAGE_KEYS } from '../../utils/constants';
import { storage } from '../../utils/storage';

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [jobRole, setJobRole] = useState('');
  const [apiKey, setApiKey] = useState(storage.get(STORAGE_KEYS.GEMINI_KEY) || '');
  const { analyze, loading, error } = useAnalysis();
  const navigate = useNavigate();

  const onDrop = useCallback((accepted) => {
    if (accepted[0]) setFile(accepted[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, accept: { 'application/pdf': ['.pdf'] }, maxFiles: 1,
  });

  async function handleAnalyze() {
    if (!file || !jobRole.trim()) return;
    if (apiKey) storage.set(STORAGE_KEYS.GEMINI_KEY, apiKey);
    try {
      const result = await analyze(file, jobRole);
      navigate(`/analysis/${result.id}`);
    } catch {}
  }

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Analyze Your Resume</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '15px' }}>
        Upload your PDF resume and get instant AI-powered feedback
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Card>
          <h2 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>1. Upload Resume (PDF)</h2>
          <div {...getRootProps()} style={{
            border: `2px dashed ${isDragActive ? 'var(--primary)' : file ? 'var(--success)' : 'var(--border)'}`,
            borderRadius: 'var(--radius-md)', padding: '40px 24px', textAlign: 'center',
            cursor: 'pointer', background: isDragActive ? 'var(--primary-light)' : file ? '#f0fdf4' : 'var(--bg)',
            transition: 'all var(--transition)',
          }}>
            <input {...getInputProps()} />
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>{file ? '✅' : '📄'}</div>
            {file ? (
              <div>
                <p style={{ fontWeight: 600, color: 'var(--success)' }}>{file.name}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>Click to change file</p>
              </div>
            ) : (
              <div>
                <p style={{ fontWeight: 500, marginBottom: '4px' }}>
                  {isDragActive ? 'Drop it here!' : 'Drag & drop your resume here'}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>or click to browse — PDF only</p>
              </div>
            )}
          </div>
        </Card>

        <Card>
          <h2 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>2. Target Job Role</h2>
          <Input
            name="jobRole"
            value={jobRole}
            onChange={e => setJobRole(e.target.value)}
            placeholder="e.g. Frontend Developer, Data Scientist, Product Manager"
            hint="Be specific for better results"
          />
        </Card>

        <Card>
          <h2 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>3. Gemini API Key</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Don't have a key?{' '}
            <span
              style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 500 }}
              onClick={() => setApiKey('demo')}
            >
              Click here to use Demo Mode
            </span>
            {' '}— no key needed!
          </p>
          <Input
            name="apiKey"
            type="password"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            placeholder="AIzaSy... or type 'demo' for mock mode"
          />
          {apiKey === 'demo' && (
            <p style={{
              marginTop: '8px', fontSize: '13px', color: 'var(--success)',
              background: '#f0fdf4', padding: '8px 12px',
              borderRadius: 'var(--radius-sm)', border: '1px solid #bbf7d0',
            }}>
              ✅ Demo mode active — sample analysis will be shown
            </p>
          )}
        </Card>

        {error && (
          <div style={{
            background: '#fee2e2', border: '1px solid #fecaca',
            borderRadius: 'var(--radius-md)', padding: '14px 16px',
            fontSize: '14px', color: 'var(--danger)',
          }}>
            ❌ {error}
          </div>
        )}

        <Button
          fullWidth size="lg" loading={loading}
          disabled={!file || !jobRole.trim()}
          onClick={handleAnalyze}
        >
          {loading ? 'Analyzing with AI...' : '🔍 Analyze My Resume'}
        </Button>
      </div>
    </div>
  );
}