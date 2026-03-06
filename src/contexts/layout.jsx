import { createContext, useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

const getCookie = (name) => {
  if (!isBrowser) return undefined;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();

  return undefined;
};

const detectLanguage = () => {
  const savedLanguage = getCookie('userLanguage');
  if (savedLanguage) return savedLanguage;
  if (!isBrowser) return 'es';

  return window.navigator.language.split('-')[0] || 'en';
};

export const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState('');
  const [language] = useState(detectLanguage());

  useEffect(() => {
    if (!isBrowser) return;
    document.cookie = `userLanguage=${language}; path=/`;
  }, [language]);

  useEffect(() => {
    if (!isBrowser) return;

    document.body.style.overflow = modal ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  return (
    <LayoutContext.Provider
      value={{
        modal,
        setModal,
        loading,
        setLoading,
        defaultMessage,
        setDefaultMessage,
        language,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
