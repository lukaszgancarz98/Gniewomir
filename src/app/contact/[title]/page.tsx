import Contact from './Contact';

export default async function page({
    params,
}: {
    params: Promise<{ title: string }>;
}) {
    const { title } = await params;

    return <Contact title={title} />;
}
