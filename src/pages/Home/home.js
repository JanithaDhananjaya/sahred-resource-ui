import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Layout} from 'antd';
import Services from "../../service/services";
import {PageHeader} from "../../components/PageHeader";
import {PostsList} from "../../components/PostsList";
import {PostContainer, SearchInput} from "./styles";

const {Header} = Layout;

const Home = () => {
    const [posts, setPosts] = useState([]);
    let navigate = useNavigate();
    const postDetails = (postId) => {
        navigate(`/post/details/${postId}`);
    };
    const createPost = (postId) => {
        navigate(`/post/create-post`);
    };
    useEffect(() => {
        Services.getPosts().then((response) => {
            console.log(response)
            setPosts(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    return (
        <PostContainer>
            <PageHeader title="PhicsHub" subtitle="Portal for all attractive captures"/>
            <Button type='default' onClick={createPost}>Create</Button>
            <SearchInput
                placeholder="Search"
                type="search"
            />
            <PostsList recipes={posts}/>
        </PostContainer>
    )
};

export default Home;