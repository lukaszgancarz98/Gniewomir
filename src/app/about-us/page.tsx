'use client';

import Header from "../Header";
import { messages as commonMessages } from "../messages";
import translator from "../translator";
import { messages } from "./messages";

export default function AboutUs() {
    return (
        <Header
            title={translator(commonMessages.brandName)}
            image="/logo.jpg"
            enableLangage
        >
            <div className="flex flex-col bg-white text-black h-screen pt-10 items-center">
                <div className='text-4xl'>
                    {translator(messages.title)}
                </div>
                <div className="flex flex-col items-start gap-6 text-xl w-[80%]">
                    <div>
                        <div>
                            {translator(messages.subtitle)}
                        </div>
                        <div>
                            {translator(messages.mission)}
                        </div>
                        <div>
                            {translator(messages.description)}
                        </div>
                        <div>
                            {translator(messages.element1)}
                        </div>
                    </div>
                    <div>
                        {translator(messages.element2)}
                    </div>
                </div>
            </div>
        </Header>
    );
}