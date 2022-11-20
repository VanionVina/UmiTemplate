import { useModel, useAccess, Access, Navigate } from "@umijs/max";
import '@/styles/app/login.less';
import { Link } from "@umijs/max";

export default () => {
    const { initialState , setInitialState } = useModel("@@initialState");
    const access = useAccess();

    return (
        <div id="page-login">
            <div className="container">
                <div className="header">Вход</div>
                <label>
                    <div className="input">
                        <input type="text" placeholder="Введите Username" />
                    </div>
                </label>
                <label>
                    <div className="input">
                        <input type="text" placeholder="Введите пароль" />
                    </div>
                </label>
                <Link to="/app/index"><div className="button">Войти</div></Link>
                <div className="button white">Регистрация</div>
                <div className="forgot-password">Забыли пароль? <span>восстановить</span></div>
            </div>
        </div>
    );
};