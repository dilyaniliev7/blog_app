import BlogCard from "./BlogCard"
import Spinner from "./Spinner"

const BlogContainer = ({isPending, blogs}) => {

    if(isPending){
        return <Spinner />
    }

    const blogList = Array.isArray(blogs) ? blogs : blogs?.results || []

    return (
        <section className="padding-x py-6 max-container">
            <h2 className="font-semibold  text-xl mb-6 dark:text-white text-center">
                🍔Latest Posts
            </h2>

            <div className="flex items-center gap-6 justify-center flex-wrap">
                {blogList.map((blog) => <BlogCard key={blog.id} blog={blog} />)}

            </div>
        </section>
    )
}

export default BlogContainer