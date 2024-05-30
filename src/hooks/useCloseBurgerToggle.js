import { useEffect, useRef, useState } from "react";
/*
The useCloseBurgerToggle custom hook manages the 
state of a burger menu's open or closed status. 
It sets up event listeners to close the menu when 
a user clicks outside of the menu or presses the 
"Escape" key, and cleans up these listeners when 
the component is unmounted. The hook returns the 
state variable openBurger, its setter setOpenBurger, 
and a ref ref to be attached to the burger menu element.
 */

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