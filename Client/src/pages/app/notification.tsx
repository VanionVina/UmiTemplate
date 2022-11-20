import { useModel, useAccess, Access, Navigate } from "@umijs/max";
import '@/styles/app/notification.less';
import MenuBar from "@/components/app/menuBar";

export default () => {
    const { initialState , setInitialState } = useModel("@@initialState");
    const access = useAccess();

    return (
        <div className="page-notification" id="page-notification">
            <div className="container">

                {/* Top bar */}
                <div className="top-bar">
                    <div className="header">Уведомления</div>
                </div>

                {/* Notifications */}
                <div className="notifications">

                    <div className="notification">
                        <div className="header">
                            <div className="title">Уведомление</div>
                            <div className="date">10.10.22 12:00</div>
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </div>
                    </div>

                    <div className="notification">
                        <div className="header">
                            <div className="title">Уведомление</div>
                            <div className="date">10.10.22 12:00</div>
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </div>
                    </div>

                    <div className="notification">
                        <div className="header">
                            <div className="title blue">Новости</div>
                            <div className="date">10.10.22 12:00</div>
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </div>
                    </div>

                </div>

                {/* Manu */}
                <MenuBar />

            </div>
        </div>
    );
};