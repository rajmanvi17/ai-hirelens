export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
  
  export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  }
  
  export function getScoreColor(score) {
    if (score >= 80) return 'var(--success)';
    if (score >= 60) return 'var(--warning)';
    return 'var(--danger)';
  }
  
  export function getScoreLabel(score) {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Average';
    return 'Needs Work';
  }
  
  export function truncate(str, n = 60) {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  }