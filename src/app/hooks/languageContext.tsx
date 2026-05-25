'use client';

import {
    createContext,
    useContext,
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
    const [lang, setLang] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const language = sessionStorage.getItem('lang') as Language;

            if (language) {
                return language;
            }
        }

        return 'en';
    });

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
