import { ReactNode, createContext, useState } from 'react';

interface UserContextType {
  userId: string | null;
  setUserId: (id: string | null) => void;
}

export const UserContext = createContext<UserContextType>({
  userId: null,
  setUserId: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [userId, setUserId] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
