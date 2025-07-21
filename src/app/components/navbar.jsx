import  posts  from '@/app/(data)/blogData'
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul> 
        </nav>
    )
}