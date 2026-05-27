import { Product } from '@/app/products/products';
import { useState } from 'react';

export default function Slider({ findProduct }: { findProduct: Product }) {
    const images = findProduct.images;
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className="flex flex-col items-center gap-6">
            {/* GŁÓWNY SLIDER */}
            <div className="relative w-[500px] h-[500px] overflow-hidden rounded-lg">
                <div
                    className="flex h-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((img) => (
                        <img
                            key={img}
                            src={`/${img}`}
                            alt={findProduct.name.id}
                            className="w-[500px] h-[500px] object-contain flex-shrink-0"
                        />
                    ))}
                </div>

                <button
                    onClick={prev}
                    hidden={images.length <= 1 || index === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded"
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    hidden={images.length <= 1 || index === images.length - 1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded"
                >
                    ›
                </button>
            </div>

            {/* MINIATURKI POD GŁÓWNYM ZDJĘCIEM */}
            <div className="w-[400px] overflow-hidden">
                <div className="flex gap-4 transition-transform duration-300">
                    {images.map((img, i) => {
                        let shouldShow = false;

                        if (index === 0) {
                            shouldShow = i >= 0 && i <= 3;
                        } else if (index >= images.length - 2) {
                            shouldShow =
                                i >= images.length - 4 &&
                                i <= images.length - 1;
                        } else {
                            shouldShow = i >= index - 1 && i <= index + 2;
                        }

                        if (!shouldShow) return null;

                        return (
                            <button
                                key={img}
                                onClick={() => setIndex(i)}
                                className={`w-24 h-24 border rounded overflow-hidden ${
                                    index === i
                                        ? 'border-blue-500'
                                        : 'border-gray-300'
                                }`}
                            >
                                <img
                                    src={`/${img}`}
                                    alt={`thumb-${i}`}
                                    className="object-cover w-full h-full"
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
