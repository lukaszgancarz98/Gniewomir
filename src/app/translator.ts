'use client';

import { useEffect, useState } from 'react';
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
): string | React.JSX.Element | React.JSX.Element[] | null {
    const { language: lang } = useLanguage();

    const browserLang = lang || navigator.language;
    let language: keyof MessageObject = 'defaultMessage';

    if (browserLang.includes('pl')) language = 'pl';
    else if (browserLang.includes('en')) language = 'en';

    let translation = message[language] || message.defaultMessage;

    if (translation && values) {
        translation = translation.replace(/\$\{([^}]+)\}/g, (match, key) => {
            return String(values[key] || match);
        });
    }

    return parse(translation);
}
