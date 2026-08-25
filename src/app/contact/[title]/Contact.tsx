'use client';

import Header from '../../Header';
import translator from '../../translator';
import { messages as commonMessages } from '../../messages';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';
import translatorBasic, { Language } from '@/app/translatorBasic';
import { messages } from '../message';
import sendEmail from '@/components/EmailSender';

export default function Contact({ title }: { title: string }) {
    const [productName, setProductName] = useState<string>('');
    const [languageType, setLanguageType] = useState<Language>('en');
    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        const decodedTitle = decodeURIComponent(title.replace('_', ' '));
        const nameSplit = decodedTitle.split('+');
        setLanguageType(nameSplit[1] as Language);
        setProductName(
            translatorBasic(messages.order, nameSplit[1] as Language) +
                nameSplit[0],
        );
    }, [title]);

    const triggerEmail = () => {
        if (!email || !message) {
            toast.error(
                translatorBasic(
                    messages.fieldsRequired,
                    languageType,
                ) as string,
            );
            return;
        }

        sendEmail({ email, title: productName, message: message });
    };

    return (
        <Header
            title={translator(commonMessages.brandName)}
            enableLangage
            menu={[
                {
                    key: 'about',
                    label: commonMessages.aboutTitle,
                    href: '/about-us',
                },
                {
                    key: 'contact',
                    label: commonMessages.contactTitle,
                    href: '/contact',
                },
            ]}
        >
            <Toaster richColors />
            <div className="flex flex-col gap-5 w-full min-h-[calc(100vh-theme(space.40))] justify-center items-center text-black text-3xl">
                <div>E-mail: ggsimulations@gmail.com</div>
                <div>Telefon: +48 693 414 504</div>
                <div className="flex flex-col items-center justify-center">
                    <input
                        type="text"
                        placeholder={
                            translator(messages.messageTitle) as string
                        }
                        className="w-[800px] border-1 p-2 text-xl border-b-0 rounded-t"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <textarea
                        className="w-[800px] h-[200px] border-1 p-2 text-xl"
                        placeholder={
                            translator(messages.messagePlaceholder) as string
                        }
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={translator(messages.email) as string}
                        className="w-[800px] border-1 p-2 text-xl border-t-0 rounded-b"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        onClick={() => triggerEmail()}
                        className="w-[150px] text-black px-4 py-2 rounded hover:scale-120 hover:text-bold transition-all duration-200"
                    >
                        Wyślij
                    </button>
                </div>
            </div>
        </Header>
    );
}
