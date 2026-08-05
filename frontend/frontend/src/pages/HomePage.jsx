import { getBlogs } from "@/services/apiBlog"
import Header from "@/ui_components/Header"
import BlogContainer from "@/ui_components/BlogContainer"
import { useQuery } from "@tanstack/react-query"

const HomePage = () => {

    const {isPending, isError, error, data:blogs} = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs
    })


    return (
        <>
            <Header />
            <BlogContainer isPending={isPending} blogs={blogs}/>
        </>
    )
}

export default HomePage;