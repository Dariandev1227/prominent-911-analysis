import React, { useState, Dispatch, SetStateAction, useContext } from "react";
import { FileType } from "../types";

interface FileContextType {
  file: FileType;
  setFile: Dispatch<SetStateAction<FileType>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const FileContext = React.createContext<FileContextType>(
  {} as FileContextType
);

export const FileProvider: React.FC<ProviderProps> = ({ children }) => {
  const [file, setFile] = useState<FileType>({} as FileType);
  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFile = () => {
  const { file, setFile } = useContext(FileContext);
  return { file, setFile };
};
