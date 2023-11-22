type Props = {
  params: {
    railsPathSegments: string[];
  };
};

export default function Page({ params: { railsPathSegments } }: Props) {
  const path = railsPathSegments.join('/');

  return <p>Fallback component for path: {path}</p>;
}
