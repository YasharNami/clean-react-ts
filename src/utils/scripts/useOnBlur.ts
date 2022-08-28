import * as React from "react";

const { useEffect } = React;

const useOnBlur = (ref: React.RefObject<any>, callback: () => any) => {
    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

export default useOnBlur;
