import Hero from "@/ui_components/Hero"
import BlogContainer from "@/ui_components/BlogContainer"
import { useQuery } from "@tanstack/react-query"
import { userParams } from "react-router-dom"
import { Modal } from "@/ui_components/Modal"
import { getUserInfo } from "@/services/apiBlog"
import Spinner from "@/ui_components/Spinner"
import SignUpPage from "./pages/SignUpPage"

const ProfilePage = ({authUsername}) => {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(curr => !curr)
    }

    const {username} = useParams()

    const { isPending, data } = useQuery({
        queryKey: ["users", username],
        queryFn: () => getUserInfo(username)
    })

    const blogs = data?.author_posts

    if(isPending){
        return <Spinner />
    }

    return (
        <>
            <Hero userInfo={data} authUsername={authUsername} toggleModal={}/>
            <BlogContainer blogs={blogs} title={`🍔 ${username}'s Posts`}/>

            {showModal && <Modal toggleModal={toggleModal}>
                <SignUpPage useInfo={data} updateForm={true}/>
            </Modal>    }
        </>
    )
}

export default ProfilePage