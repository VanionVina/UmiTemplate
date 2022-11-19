import { useAccess, useModel, Navigate, Access } from '@umijs/max';
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { Link, Outlet } from 'umi';
import './index.less';

import '@/styles/app/general.less'



export default () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const access = useAccess();

  return (
    <>
      <Access accessible={!access.canUser}>
        <Navigate to="/" />
      </Access>
      <Access accessible={access.canUser}>
          <Outlet />
      </Access>
    </>
  );
}
