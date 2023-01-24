import {Avatar, Button, Divider, Input, List, Typography, Form} from 'antd';
import React, {useEffect, useReducer, useState} from "react";
import Services from "../../../service/services";
import {PostContainer, PostOverviewContainer, PostPageHeader,} from "./styles";
import avatar from "../../../assets/avatar.svg";

const {Title, Text} = Typography;

const formReducer = (state, event) => {
    return {
        ...state, [event.target.name]: event.target.value
    }
};

const SinglePost = () => {
    const [postId, setPostId] = useState(window.location.pathname.split('/')[3]);
    const [post, setPost] = useState('');
    const [newComment, setNewComment] = useReducer(formReducer, {});
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        Services.getPost(postId).then((response) => {
            setPost(response.data)
        }).catch((error) => {
            console.log(error)
        });

        Services.getComments(postId).then((response) => {
            setComments(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }, {comments});

    const sendComment = async () => {
        Object.assign(newComment, {
            'user_id': 1,
            'post_id': postId
        });
        Services.addComment(newComment).then((response) => {
            form.resetFields();
            setComments(comments);
        }).catch((error) => {
            console.log(error)
        });
    };

    return (
        <PostContainer>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    <PostPageHeader title={post.title}/>
                    <PostOverviewContainer>
                        <img src={post.image} alt={post.title}/>
                        <Text style={{margin: '10px'}}>{post.description}</Text>
                    </PostOverviewContainer>
                    <h3>Comments</h3>
                    <Divider/>
                    {
                        comments && (
                            <List
                                itemLayout="horizontal"
                                dataSource={comments}
                                renderItem={(comment) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={avatar}/>}
                                            title={<a href="https://ant.design">{comment.comment}</a>}
                                        />
                                    </List.Item>
                                )}
                            />
                        )
                    }
                    <br/>
                    <br/>
                   <Form form={form}>
                       <Form.Item
                           name='comment'
                       >
                           <Input.Group compact>
                               <Input
                                   style={{
                                       width: 'calc(100% - 200px)',
                                   }}
                                   size='large'
                                   name='comment'
                                   onChange={setNewComment}
                               />
                               <Button type="primary" size='large' onClick={sendComment}>Send</Button>
                           </Input.Group>
                       </Form.Item>

                   </Form>
                </>
            )}
        </PostContainer>
    )
};

export default SinglePost;