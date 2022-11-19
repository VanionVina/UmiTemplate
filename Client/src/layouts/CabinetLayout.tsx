import { useAccess } from '@umijs/max';
import { Navigate } from '@umijs/max';
import { useModel } from '@umijs/max';
import { Access } from '@umijs/max';
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Outlet } from 'umi';
import './index.less';

export default () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const access = useAccess();

  const { Header, Content, Sider } = Layout;

  const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
    key,
    label: `nav ${key}`,
  }));

  const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);

      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );


  return (
    <>
      <Access accessible={!access.canUser}>
        <Navigate to="/" />
      </Access>
      <Access accessible={access.canUser}>

            <Layout>
          <Header className="header">
            <div className="logo"></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
              />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >

                <Outlet />

              </Content>
            </Layout>
          </Layout>
        </Layout>



        {/* <div className="navs">
          <ul>
            <li>
              <Link to="/app/index">{initialState?.userName}</Link>
            </li>
            <li>
              <Link to="/app/secret">Secret page</Link>
            </li>
          </ul>
        </div> */}
      </Access>
    </>
  );
}
