import { Link } from "@umijs/max";

export default function menuBar() {
    return (
        <div className="menu">
            <Link to="/app/index"><div className="item house"></div></Link>
            <Link to="/app/chat"><div className="item message"></div></Link>
            <Link to="/app/notification"><div className="item bell"></div></Link>
            <Link to="/app/profile/"><div className="item user"></div></Link>
        </div>
    )
}