'use client';

import Header from "../Header";
import translator from "../translator";
import { messages as commonMessages } from "../messages";

export default function page() {
    return (
        <Header
            title={translator(commonMessages.brandName)}
            image="/logo.jpg"
            enableLangage
            menu={[
                { key: 'about', label: commonMessages.aboutTitle, href: '/about-us' },
                { key: 'contact', label: commonMessages.contactTitle, href: '/contact' },
            ]}
        >
            <div></div>
        </Header>
    );
}