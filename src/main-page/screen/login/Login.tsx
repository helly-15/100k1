import * as React from 'react';
import {useState} from "react";
import Lottie from "lottie-react";
import './Login.scss';
import { Form, Input, Button} from 'antd';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import login from "../../../animation/login/login.json";
import "antd/lib/form/style/index.css";
import "antd/lib/form/style/index-pure.less";
import "antd/lib/input/style/index.css";
import "antd/lib/input/style/index-pure.less";
import "antd/lib/style/index-pure.less";
import "antd/lib/button/style/index.css";
import {CHANGE_USER_INFO} from "../../../redux-state/reducers/userReducer";

const classnameRoot = "login";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch()
    const handleLogin=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const {user} = userCredential;
                   dispatch({ type: CHANGE_USER_INFO, payload: {
                        email: user.email,
                        uid: user.uid,
                        // @ts-ignore
                        token: user.accessToken,
                    } })
            })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //
            //     console.log (`${errorCode  }error code` )
            //     console.log (`${errorMessage }error message`)
            // });
    }
    return <div className={classnameRoot}>
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
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{type: 'email', required: true, message: 'Please input valid email'}]}
                >
                    <Input onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    hasFeedback
                    className={`${classnameRoot}__password`}
                    rules={[{required: true, message: 'Please input your password'}]}
                >
                    <Input.Password onChange={(e)=>setPass(e.target.value)}/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit" onClick={handleLogin}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
};