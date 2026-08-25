'use client';

import Header from '../Header';
import { messages as commonMessages } from '../messages';
import translator from '../translator';
import { messages } from './messages';

const dispalyMessages: Array<keyof typeof messages> = [
    'subtitle',
    'mission',
    'description',
    'element1',
    'element2',
];

export default function AboutUs() {
    return (
        <Header title={translator(commonMessages.brandName)} enableLangage>
            <div className="flex flex-col bg-white text-black min-h-screen pt-10 pb-20 items-center">
                <div className="text-4xl">{translator(messages.title)}</div>
                <div className="flex flex-col items-start gap-6 text-xl w-[80%]">
                    {dispalyMessages.map((key, index) => (
                        <div key={index} className="w-full">
                            {translator(messages[key])}
                        </div>
                    ))}
                </div>
            </div>
        </Header>
    );
}
