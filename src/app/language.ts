'use client';

import { useLanguage } from './hooks/languageContext';

export type MessageObject = {
    id: string;
    defaultMessage: string;
    pl?: string;
    en?: string;
};

export type Values = Record<string, string | number>;

export default function language(): string {
    const { language: lang } = useLanguage();

    const browserLang = lang || navigator.language;
    let language = 'en';

    if (browserLang.includes('pl')) language = 'pl';
    else if (browserLang.includes('en')) language = 'en';

    return language;
}
