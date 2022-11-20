import { useModel, useAccess, Access, Navigate } from "@umijs/max";
import '@/styles/app/profile.less';
import MenuBar from "@/components/app/menuBar";
import { Link } from "@umijs/max";

export default () => {
    const { initialState , setInitialState } = useModel("@@initialState");
    const access = useAccess();

    return (
        <div className="page-profile" id="page-profile">
            <div className="container">

                {/* Top bar */}
                <div className="top-bar">
                    <div className="header">Личный кабинет</div>
                </div>

                {/* Profile */}
                <div className="profile">
                    <div className="fields">
                        <div className="field">Email: <span>usermail@gmail.com</span></div>
                        <div className="field">Пароль: <span>********</span></div>
                        <div className="field">Баланс: <span>100 бонусов</span></div>
                        <div className="field">Заработано бонусов за всё время: <span>500 бонусов</span></div>
                    </div>
                    <div className="button">Редактировать профиль</div>
                    <Link to="/app/login"><div className="button danger">Выйти</div></Link>
                </div>

                {/* Menu bar */}
                <MenuBar />
            </div>
        </div>
    );
};