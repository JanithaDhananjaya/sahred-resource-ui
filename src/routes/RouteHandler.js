import {Route, Routes} from "react-router-dom";
import SignUp from "../pages/sign-up/signUp";
import Login from "../pages/login/login";
import Home from "../pages/Home/home";
import SinglePost from "../pages/post/single-post/single-post";
import CreatePost from "../pages/post/create-post/create-post";

const RouteHandler = (props) => {
    return (
        <>
            <Routes>
                <Route path="/welcome" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/posts" element={<Home/>}/>
                <Route path="/post/details/:id" element={<SinglePost/>}/>
                <Route path="/post/create-post" element={<CreatePost/>}/>
            </Routes>
        </>
    )
}

export default RouteHandler;