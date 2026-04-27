'use client';

import translator from './translator';
import { messages } from './messages';
import Header from './Header';
import MainPageProducts from '@/components/MainPageProducts.tsx/MainPageProducts';
import { mostpopularProducts } from './constants';

export default function Home() {
    return (
        <Header
            title={translator(messages.brandName)}
            image="/logo.jpg"
            enableLangage
            menu={[
                { key: 'offer', label: messages.homeTitle, href: '/offer' },
                { key: 'about', label: messages.aboutTitle, href: '/about-us' },
                { key: 'contact', label: messages.contactTitle, href: '/contact' },
            ]}
        >
            <div className="flex flex-col justify-center bg-black text-white h-screen pt-10">
                <div className='text-center text-4xl'>
                    {translator(messages.pageTitle)}
                </div>
                <MainPageProducts  products={mostpopularProducts}/>
            </div>
        </Header>
    );
}
