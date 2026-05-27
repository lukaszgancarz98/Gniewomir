import Product from './Product';

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    return <Product tag={tag} />;
}
