import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./ui_components/AppLayout"
import ProtectedRoute from "./ui_components/ProtectedRoute"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import CreatePostPage from "./pages/CreatePostPage"
import ProfilePage from "./pages/ProfilePage"
import { QueryClient } from "@tanstack/react-query"
import { useState, useEffect } from 'react'
import { getUsername } from "./services/apiBlog"
import { useQuery } from "@tanstack/react-query"

const queryClient = new QueryClient()

const App = () => {

    const [username, setUsername] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const {data} = useQuery({
        queryKey: ["username"],
        queryFn: getUsername
    })

    useEffect(function(){
        if(data){
            setUsername(data.username)
            setIsAuthenticated(true)
        }
    }, [data])


    return  (
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout isAuthenticated={isAuthenticated} username={username} setUsername={setUsername}/>}>
                    <Route index element={<HomePage />} />
                    <Route path="profile/:username" element={<ProfilePage />} />
                    <Route path="blogs/:slug" element={<DetailPage username={username} isAuthenticated={isAuthenticated}/>} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="signin" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUsername={setUsername}/>} />
                    <Route path="create" element={<ProtectedRoute><CreatePostPage isAuthenticated={isAuthenticated}/></ProtectedRoute>} />
{/*                     <Route path="profile" element={<ProfilePage />} /> */}
                </Route>
            </Routes>
            </BrowserRouter>
    )
}

export default App