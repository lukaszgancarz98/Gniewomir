'use client';

import Header from '../../Header';
import translator from '../../translator';
import { messages as commonMessages } from '../../messages';
import { products } from '../../products/products';
import { offerMenu } from '@/app/constants';
import Slider from '@/components/Slider';
import { messages } from './messages';
import Link from 'next/link';
import language from '@/app/language';

export default function Product({ tag }: { tag: string }) {
    const findProduct = products.find((p) => p.id === tag);
    const tagMenuTitle = offerMenu.find(
        (item) => item.tag === findProduct?.tag,
    )?.title;

    if (!findProduct) {
        return <div>Product not found</div>;
    }

    const bottomInfoClassName =
        'text-start w-[60%] py-10 px-10 text-xl border-t-[1px] border-gray-300';
    const onlyDescription =
        findProduct.description &&
        !findProduct.setContents &&
        !findProduct.modificationOptions &&
        !findProduct.availableVariants &&
        !findProduct.simulatedDamage &&
        !findProduct.trainingOptions;

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
                    href: `/contact/${(translator(findProduct.name) as string).replace(' ', '_').toLowerCase() + '+' + language()}`,
                },
            ]}
        >
            <div className="flex flex-col w-full min-h-[calc(100vh-theme(space.40))] items-center">
                <Link
                    href={`/products/${findProduct.tag}`}
                    className="text-xl flex justify-center w-[90%] py-5 border-b-[1px] border-gray-300 group gap-2"
                >
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-100 transition-all duration-200 group-hover:opacity-0"
                    >
                        <path
                            d="M6 12H18M6 12L11 7M6 12L11 17"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <div className="transition-all duration-500 group-hover:scale-120">
                        {tagMenuTitle ? translator(tagMenuTitle) : ''}
                    </div>
                </Link>
                <div
                    className={`flex w-full pt-10 ${(findProduct.additionalInfo || !onlyDescription) && 'mb-15'}`}
                >
                    <div className="w-full">
                        <Slider findProduct={findProduct} />
                    </div>
                    <div className="w-full flex flex-col items-start justify-start">
                        <div className="flex items-start justify-start w-full text-4xl font-semibold p-3 text-start">
                            {translator(findProduct.name)}
                        </div>
                        <div className="w-full h-full flex flex-col justify-between">
                            <div>
                                <div className="text-2xl font-medium flex justify-start py-4">
                                    Cena{findProduct.pricePrefix ? ' od' : ''}:{' '}
                                    {findProduct.price} PLN
                                </div>
                                {findProduct.setContents && (
                                    <div className="pt-5 w-[90%]">
                                        {!findProduct.hideSetContentsTitle && (
                                            <div className="text-xl font-bold">
                                                {translator(
                                                    messages.setContentsTitle,
                                                )}
                                            </div>
                                        )}
                                        <div id="setContents" className="pl-7">
                                            {findProduct.setContents.map(
                                                (content, index) => {
                                                    const isLastItem = () => {
                                                        if (
                                                            findProduct.setContents &&
                                                            index ===
                                                                findProduct
                                                                    .setContents
                                                                    .length -
                                                                    1
                                                        ) {
                                                            return '.';
                                                        }

                                                        return ',';
                                                    };
                                                    const haveItems =
                                                        content.items &&
                                                        content.items.length >
                                                            0;

                                                    return (
                                                        <div
                                                            key={
                                                                content.title.id
                                                            }
                                                        >
                                                            -&nbsp;&nbsp;
                                                            {translator(
                                                                content.title,
                                                            )}
                                                            {haveItems
                                                                ? ''
                                                                : isLastItem()}
                                                            {content.items &&
                                                                content.items.map(
                                                                    (
                                                                        item,
                                                                        index,
                                                                    ) => {
                                                                        const isAddLastItem =
                                                                            () => {
                                                                                if (
                                                                                    content.items &&
                                                                                    index ===
                                                                                        content
                                                                                            .items
                                                                                            .length -
                                                                                            1
                                                                                ) {
                                                                                    return '.';
                                                                                }

                                                                                return ',';
                                                                            };
                                                                        return (
                                                                            <div
                                                                                key={
                                                                                    item.id
                                                                                }
                                                                                className="pl-7"
                                                                            >
                                                                                ·&nbsp;&nbsp;
                                                                                {translator(
                                                                                    item,
                                                                                )}
                                                                                {isAddLastItem()}
                                                                            </div>
                                                                        );
                                                                    },
                                                                )}
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </div>
                                )}
                                {findProduct.modificationOptions && (
                                    <div className="pt-5 w-[90%]">
                                        <div className="text-xl font-bold">
                                            {translator(
                                                messages.modificationOptionsTitle,
                                            )}
                                        </div>
                                        <div className="pl-7">
                                            {findProduct.modificationOptions.map(
                                                (content) => (
                                                    <div key={content.id}>
                                                        -&nbsp;&nbsp;
                                                        {translator(content)}
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}
                                {findProduct.availableVariants && (
                                    <div className="pt-5 w-[90%]">
                                        <div className="text-xl font-bold">
                                            {translator(
                                                messages.availableVariantsTitle,
                                            )}
                                        </div>
                                        <div className="pl-7">
                                            {findProduct.availableVariants.map(
                                                (content) => (
                                                    <div key={content.title.id}>
                                                        -&nbsp;&nbsp;
                                                        {translator(
                                                            content.title,
                                                        )}
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}
                                {findProduct.simulatedDamage && (
                                    <div className="pt-5 w-[90%]">
                                        <div className="text-xl font-bold">
                                            {translator(
                                                messages.simulatedDamageTitle,
                                            )}
                                        </div>
                                        <div className="pl-7">
                                            {findProduct.simulatedDamage.map(
                                                (content) => (
                                                    <div key={content.title.id}>
                                                        -&nbsp;&nbsp;
                                                        {translator(
                                                            content.title,
                                                        )}
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}
                                {findProduct.trainingOptions && (
                                    <div className="pt-5 w-[90%]">
                                        <div className="text-xl font-bold">
                                            {translator(
                                                messages.trainingOptionsTitle,
                                            )}
                                        </div>
                                        <div className="pl-7">
                                            {findProduct.trainingOptions.map(
                                                (content) => (
                                                    <div key={content.title.id}>
                                                        -&nbsp;&nbsp;
                                                        {translator(
                                                            content.title,
                                                        )}
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}
                                {onlyDescription && (
                                    <div
                                        id="onlyDescription"
                                        className="pt-5 text-xl w-[90%]"
                                    >
                                        {translator(findProduct.description)}
                                    </div>
                                )}
                            </div>
                            {findProduct.priceExtension && (
                                <div>
                                    {translator(findProduct.priceExtension)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {!onlyDescription && (
                    <div
                        id="description"
                        className={`${bottomInfoClassName} ${findProduct.additionalInfo ? '' : 'mb-15'}`}
                    >
                        {translator(findProduct.description)}
                    </div>
                )}
                {findProduct.additionalInfo && (
                    <div className={`${bottomInfoClassName} mb-15`}>
                        {translator(findProduct.additionalInfo)}
                    </div>
                )}
            </div>
        </Header>
    );
}
