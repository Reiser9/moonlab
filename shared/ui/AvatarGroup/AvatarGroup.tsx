import React from "react";
import Image from "next/image";

import "./index.scss";

type Props = {
    users: {
        image?: string;
        name: string;
    }[];
    maxCount?: number;
};

const AvatarGroup: React.FC<Props> = ({ users, maxCount = 4 }) => {
    return (
        <div className="avatarGroup">
            {users.slice(0, maxCount).map((data, id) => (
                <div key={id} className="avatarGroupItem">
                    {data.image ? (
                        <div className="avatarGroupItemImage">
                            <Image src={data.image} alt="avatar" fill />
                        </div>
                    ) : (
                        data.name[0]
                    )}
                </div>
            ))}

            {users.length > maxCount && (
                <div className="avatarGroupItem">
                    +{users.length - maxCount}
                </div>
            )}
        </div>
    );
};

export default AvatarGroup;
