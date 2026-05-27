'use client';

import parse from 'html-react-parser';
import { MessageObject } from './translator';

export type Language = 'en' | 'pl';

export default function translatorBasic(
    message: MessageObject,
    lang: Language,
): string | React.JSX.Element | React.JSX.Element[] | null {
    const translation = message[lang] || message.defaultMessage;

    return parse(translation);
}
