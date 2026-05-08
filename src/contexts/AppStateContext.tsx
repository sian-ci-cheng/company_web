import { createContext, useContext, useState } from "react";

interface AppStateContextType {
  page: 'home' | 'explore';
  btnMouse: { x: number; y: number } | null;
  goTo: (page: 'home' | 'explore') => void;
  setBtnMouse: (pos: { x: number; y: number } | null) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<'home' | 'explore'>('home');
  const [btnMouse, setBtnMouse] = useState<{ x: number; y: number } | null>(null);

  const goTo = (newPage: 'home' | 'explore') => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <AppStateContext.Provider value={{ page, btnMouse, goTo, setBtnMouse }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
}
