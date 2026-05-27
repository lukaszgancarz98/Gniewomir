'use client';

import Header from '../../Header';
import translator from '../../translator';
import { messages as commonMessages } from '../../messages';
import { messages } from './messages';
import { Product, products } from '../products';
import { useEffect, useState } from 'react';
import { offerMenu, OfferMenuItem } from '@/app/constants';
import Link from 'next/link';

export default function Products({ tag }: { tag: string }) {
    const [productsList, setProductsList] = useState<Product[]>();
    const [productType, setProductType] = useState<OfferMenuItem>();

    useEffect(() => {
        if (tag) {
            const filteredProducts = products.filter((p) => p.tag === tag);
            const findProductType = offerMenu.find((item) => item.tag === tag);

            setProductsList(filteredProducts);
            setProductType(findProductType);
        }
    }, [tag]);

    return (
        <Header
            title={translator(commonMessages.brandName)}
            image="/placeholder.png"
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
            <div className="flex flex-col flex-wrap w-full h-full justify-center items-center p-10">
                <div className="relative flex justify-start w-[90%]">
                    <Link
                        href="/"
                        className="text-xl font-medium z-50 group flex flex-row gap-2"
                    >
                        <svg
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                        >
                            <path
                                d="M6 12H18M6 12L11 7M6 12L11 17"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="transition-all duration-300 group-hover:scale-140 group-hover:text-blue-600">
                            {translator(messages.return)}
                        </div>
                    </Link>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 text-3xl font-medium text-center">
                        {productType ? translator(productType.title) : ''}
                    </div>
                </div>
                {tag !== 'individual_offers' ? (
                    <div className="flex flex-row flex-wrap w-[90%] h-full justify-center items-center p-10 gap-5">
                        {productsList?.map((product) => (
                            <Link
                                key={product.id}
                                href={`/product/${product.id}`}
                                className="relative border border-gray-300 p-4 m-2 w-[20%] min-w-[250px] border-radius group"
                            >
                                <div className="relative flex justify-center mt-4 group-hover:opacity-30 transition-all duration-300">
                                    <img
                                        src={`/${product.images[0]}`}
                                        alt={product.name.id}
                                        className="w-[250px] h-[250px] object-scale-down"
                                    />
                                </div>
                                <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-2xl font-bold text-center p-5 unvisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-400">
                                    {translator(product.name)}
                                </h2>
                                <h2 className="pt-3 text-xl font-bold text-center visible line-clamp-1 group-hover:opacity-0 group-hover:invisible transition-all duration-250">
                                    {translator(product.name)}
                                </h2>
                                <p className="text-xl font-medium text-center group-hover:-translate-y-3 transition-all duration-300 group-hover:scale-120">
                                    {product.price.toFixed(2)} zł
                                </p>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col w-[50%] h-full justify-center items-center p-10 gap-7 text-2xl text-center">
                        <p className="text-2xl">
                            {translator(messages.individualOffersTitle)}
                        </p>
                        <p className="leading-9">
                            {translator(messages.individualOffers)}
                        </p>
                    </div>
                )}
            </div>
        </Header>
    );
}
