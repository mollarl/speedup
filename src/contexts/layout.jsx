import { createContext, useState, useEffect} from "react";

const detectLanguage = () => {
  const savedLanguage = getCookie('userLanguage');
  if (savedLanguage) return savedLanguage;
  return navigator.language.split('-')[0] || 'en';
};
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export const LayoutContext = createContext();

export function LayoutProvider({ children }) {
const [loading, setLoading] = useState(false);
const [modal, setModal] = useState(false);
const [defaultMessage, setDefaultMessage] = useState('');
const [language, setLanguage] = useState(detectLanguage());

  useEffect(() => {
    document.cookie = `userLanguage=${language}; path=/`;
  }, [language]);


useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // restaurar el estilo original cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);
   
  return (
    <LayoutContext.Provider value={{
      modal,
      setModal,
      loading,
      setLoading,
      defaultMessage,
      setDefaultMessage,
      language
    }}>
      {children}
    </LayoutContext.Provider>
  );
}