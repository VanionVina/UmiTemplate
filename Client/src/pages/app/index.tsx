import { useAccess } from "@umijs/max";
import { Navigate } from "@umijs/max";
import { Access } from "@umijs/max";
import { useModel } from "@umijs/max";
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
          <div className="page-menu" id="page-home">

            <div className="container">

              {/* Bonus */}
              <div className="bonus">
                <div className="amount">100</div>
                <div className="description">бонусов</div>
                <div className="button white">Вывод средств</div>
              </div>

              {/* Action brands */}
              <div className="table-wrapper">

                <div className="title">Акционные бренды</div>

                <div className="items">

                  <div className="item">
                    <div className="picture"><img src="/nike.svg" /></div>
                    <div className="name">Nike very very very long text</div>
                    <div className="amount">50%</div>
                  </div>

                  <div className="item">
                    <div className="picture"><img src="/nike.svg" /></div>
                    <div className="name">Nike</div>
                    <div className="amount">50%</div>
                  </div>

                  <div className="item">
                    <div className="picture"><img src="/nike.svg" /></div>
                    <div className="name">Nike</div>
                    <div className="amount">50%</div>
                  </div>

                </div>

                <div className="more"><span>Показать больше</span></div>

              </div>

              {/* History */}
              <div className="table-wrapper">

                <div className="title">История</div>

                <div className="items">

                  <div className="item">
                    <div className="name bold">Снятие 19.10.22</div>
                    <div className="amount danger">-50</div>
                  </div>

                  <div className="item">
                    <div className="name bold">Зачисление 19.10.22</div>
                    <div className="amount">100</div>
                  </div>

                  <div className="item">
                    <div className="name bold">Зачисление 19.10.22</div>
                    <div className="amount">100</div>
                  </div>

                  <div className="item">
                    <div className="name bold">Зачисление 19.10.22</div>
                    <div className="amount">100</div>
                  </div>

                </div>

                <div className="more"><span>Показать больше</span></div>

              </div>

              {/* News */}
              <div className="news-wrapper">

                <div className="news">
                  <div className="picture">
                    <img src="/news.png" />
                  </div>
                  <div className="title">Заголовок</div>
                  <div className="descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                  </div>
                </div>

                <div className="news">
                  <div className="picture">
                    <img src="/news.png" />
                  </div>
                  <div className="title">Заголовок</div>
                  <div className="descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                  </div>
                </div>

                <div className="news">
                  <div className="picture">
                    <img src="/news.png" />
                  </div>
                  <div className="title">Заголовок</div>
                  <div className="descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                  </div>
                </div>

              </div>

            {/* Menu */}
            <div className="menu">
              <div className="item house"></div>
              <div className="item message"></div>
              <div className="item bell"></div>
              <div className="item user"></div>
            </div>

            </div>
          </div>
        </Access>
    </div>
  );
};