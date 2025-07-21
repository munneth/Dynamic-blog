import { blogPosts } from '@/app/(data)/blogData'

export default function Navbar() {
    return(
        <nav>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul> 
        </nav>
    )
}