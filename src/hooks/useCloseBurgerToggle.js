import { useEffect, useRef, useState } from "react";

const useCloseBurgerToggle = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleCloseBurger = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpenBurger(false);
            }
        };
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setOpenBurger(false);
            }
        };
        document.addEventListener("mouseup", handleCloseBurger);
        document.addEventListener("keydown", handleEscapeKey);
        return () => {
            document.removeEventListener("mouseup", handleCloseBurger);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [ref, setOpenBurger]);
    return { openBurger, setOpenBurger, ref };
};
export default useCloseBurgerToggle;