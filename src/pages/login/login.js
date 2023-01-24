import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Layout, Card } from 'antd';
import { useNavigate} from "react-router-dom";

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

const Login = (props) => {
    let navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const login=()=> {
      navigate('/posts');
    }
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
                        <h1>Sign In</h1>
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
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={login}>
                                Login In
                            </Button><br/>
                            Or <a href="">register now?</a>
                        </Form.Item>
                    </Form>
                </Card>

            </Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    );
};

export default Login;