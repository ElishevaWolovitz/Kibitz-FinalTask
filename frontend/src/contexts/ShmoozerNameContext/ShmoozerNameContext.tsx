import { createContext, useContext, useState, type ReactNode } from "react";
import type { ShmoozerContextType } from "./types";

const ShmoozerNameContext = createContext<ShmoozerContextType | undefined>(undefined);

export const ShmoozerNameProvider = ({ children }: { children: ReactNode }) => {
  const [shmoozerName, setShmoozerName] = useState(() => localStorage.getItem("shmoozerName"));

  const login = (name: string) => {
    localStorage.setItem("shmoozerName", name);
    setShmoozerName(name);
  };

  const logout = () => {
    localStorage.removeItem("shmoozerName");
    setShmoozerName(null);
  };

  return (
    <ShmoozerNameContext.Provider value={{ shmoozerName, login, logout }} >
      {children}
    </ShmoozerNameContext.Provider>
  );
};

export const useShmoozerName = () => {
  const context = useContext(ShmoozerNameContext);
  if (!context) throw new Error("useShmoozer must be used inside ShmoozerProvider");
  return context;
};