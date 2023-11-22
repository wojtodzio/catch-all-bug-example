export default function Page() {
  return <p>City page</p>;
}

export async function generateStaticParams() {
  return [{ citySlug: 'new-york-city' }];
}

export const dynamicParams = false;
