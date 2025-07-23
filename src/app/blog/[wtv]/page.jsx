
import posts from '@/app/(data)/blogData';

export default function Page({ params }) {
  const { wtv } = params;
  const post = posts.find((p) => p.slug === wtv);



  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}