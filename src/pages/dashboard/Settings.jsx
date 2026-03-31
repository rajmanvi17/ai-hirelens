import { useState } from 'react';
import { storage } from '../../utils/storage';
import { STORAGE_KEYS } from '../../utils/constants';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Settings() {
  const [key, setKey] = useState(storage.get(STORAGE_KEYS.GEMINI_KEY) || '');
  const [saved, setSaved] = useState(false);

  function handleSave() {
    storage.set(STORAGE_KEYS.GEMINI_KEY, key);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleClear() {
    storage.remove(STORAGE_KEYS.GEMINI_KEY);
    setKey('');
  }

  return (
    <div style={{ maxWidth: '540px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '8px' }}>Settings</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '15px' }}>
        Manage your API key and preferences
      </p>

      <Card>
        <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>
          🔑 Google Gemini API Key
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Free API key — no credit card needed. Get yours at{' '}
          <a href="https://aistudio.google.com" target="_blank" rel="noreferrer">
            aistudio.google.com
          </a>
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Input
            name="apiKey"
            type="password"
            value={key}
            onChange={e => setKey(e.target.value)}
            placeholder="AIzaSy..."
            hint="Your Gemini API key starts with AIzaSy"
          />

          <div style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={handleSave} disabled={!key.trim()}>
              {saved ? '✅ Saved!' : 'Save Key'}
            </Button>
            <Button variant="ghost" onClick={handleClear}>Clear</Button>
          </div>

          {storage.get(STORAGE_KEYS.GEMINI_KEY) && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: '#f0fdf4', border: '1px solid #bbf7d0',
              borderRadius: 'var(--radius-sm)', padding: '10px 14px',
              fontSize: '13px', color: '#15803d',
            }}>
              Gemini API key is saved and ready to use
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}