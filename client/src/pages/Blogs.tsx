import { Appbar } from "../components/AppBar"
import { Blogcard } from "../components/BlogCard"
import { useBlogs } from "../hooks"


export const Blogs = () => {
    const { loading, blogs} = useBlogs();

    if (loading) {
        return <div>
            Loading...
        </div>
    }

    return <div className="bg-bg1">
        <Appbar/>
    <div className="flex justify-center">
        <div className="w-3xl">
            {blogs.map(blog => <Blogcard
        id={blog.id}
        authorName={blog.author.name || 'Anonymous'}
        title={blog.title}
        content={blog.content}
        publishedDate={"23rd May 2024"}/> )}
    </div>
    </div>
    </div>
}