import Products from './Products';

export default async function page({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;

    return <Products tag={tag} />;
}
