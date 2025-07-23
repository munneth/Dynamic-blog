import  posts  from '@/app/(data)/blogData'
import Link from 'next/link'
import styles from './navbar.module.scss'

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
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