'use client';

import Image from 'next/image';
import { useLanguage } from './hooks/languageContext';
import { availableLanguages, offerMenu } from './constants';
import { useEffect, useMemo, useState } from 'react';
import Dropdown from 'antd/es/dropdown/dropdown';
import translator, { MessageObject } from './translator';
import Spinner from '@/components/Spinner';
import Link from 'next/link';

type LanguageItem = { key: string; label: React.ReactNode };

export type MenuItem = {
    key: string;
    label: MessageObject;
    href: string;
    usePopover?: boolean;
    disabledChoice?: string;
};
export default function Header({
    title,
    image,
    enableLangage,
    children,
    menu,
    childClassName,
}: {
    title: string | React.JSX.Element | React.JSX.Element[] | null;
    image?: string;
    enableLangage?: boolean;
    children?: React.ReactNode;
    menu?: MenuItem[];
    childClassName?: string;
}) {
    const { language, changeLanguage } = useLanguage();
    const [mounted, setMounted] = useState(false);

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

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <Spinner />;

    return (
        <div className="relative z-10">
            <div className="fixed top-0 left-0 w-full flex flex-col h-40 text-black z-50 bg-white">
                <div className="flex justify-between w-full items-center h-[60px]">
                    {menu && (
                        <div className="flex flex-row justify-start gap-8 pl-10 py-3">
                            <div className="flex flex-row gap-10 text-3xl justify-evenly my-2 h-[40px]">
                                {menu.map((item) =>
                                    item.usePopover ? (
                                        <div
                                            key={item.key}
                                            className="relative inline-block group transition-transform hover:scale-120"
                                        >
                                            <div>{translator(item.label)}</div>
                                            <div
                                                className="
                                                    absolute left-0 top-full w-[500px] p-7
                                                    bg-white shadow-lg rounded
                                                    opacity-0 invisible z-50
                                                    group-hover:opacity-100 group-hover:visible
                                                    transition-all duration-200"
                                            >
                                                <div className="text-black text-xl flex flex-col gap-3 px-5">
                                                    {offerMenu.map(
                                                        (offer, index) => {
                                                            if (
                                                                item.disabledChoice ===
                                                                offer.tag
                                                            ) {
                                                                return (
                                                                    <div className="text-gray-500 text-center w-auto">
                                                                        {translator(
                                                                            offer.title,
                                                                        )}
                                                                    </div>
                                                                );
                                                            }

                                                            return (
                                                                <Link
                                                                    key={index}
                                                                    href={`/products/${offer.tag}`}
                                                                    className="block text-black text-center transition-transform hover:scale-120 w-auto hover:text-blue-500"
                                                                >
                                                                    {translator(
                                                                        offer.title,
                                                                    )}
                                                                </Link>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            key={item.key}
                                            href={item.href}
                                            className="text-3xl transition-transform hover:scale-120"
                                        >
                                            {translator(item.label)}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    )}
                    {enableLangage && (
                        <div className="z-50 h-[30px] w-auto p-3 pr-7">
                            <Dropdown
                                menu={{ items: languageItems }}
                                placement="bottomCenter"
                            >
                                <div className="text-[oklch(0.79_0.02_343.73)]">
                                    {
                                        availableLanguages.find(
                                            (lang) => lang.code === language,
                                        )?.name
                                    }
                                </div>
                            </Dropdown>
                        </div>
                    )}
                </div>
                {image && menu && (
                    <Link
                        href="/"
                        className="absolute top-1/3 left-5 h-25 w-25 z-20"
                    >
                        <Image src={image} alt={'Logo'} fill />
                    </Link>
                )}
                {image && !menu && (
                    <Link
                        href="/"
                        className="absolute top-1/5 left-5 h-28 w-28 z-20"
                    >
                        <Image src={image} alt={'Logo'} fill />
                    </Link>
                )}
                <div className="flex items-center w-full justify-center">
                    <Link href="/" className="text-center text-7xl z-20">
                        {title}
                    </Link>
                </div>
            </div>
            <div
                className={`text-black min-h-screen pt-40 h-auto ${childClassName} bg-[oklch(0.79_0.02_343.73)]`}
            >
                {children}
            </div>
        </div>
    );
}
