import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { useAccess } from "@umijs/max";
import { Navigate } from "@umijs/max";
import { Access } from "@umijs/max";
import { useModel, history } from "@umijs/max";
import { Table } from "antd";
import { useEffect, useState } from "react";

export default () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  
  const access = useAccess();

  return (
    <div>
      <Access accessible={!access.canUser}>
        <Navigate to="/" />
      </Access>
      <Access accessible={access.canUser}>
        Hello, user {initialState?.userName}
      </Access>
    </div>
  );
};