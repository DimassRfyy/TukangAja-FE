import { useEffect, useState } from "react";

export function usePageScrollHandle(): boolean{

    const [isScrolled, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return isScrolled;
}