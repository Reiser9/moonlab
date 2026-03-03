import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

const ChatItem = () => {
    return (
        <div className={styles.chatItem}>
            <div className={styles.chatItemImg}>
                <Image src="/img/token1.png" alt="profile" fill />
            </div>

            <div className={styles.chatItemContent}>
                <div className={styles.chatItemContentTop}>
                    <p className={styles.chatItemName}>Trade_rs8</p>

                    <p className={styles.chatItemTime}>09:13 AM</p>
                </div>

                <p className={styles.chatItemMessage}>ATB this now long</p>
            </div>
        </div>
    );
};

export default ChatItem;
