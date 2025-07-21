
import posts from '@/app/(data)/blogData';

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { wtv } = resolvedParams;
  const post = posts.find((p) => p.slug === wtv);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}