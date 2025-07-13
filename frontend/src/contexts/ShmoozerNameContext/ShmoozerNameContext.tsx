import { createContext, useContext, useState, type ReactNode } from "react";
import type { ShmoozerContextType } from "./types";

const ShmoozerNameContext = createContext<ShmoozerContextType | undefined>(undefined);

export const ShmoozerNameProvider = ({ children }: { children: ReactNode }) => {
  const [shmoozerName, setShmoozerName] = useState(() => localStorage.getItem("shmoozerName"));
  const [shmoozerId, setShmoozerId] = useState(() => localStorage.getItem("shmoozerId") || '');
  
  const login = (name: string, id: string|null) => {
    localStorage.setItem("shmoozerName", name);
    if (id !== null) {
      localStorage.setItem("shmoozerId", id);
      setShmoozerId(id);
    }
    setShmoozerName(name);
  };

  const logout = () => {
    localStorage.removeItem("shmoozerName");
    localStorage.removeItem("shmoozerId");
    setShmoozerName(null);
    setShmoozerId('');
  };

  return (
    <ShmoozerNameContext.Provider value={{ shmoozerName, shmoozerId, login, logout }} >
      {children}
    </ShmoozerNameContext.Provider>
  );
};

export const useShmoozerName = () => {
  const context = useContext(ShmoozerNameContext);
  if (!context) throw new Error("useShmoozer must be used inside ShmoozerProvider");
  return context;
};