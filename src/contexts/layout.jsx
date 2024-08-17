import { createContext, useState, useEffect} from "react";

export const LayoutContext = createContext();

export function LayoutProvider({ children }) {
const [loading, setLoading] = useState(false)
const [modal, setModal] = useState(false);

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
      setLoading
    }}>
      {children}
    </LayoutContext.Provider>
  );
}