import { ReactNode, createContext, useState } from "react";

type SearchInputContextType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export const SearchInputContext =
  createContext<SearchInputContextType>({
    searchValue: "",
    setSearchValue: () => {},
  });

export default function SearchInputContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SearchInputContext.Provider
      value={{ searchValue, setSearchValue }}
    >
      {children}
    </SearchInputContext.Provider>
  );
}
