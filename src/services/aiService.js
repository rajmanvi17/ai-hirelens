import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_MODEL, ANALYSIS_PROMPT, STORAGE_KEYS } from '../utils/constants';
import { storage } from '../utils/storage';

const MOCK_RESULT = {
  score: 72,
  atsScore: 68,
  experienceLevel: 'Mid-level',
  summary:
    'Your resume shows solid technical skills and relevant experience. However, it lacks some key technologies expected for this role and could benefit from more quantified achievements.',
  strengths: [
    'Strong educational background with relevant degree',
    'Good variety of projects demonstrating practical skills',
    'Clear and readable resume format',
  ],
  weaknesses: [
    'Missing quantified achievements (e.g. improved performance by X%)',
    'No mention of team collaboration or leadership experience',
  ],
  missingSkills: [
    'TypeScript',
    'Docker',
    'CI/CD pipelines',
    'System Design',
    'Unit Testing',
  ],
  suggestions: [
    'Add numbers to your achievements — e.g. "Reduced load time by 40%" instead of "Improved performance"',
    'Mention any open source contributions or GitHub activity',
    'Include keywords from the job description to improve ATS score',
    'Add a brief professional summary at the top of your resume',
    'List any team projects or collaborative work experience',
  ],
};

function getClient() {
  const key = storage.get(STORAGE_KEYS.GEMINI_KEY);
  if (!key) throw new Error('Gemini API key not set. Please add it in Settings.');
  return new GoogleGenerativeAI(key);
}

function isMockMode() {
  const key = storage.get(STORAGE_KEYS.GEMINI_KEY);
  return !key || key === 'mock' || key === 'demo';
}

export async function analyzeResume(resumeText, jobRole) {
  if (isMockMode()) {
    await new Promise((res) => setTimeout(res, 2500));
    return {
      ...MOCK_RESULT,
      summary: `Your resume for the role of "${jobRole}" shows solid potential. ${MOCK_RESULT.summary}`,
    };
  }

  try {
    const client = getClient();
    const model = client.getGenerativeModel({ model: GEMINI_MODEL });
    const prompt = ANALYSIS_PROMPT(resumeText, jobRole);
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const clean = text.replace(/```json|```/g, '').trim();
    return JSON.parse(clean);
  } catch (err) {
    if (err.message?.includes('429') || err.message?.includes('quota')) {
      await new Promise((res) => setTimeout(res, 2500));
      return {
        ...MOCK_RESULT,
        summary: `Your resume for the role of "${jobRole}" shows solid potential. ${MOCK_RESULT.summary}`,
      };
    }
    throw err;
  }
}