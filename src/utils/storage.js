import { STORAGE_KEYS } from './constants';

export const storage = {
  get: (key) => {
    try { return JSON.parse(localStorage.getItem(key)); }
    catch { return null; }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { console.error('Storage error'); }
  },
  remove: (key) => localStorage.removeItem(key),
};

export function getAnalyses() {
  return storage.get(STORAGE_KEYS.ANALYSES) || [];
}

export function saveAnalysis(analysis) {
  const analyses = getAnalyses();
  analyses.unshift(analysis);
  storage.set(STORAGE_KEYS.ANALYSES, analyses);
}

export function deleteAnalysis(id) {
  const analyses = getAnalyses().filter(a => a.id !== id);
  storage.set(STORAGE_KEYS.ANALYSES, analyses);
}