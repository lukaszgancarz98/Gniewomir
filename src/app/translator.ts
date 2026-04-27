'use client';

import { useLanguage } from './hooks/languageContext';
import parse from 'html-react-parser';

export type MessageObject = {
    id: string;
    defaultMessage: string;
    pl?: string;
    en?: string;
};

export type Values = Record<string, string | number>;

export default function translator(
    message: MessageObject,
    values?: Values,
): string | React.JSX.Element | React.JSX.Element[] {
    const { language: lang } = useLanguage();
    const browserLang = lang || navigator.language;
    let language: string = 'defaultMessage';
    let translation: string;
    if (browserLang.includes('pl')) {
        language = 'pl';
    } else if (browserLang.includes('en')) {
        language = 'en';
    }

    if (language) {
        translation =
            message[language as keyof MessageObject] || message.defaultMessage;
    } else {
        translation = message.defaultMessage;
    }

    if (translation && values) {
        translation = translation.replace(/\$\{([^}]+)\}/g, (match, key) => {
            return String(values[key] || match);
        });
    }

    return parse(translation);
}
