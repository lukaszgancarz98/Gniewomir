'use client';

import Header from '../Header';
import translator from '../translator';
import { messages as commonMessages } from '../messages';
import { offerMenu } from '../constants';

export default function page() {
    return (
        <Header
            title={translator(commonMessages.brandName)}
            image="/logo-v3.png"
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
            <div className="flex w-full h-full justify-center items-start">
                <div className="flex flex-row w-screen max-w-[1600px] text-black">
                    <div className="text-xl w-[25%] min-w-[400px] h-full flex flex-col gap-5 my-5 border-2">
                        {offerMenu.map((offer, index) => (
                            <div className="px-5" key={index}>
                                {translator(offer.title)}
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-full">Zydow</div>
                </div>
            </div>
        </Header>
    );
}
