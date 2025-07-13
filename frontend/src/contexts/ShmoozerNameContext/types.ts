export type ShmoozerContextType = {
  shmoozerName: string | null;
  shmoozerId?: string | null;
  login: (name: string, id: string|null) => void;
  logout: () => void;
};
