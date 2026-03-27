import React from "react";

export const useSound = (src: string, volume = 1) => {
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    const play = () => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(console.error);
        }
    };

    const stop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return {
        play,
        stop,
        element: <audio ref={audioRef} src={src} preload="auto" />,
    };
};
