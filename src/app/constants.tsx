import { US, PL } from 'country-flag-icons/react/3x2';
import { JSX } from 'react';
import { Language } from './hooks/languageContext';
import { messages } from './offer/messages';
import { MessageObject } from './translator';

export type OfferMenuItem = {
    title: MessageObject;
}

export const availableLanguages: Array<{
    name: string;
    code: Language;
    flag: JSX.Element;
}> = [
    { name: 'Polski', code: 'pl', flag: <PL className="h-full w-full" /> },
    { name: 'English', code: 'en', flag: <US className="h-full w-full" /> },
];

export const mostpopularProducts = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: '$10.00',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: '$20.00',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        price: '$30.00',
    },
];

export const offerMenu = [
    {
        title: messages.filter1,
        tag: '1',
    },
    {
        title: messages.filter2,
        tag: '2',
    },
    {
        title: messages.filter3,
        tag: '3',
    },
    {
        title: messages.filter4,
        tag: '4',
    },
    {
        title: messages.filter5,
        tag: '5',
    },
    {
        title: messages.filter6,
        tag: '6',
    },
    
];
