'use client';

import Image from 'next/image';
import { useLanguage } from './hooks/languageContext';
import { availableLanguages } from './constants';
import { useMemo } from 'react';
import Dropdown from 'antd/es/dropdown/dropdown';
import translator, { MessageObject } from './translator';

type LanguageItem = { key: string; label: React.ReactNode };

export type MenuItem = {
    key: string;
    label: MessageObject;
    href: string;
};
export default function Header({
    title,
    image,
    enableLangage,
    children,
    menu,
}: {
    title: string | React.JSX.Element | React.JSX.Element[];
    image?: string;
    enableLangage?: boolean;
    children?: React.ReactNode;
    menu?: MenuItem[];
}) {
    const { language, changeLanguage } = useLanguage();

    const languageItems = useMemo(() => {
        return availableLanguages.reduce((acc: LanguageItem[], lang) => {
            acc.push({
                key: lang.code,
                label: (
                    <div onClick={() => changeLanguage(lang.code)}>
                        {lang.name}
                    </div>
                ),
            });

            return acc;
        }, []);
    }, [language]);

    return (
        <div className="relative z-10">
            <div className="fixed flex top-0 left-0 w-full justify-center h-40 bg-sky-300 items-center text-black">
                {menu ? (
                    <div className='flex flex-col gap-8 w-[50%]'>
                        <div className='text-center text-5xl'>{title}</div>
                        <div className='flex flex-row gap-5 text-3xl justify-evenly my-2'>{menu.map((item) => (
                            <a key={item.key} href={item.href} className="text-3xl transition-transform hover:scale-120">
                                {translator(item.label)}
                            </a>
                        ))}</div>
                    </div>
                ) : (
                    <div className='text-center text-7xl'>{title}</div>
                )}
                {image && (
                    <a href="/" className="absolute top-5 left-5 h-28 w-28 z-50">
                        <Image src={image} alt={'Logo'} fill />
                    </a>
                )}
                {enableLangage && (
                    <div className="absolute top-3 right-3 z-50 h-[30px] w-[30px]">
                        <Dropdown
                            menu={{ items: languageItems }}
                            placement="bottomRight"
                        >
                            <div className="ring ring-black">
                                {
                                    availableLanguages.find(
                                        (lang) => lang.code === language,
                                    )?.flag
                                }
                            </div>
                        </Dropdown>
                    </div>
                )}
            </div>
            <div className="min-h-screen pt-35 h-auto">{children}</div>
        </div>
    );
}
