import { createContext, useContext, useState } from 'react';
import { storage } from '@/utils/storage';
import { STORAGE_KEYS } from '@/utils/constants';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storage.get(STORAGE_KEYS.USER));

  function login(email, password) {
    if (!email || !password) throw new Error('Email and password required');
    const userData = { id: Date.now(), email, name: email.split('@')[0], createdAt: new Date().toISOString() };
    storage.set(STORAGE_KEYS.USER, userData);
    setUser(userData);
    return userData;
  }

  function signup(name, email, password) {
    if (!name || !email || !password) throw new Error('All fields required');
    const userData = { id: Date.now(), email, name, createdAt: new Date().toISOString() };
    storage.set(STORAGE_KEYS.USER, userData);
    setUser(userData);
    return userData;
  }

  function logout() {
    storage.remove(STORAGE_KEYS.USER);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}