'use client';

import Header from '../Header';
import translator from '../translator';
import { messages as commonMessages } from '../messages';

export default function page() {
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
            <div className="flex flex-col gap-5 w-full min-h-[calc(100vh-theme(space.40))] justify-center items-center text-black text-3xl">
                <div>E-mail: ggsimulations@gmail.com</div>
                <div>Telefon: +48 693 414 504</div>
                <textarea
                    className="w-[800px] h-[200px] border-2 p-2 text-xl"
                    placeholder="Napisz do nas wiadomość"
                />
            </div>
        </Header>
    );
}
