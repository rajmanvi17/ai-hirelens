import { useState } from 'react';
import { analyzeResume } from '../services/aiService';
import { extractTextFromPDF } from '../services/pdfService';
import { saveAnalysis } from '../utils/storage';
import { generateId } from '../utils/helpers';

export function useAnalysis() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  async function analyze(file, jobRole) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const text = await extractTextFromPDF(file);
      if (!text || text.length < 50) throw new Error('Could not extract text from PDF. Please try a different file.');
      const analysis = await analyzeResume(text, jobRole);
      const record = {
        id: generateId(),
        fileName: file.name,
        jobRole,
        analyzedAt: new Date().toISOString(),
        ...analysis,
      };
      saveAnalysis(record);
      setResult(record);
      return record;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { analyze, loading, error, result };
}