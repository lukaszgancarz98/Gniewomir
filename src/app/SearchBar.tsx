'use client';

import translator from './translator';
import { messages } from './messages';
import { Product } from './products/products';
import { useLanguage } from './hooks/languageContext';
import { useState } from 'react';
import Link from 'next/link';

type SearchBarProps = {
    minSearchLength?: number;
    className?: string;
    products: Product[];
};

export default function SearchBar({
    minSearchLength = 2,
    className,
    products,
}: SearchBarProps) {
    const { language } = useLanguage();
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);
    const [query, setQuery] = useState('');

    const onSearch = (query: string) => {
        const filteredProducts = products.filter((product) => {
            return product.name?.[language]
                ?.toLocaleLowerCase()
                .includes(query);
        });
        setFoundProducts(filteredProducts);
    };

    return (
        <div
            className={`w-[350px] ${className || ''}`}
            tabIndex={-1}
            onBlur={() => {
                setFoundProducts([]);
            }}
        >
            <input
                type="text"
                value={query}
                placeholder={translator(messages.searchPlaceholder) as string}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                    const query = e.target.value;
                    setQuery(query);

                    if (query.length >= minSearchLength) {
                        onSearch(query);
                    } else {
                        setFoundProducts([]);
                    }
                }}
            />
            {foundProducts.length > 0 && (
                <ul className="absolute bg-white border rounded-lg mt-1 w-full max-h-60 overflow-y-auto z-10">
                    {foundProducts.map((product) => (
                        <li
                            key={product.id}
                            className="px-4 py-2 hover:bg-gray-200"
                        >
                            <Link href={`/product/${product.id}`}>
                                {translator(product.name)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
