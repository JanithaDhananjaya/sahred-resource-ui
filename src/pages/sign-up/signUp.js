import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Layout, Card } from 'antd';

const { Header, Footer, Content } = Layout;

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px'
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff'
};

const SignUp = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Layout>
            <Content style={contentStyle}>
                <Card
                    style={{
                        maxWidth: '30%',
                        padding: '10px',
                        margin: 'auto'
                    }}
                >
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <h1>Sign Up</h1>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register
                            </Button><br/>
                            Or <a href="/login">Already have an account?</a>
                        </Form.Item>
                    </Form>
                </Card>

            </Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    );
};

export default SignUp;