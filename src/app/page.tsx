'use client';

import translator from './translator';
import { messages } from './messages';
import Header from './Header';
import MainPageProducts from '@/components/MainPageProducts.tsx/MainPageProducts';
import { products } from './products/products';

export default function Home() {
    const mostpopularProducts = products.filter((product) => product.popular);

    return (
        <Header
            title={translator(messages.brandName)}
            image="/logo-v3.png"
            enableLangage
            menu={[
                {
                    key: 'offer',
                    label: messages.homeTitle,
                    href: '/offer',
                    usePopover: true,
                },
                { key: 'about', label: messages.aboutTitle, href: '/about-us' },
                {
                    key: 'contact',
                    label: messages.contactTitle,
                    href: '/contact',
                },
            ]}
        >
            <div className="flex flex-col justify-center text-black pt-10">
                <div className="text-center text-4xl">
                    {translator(messages.pageTitle)}
                </div>
                <MainPageProducts products={mostpopularProducts} />
            </div>
        </Header>
    );
}
