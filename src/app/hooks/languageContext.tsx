'use client';

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';

export type Language = 'en' | 'pl';

export interface LanguageContextValue {
    language: Language;
    changeLanguage: (newLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined,
);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [lang, setLang] = useState<Language>('en');

    useEffect(() => {
        const saved = sessionStorage.getItem('lang') as Language | null;
        if (saved) setLang(saved);
    }, []);

    const changeLang = (newLang: Language) => {
        setLang(newLang);
        sessionStorage.setItem('lang', newLang);
    };

    return (
        <LanguageContext.Provider
            value={{ language: lang, changeLanguage: changeLang }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used inside <LanguageProvider>');
    }
    return ctx;
}
