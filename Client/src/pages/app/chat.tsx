import { useModel, useAccess, Access, Navigate } from "@umijs/max";
import '@/styles/app/chat.less';
import { Link } from "@umijs/max";

export default () => {
    const { initialState , setInitialState } = useModel("@@initialState");
    const access = useAccess();

    return (
        <div id="page-chat">
            <div className="container">

                {/* Top bar */}
                <div className="top-bar">
                    <Link to="/app/index"><div className="button-back"><img src="/icons/back.svg" /></div></Link>
                    <div className="header">Чат с поддержкой</div>
                </div>

                {/* Messages */}
                <div className="messages">

                    <div className="message right">
                        <div className="time">12:00</div>
                        <div className="body">
                            <div className="name">useremail@gmail.com</div>
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                            </div>
                        </div>
                    </div>

                    <div className="message left">
                        <div className="body">
                            <div className="name">Иван</div>
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                            </div>
                        </div>
                        <div className="time">12:00</div>
                    </div>

                    <div className="message right">
                        <div className="time">12:00</div>
                        <div className="body">
                            <div className="name">useremail@gmail.com</div>
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bottom-bar">
                        <label><div className="input">
                            <input type="text" placeholder="Введите сообщение" />
                        </div></label>
                    <div className="button-send"><img src="/icons/buttonSend.svg" /></div>
                </div>
            </div>
        </div>
    );
};