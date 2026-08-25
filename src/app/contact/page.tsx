'use client';

import Header from '../Header';
import translator from '../translator';
import { messages as commonMessages } from '../messages';

export default function page() {
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
            <div className="flex flex-col gap-5 w-full min-h-[calc(100vh-theme(space.40))] justify-center items-center text-black text-3xl">
                <div>E-mail: ggsimulations@gmail.com</div>
                <div>Telefon: +48 693 414 504</div>
                <div className="flex flex-col items-center justify-center">
                    <input
                        type="text"
                        placeholder="Tytuł wiadomości"
                        className="w-[800px] border-1 p-2 text-xl border-b-0 rounded-t bg-white"
                    />
                    <textarea
                        className="w-[800px] h-[200px] border-1 p-2 text-xl rounded-b bg-white"
                        placeholder="Napisz do nas wiadomość"
                    />
                    <button className="w-[150px] text-black px-4 py-2 rounded hover:scale-120 hover:text-bold transition-all duration-200">
                        Wyślij
                    </button>
                </div>
            </div>
        </Header>
    );
}
