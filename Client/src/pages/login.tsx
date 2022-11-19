import { getUser } from '@/services/UserApi';
import { useModel } from '@umijs/max';
import { Access } from '@umijs/max';
import { useAccess, history } from '@umijs/max';
import { Navigate } from '@umijs/max';
import { Button, Form, Input, message, Space } from 'antd';

export default () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { loginHandler } = useModel('useLoginModel');

  const access = useAccess();

  const formHandler = async (data: any) => {
    //await loginHandler(data.name);
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
    <>
      <Access accessible={access.canUser}>
        <Navigate to="/app/index" />
      </Access>
      <Access accessible={!access.canUser}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center', textAlign: 'center' }}>
          <Space align="center">
            <Form onFinish={formHandler}>
              <Form.Item name="username">
                <Input placeholder='Username' autoComplete='off' />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password placeholder='Password' autoComplete='off' />
              </Form.Item>
              <Button htmlType='submit' style={{ display: 'block', width: '100%' }}>Войти</Button>
            </Form>
          </Space>
        </div>
      </Access>
    </>
  );
}
