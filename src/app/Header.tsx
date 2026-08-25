'use client';

import Image from 'next/image';
import { useLanguage } from './hooks/languageContext';
import { availableLanguages, offerMenu } from './constants';
import { useEffect, useMemo, useState } from 'react';
import Dropdown from 'antd/es/dropdown/dropdown';
import translator, { MessageObject } from './translator';
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Product, products } from './products/products';

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
                <div className="relative flex flex-row-reverse justify-between w-full items-center h-[80px]">
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
                    {menu && (
                        <div className="relative flex flex-row justify-start gap-8 pl-10 py-3 z-60">
                            <div className="flex flex-row gap-10 text-3xl justify-evenly my-2 h-[40px]">
                                {menu.map((item) =>
                                    item.usePopover ? (
                                        <div
                                            key={item.key}
                                            className="
                                                relative text-3xl font-medium
                                                transition-colors duration-300
                                                hover:text-[oklch(0.79_0.02_343.73)]
                                                group
                                            "
                                        >
                                            <div>{translator(item.label)}</div>
                                            <span
                                                className="
                                                    absolute left-0 -bottom-0
                                                    w-full h-[2px]
                                                    bg-[oklch(0.79_0.02_343.73)]
                                                    origin-center
                                                    scale-x-0
                                                    transition-transform duration-300
                                                    group-hover:scale-x-100
                                                "
                                            />
                                            <span
                                                className="
                                                    absolute left-0 -bottom-1
                                                    w-full h-[2px]
                                                    bg-[oklch(0.79_0.02_343.73)]
                                                    origin-center
                                                    scale-x-0
                                                    transition-transform duration-300
                                                    group-hover:scale-x-100
                                                "
                                            />
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
                                                                    <div
                                                                        className="text-gray-500 text-center w-auto border-b-1 border-gray-500 pb-2"
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {translator(
                                                                            offer.title,
                                                                        )}
                                                                    </div>
                                                                );
                                                            }

                                                            const borderClass =
                                                                index ===
                                                                offerMenu.length -
                                                                    1
                                                                    ? ''
                                                                    : 'border-b-1 border-gray-500 pb-2';

                                                            return (
                                                                <Link
                                                                    key={index}
                                                                    href={`/products/${offer.tag}`}
                                                                    className={`block ${borderClass}`}
                                                                >
                                                                    <div className="text-black text-center transition-transform hover:scale-120 w-auto hover:text-[oklch(0.79_0.02_343.73)]">
                                                                        {translator(
                                                                            offer.title,
                                                                        )}
                                                                    </div>
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
                                            className="
                                                relative text-3xl font-medium
                                                transition-colors duration-300
                                                hover:text-[oklch(0.79_0.02_343.73)]
                                                group
                                            "
                                        >
                                            {translator(item.label)}
                                            <span
                                                className="
                                                    absolute left-0 -bottom-0
                                                    w-full h-[2px]
                                                    bg-[oklch(0.79_0.02_343.73)]
                                                    origin-center
                                                    scale-x-0
                                                    transition-transform duration-300
                                                    group-hover:scale-x-100
                                                "
                                            />
                                            <span
                                                className="
                                                    absolute left-0 -bottom-1
                                                    w-full h-[2px]
                                                    bg-[oklch(0.79_0.02_343.73)]
                                                    origin-center
                                                    scale-x-0
                                                    transition-transform duration-300
                                                    group-hover:scale-x-100
                                                "
                                            />
                                        </Link>
                                    ),
                                )}
                            </div>
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
                <div
                    id="productTypeTitle"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center"
                >
                    <Link href="/" className="text-center text-7xl z-20 w-full">
                        {title}
                    </Link>
                </div>
                <SearchBar
                    minSearchLength={2}
                    className="absolute right-0 bottom-0 z-20 mr-10 pb-5"
                    products={products}
                />
            </div>
            <div
                className={`text-black min-h-screen pt-40 h-auto ${childClassName} bg-[oklch(0.79_0.02_343.73)]`}
            >
                {children}
            </div>
            <div
                id="footer"
                className="w-full h-40 bg-white text-black flex items-center justify-evenly w-full px-10"
            >
                <div>Polityka prywatności i pliki cookie</div>
                <div>Warunki zakupu</div>
                <div>Metody wysyłki</div>
            </div>
        </div>
    );
}
