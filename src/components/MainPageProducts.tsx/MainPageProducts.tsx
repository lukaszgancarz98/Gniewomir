import { messages } from '@/app/messages';
import { Product } from '@/app/products/products';
import translator from '@/app/translator';
import Link from 'next/link';

export type MainPageProductsProps = { products?: Product[] };

export default function MainPageProducts({ products }: MainPageProductsProps) {
    return (
        <div className="flex flex-col justify-start text-black items-center">
            {products && products.length > 0 ? (
                <div className="flex flex-row flex-wrap justify-between w-[80%] gap-6 pt-10">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/product/${product.id}`}
                            className="relative border border-gray-300 p-4 m-2 w-[20%] min-w-[250px] border-radius group bg-white"
                        >
                            <div className="relative flex justify-center mt-4 group-hover:opacity-30 transition-all duration-300">
                                <img
                                    src={`/${product.images?.[0]}`}
                                    alt={product.name.id}
                                    className="w-[250px] h-[250px] object-scale-down"
                                />
                            </div>
                            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-2xl font-bold p-5 unvisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-400">
                                {translator(product.name)}
                            </h2>
                            <h2 className="pt-3 text-xl font-bold text-center visible line-clamp-1 group-hover:opacity-0 group-hover:invisible transition-all duration-250">
                                {translator(product.name)}
                            </h2>
                            <p className="text-xl font-medium text-center group-hover:-translate-y-3 transition-all duration-300 group-hover:scale-120">
                                {product.price.toFixed(2)} zł
                            </p>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}
