import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { authContext } from '../contexts/AuthContextProvider';
const { Title } = Typography;


const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // props.setLoggedIn(true);
        // props.navigate.push('/mycourses');
    }

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };


    return (
        <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={ handleLogin } style={{maxWidth: "350px", marginLeft: "auto", marginRight: "auto", marginTop: "150px"}} >
        <Title level={3} style={{margin: "40px", textAlign: "center"}}>АВТОРИЗАЦИЯ</Title>
            <Form.Item name="username" rules={[
                {   required: true,
                    message: 'Пожалуйста, введите ваш логин!', }, ]} >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="Email" style={{height: "50px"}} />
            </Form.Item>
            <Form.Item name="password" rules={[
                { required: true,
                  message: 'Пожалуйста, введите ваш пароль!', }, ]} >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" style={{height: "50px"}} />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="" style={{float: "right"}}> Забыли пароль? </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%", height: "40px"}} > Войти в систему </Button>
                {/* Or <a href="">register now!</a> */}
            </Form.Item>
    </Form>
    );
};

export default LoginPage;
// export default () => <LoginPage/>;
// export default () => <NormalLoginForm />