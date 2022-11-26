import { useModel, useAccess, Access, Navigate, history, Link } from "@umijs/max";
import { Button, Form, Input, message } from "antd";
import { getUser } from "@/services/UserApi";
import '@/styles/app/login.less';

export default () => {
    const { initialState , setInitialState } = useModel("@@initialState");
    const { loginHandler } = useModel('useLoginModel');

    const access = useAccess();

    const formHandler = async (data: any) => {
        const user = await getUser(data);

        if (user == null) {
        message.error("Error with authentication");
        } else {
        localStorage.setItem("token", user.token);
        setInitialState({ token: user.token, userName: user.username });
        history.push("/app/index");
        }
    };

    return (
        <div id="page-login">
            <div className="container">
                <div className="header">Вход</div>
                <Form onFinish={formHandler}>
                    <Form.Item name="username">
                        <label>
                            <div className="input">
                                <input type="text" placeholder="Введите Username" />
                            </div>
                        </label>
                    </Form.Item>
                    <Form.Item name="password">
                        <label>
                            <div className="input">
                                <input type="password" placeholder="Введите пароль" />
                            </div>
                        </label>
                    </Form.Item>
                <Button htmlType="submit" className="button">Войти</Button>
                </Form>
                <Button className="button white">Регистрация</Button>
                <div className="forgot-password">Забыли пароль? <span>восстановить</span></div>
            </div>
        </div>
    );
};