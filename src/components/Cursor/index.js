import React, {useState, useEffect} from 'react';
import './style.scss';

function CustomCursor() {
    const [position, setPosition] = useState({x: 0, y: 0})
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, [])

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
    }

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
    }

    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    };

    const onMouseLeave = () => {
        setHidden(true);
    };
    
    const onMouseEnter = () => {
        setHidden(false);
    };
    
    const cursorClasses = hidden ? 'cursor--hidden' : 'cursor';

    return (
        <div className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
}

export default CustomCursor
