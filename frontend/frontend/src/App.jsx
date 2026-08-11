import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./ui_components/AppLayout"
import ProtectedRoute from "./ui_components/ProtectedRoute"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import CreatePostPage from "./pages/CreatePostPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const App = () => {
    return  (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="blogs/:slug" element={<DetailPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="signin" element={<LoginPage />} />
                    <Route path="create" element={<ProtectedRoute><CreatePostPage /></ProtectedRoute>} />
{/*                     <Route path="profile" element={<ProfilePage />} /> */}
                </Route>
            </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App