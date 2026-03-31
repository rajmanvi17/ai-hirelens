export const APP_NAME = 'HireLens';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  UPLOAD: '/upload',
  ANALYSIS: '/analysis/:id',
  HISTORY: '/history',
};

export const GEMINI_MODEL = 'gemini-1.5-flash-latest';

export const ANALYSIS_PROMPT = (resumeText, jobRole) => `
You are an expert HR consultant and resume coach.
Analyze the following resume for the role of "${jobRole}".

Resume:
${resumeText}

Respond ONLY in this exact JSON format:
{
  "score": <number 0-100>,
  "summary": "<2-3 sentence overall summary>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>"],
  "missingSkills": ["<skill 1>", "<skill 2>", "<skill 3>"],
  "suggestions": ["<actionable suggestion 1>", "<actionable suggestion 2>", "<actionable suggestion 3>"],
  "atsScore": <number 0-100>,
  "experienceLevel": "<Fresher | Junior | Mid-level | Senior>"
}
`;

export const STORAGE_KEYS = {
  USER: 'hirelens_user',
  ANALYSES: 'hirelens_analyses',
  GEMINI_KEY: 'hirelens_gemini_key',
};