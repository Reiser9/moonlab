import React from "react";

import "./index.scss";

interface ScrollButtonProps {
    targetRef: React.RefObject<HTMLElement | null>;
    offset?: number;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
    targetRef,
    offset = 0,
}) => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: "0px",
            },
        );

        const currentTarget = targetRef?.current;

        if (!currentTarget) return;

        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [targetRef]);

    const handleClick = () => {
        if (targetRef?.current) {
            targetRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    if (!isVisible) return null;

    return (
        <div className="scrollButtonInner">
            <button
                className="mainGradientButton scrollButton"
                onClick={handleClick}
            >
                Go to trade
            </button>
        </div>
    );
};

export default ScrollButton;
