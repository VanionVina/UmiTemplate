import { useAccess, useModel, Navigate, Access } from '@umijs/max';
import { Outlet } from 'umi';
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
