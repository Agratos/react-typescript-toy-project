import { useState, useEffect } from 'react';

const usePreventScroll = (isOpen: boolean) => {
    const [scrollX, setscrollX] = useState(0);
    const [scrollY, setscrollY] = useState(0);

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        if(isOpen){
            setscrollX(window.scrollX);
            setscrollY(window.scrollY);

            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                left: -${window.scrollX}px;
                overflow-y: scroll;
                overflow-x: ${window.scrollX !== 0 ? 'scroll' : 'auto'};
                width: calc(100vw - ${scrollbarWidth}px);
                margin: 0 12px 0 0;
            `;
        } else {
            document.body.style.cssText = ``;
            window.scrollTo(scrollX, scrollY);
        }
    }, [isOpen]);
}

export default usePreventScroll;