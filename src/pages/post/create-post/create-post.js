import React from "react";
import {Alert, Button, Divider, Form, Input, List} from 'antd';
import {Container} from "@mui/material";
import Services from "../../../service/services";
import {PostContainer, PostOverviewContainer, PostPageHeader} from "./styles";

const {TextArea} = Input;


const CreatePost = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {

        Object.assign(values, {
            'user_id': 1
        });
        Services.addPost(values).then((response) => {
            form.resetFields();
        }).catch((error) => {
            console.log(error)
        });
    };

    return (
        <>
            <PostContainer>
                <>
                    <PostPageHeader title='Create Post'/>
                    <PostOverviewContainer>
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Image"
                                name="image"
                                type='url'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input image url!',
                                    },
                                ]}
                            >
                                <TextArea rows={4}/>
                            </Form.Item>
                            <Form.Item
                                label="Title"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input title!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Description"
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input description',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>


                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </PostOverviewContainer>
                </>
            </PostContainer>
        </>
    );
};
export default CreatePost;