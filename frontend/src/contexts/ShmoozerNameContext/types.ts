export type ShmoozerContextType = {
  shmoozerName: string | null;
  login: (name: string) => void;
  logout: () => void;
};
