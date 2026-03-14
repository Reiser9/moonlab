import Image from "next/image";

import "./index.scss";

const ChatItem = () => {
    return (
        <div className="chatItem">
            <div className="chatItemImg">
                <Image src="/img/token1.png" alt="profile" fill />
            </div>

            <div className="chatItemContent">
                <div className="chatItemContentTop">
                    <p className="chatItemName">Trade_rs8</p>

                    <p className="chatItemTime">09:13 AM</p>
                </div>

                <p className="chatItemMessage">ATB this now long</p>
            </div>
        </div>
    );
};

export default ChatItem;
