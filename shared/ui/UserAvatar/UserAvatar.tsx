import Image from "next/image";
import cn from "classnames";

import "./index.scss";

type Props = {
    width?: number;
    height?: number;
    image?: string;
    alt?: string;
    className?: string;
};

const UserAvatar: React.FC<Props> = ({
    width = 32,
    height = 32,
    image,
    alt,
    className,
}) => {
    return (
        <div
            className={cn("userAvatarInner", className)}
            style={{ width, height }}
        >
            <div className="userAvatar">
                {image && <Image src={image} alt={alt || ""} fill />}
            </div>
        </div>
    );
};

export default UserAvatar;
