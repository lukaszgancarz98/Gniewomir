export type Products = {
    id: number;
    name: string;
    description: string;
    price: string;
};

export type MainPageProductsProps = {
    products?: Products[];
};

export default function MainPageProducts({ products }: MainPageProductsProps) {
    return (
        <div className="flex flex-col justify-start bg-black text-white h-screen pt-10 items-center">
            {products && products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-gray-800 p-4 h-auto">
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <p className="text-gray-400">{product.description}</p>
                            <p className="text-green-500 font-bold">{product.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}