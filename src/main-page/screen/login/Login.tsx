import * as React from 'react';
import Lottie from "lottie-react";
import './Login.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import login from "../../../animation/login/login.json";
import "antd/lib/form/style/index.css";
import "antd/lib/form/style/index-pure.less";
import "antd/lib/input/style/index.css";
import "antd/lib/input/style/index-pure.less";
import "antd/lib/checkbox/style/index.css";
import "antd/lib/checkbox/style/index-pure.less";
import "antd/lib/style/index-pure.less";
import "antd/lib/button/style/index.css";

const classnameRoot = "login";

export const Login = () => (
    <div className = {classnameRoot}>
        <Lottie
            className={`${classnameRoot}__image`}
            animationData={login}
            loop
        />
        <div className={`${classnameRoot}__form_wrapper`}>
            <Form
                name="basic"
                layout="vertical"
                className={`${classnameRoot}__form`}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    className={`${classnameRoot}__password`}
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    </div>
    );