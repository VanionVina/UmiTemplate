import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { useAccess } from "@umijs/max";
import { Navigate } from "@umijs/max";
import { Access } from "@umijs/max";
import { useModel, history } from "@umijs/max";
import { Table } from "antd";
import { useEffect, useState } from "react";
import "@/styles/app/home.less";

export default () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  
  const access = useAccess();

  return (
      <div>
        <Access accessible={!access.canUser}>
          <Navigate to="/" />
        </Access>
        <Access accessible={access.canUser}>
          <div id="page-home">
            <div className="container">
              <div className="bonus">
                <div className="amount">100</div>
                <div className="description">бонусов</div>
                <div className="button white">Вывод средств</div>
              </div>
              <div className="brands">
                <div className="title">Акционные бренды</div>
                <div className="items">

                  <div className="item">
                    <div className="picture"><img src="/nike.svg" /></div>
                    <div className="name">Nike</div>
                    <div className="discount">50%</div>
                  </div>
                  <div className="item">
                    <div className="picture"><img src="/nike.svg" /></div>
                    <div className="name">Nike</div>
                    <div className="discount">50%</div>
                  </div>
                  <div className="item">
                    <div className="picture"><img src="/nike.svg" /></div>
                    <div className="name">Nike</div>
                    <div className="discount">50%</div>
                  </div>

                </div>
                <div className="more"><span>Показать больше</span></div>
              </div>
            </div>
          </div>
        </Access>
    </div>
  );
};