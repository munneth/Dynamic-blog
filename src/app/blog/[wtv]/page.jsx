import { useRouter } from 'next/router'
import { blogPosts } from '@/app/(data)/blogData'

 

export default function Page({ params }) {
    const { id } = params;
    const post = blogPosts.find((p) => p.id === id);

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}