import { createContext, useContext, useState, ReactNode } from "react";

interface BooksPaginationContextProps {
  page: number;
  setPage: (page: number) => void;
}
const BooksPaginationContext = createContext<BooksPaginationContextProps | undefined>(undefined);
export const BooksPaginationProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<number>(1); 
  return (
    <BooksPaginationContext.Provider value={{ page, setPage }}>
      {children}
    </BooksPaginationContext.Provider>
  );
};
export const useBooksPagination = () => {
  const context = useContext(BooksPaginationContext);
  if (context === undefined) {
    throw new Error("useBooksPagination must be used within a BooksPaginationProvider");
  }
  return context;
};
