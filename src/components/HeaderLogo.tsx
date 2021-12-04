import { useEffect, useRef, useState } from 'react'

import { getRandIndex } from '../utils/RNG';
import { Logos } from "../assets";

import "../styles/HeaderLogo.css"

const HeaderLogo = () => {
    const animationTimerRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [logoIndex, setLogoIndex] = useState(0);

    useEffect(() => {
        // If logo is hovered, cycle logo images otherwise stop and return to Logos[0]
        if (isHovered) {
            animationTimerRef.current = setTimeout(() => { setLogoIndex(getRandIndex(logoIndex, Logos.length)) }, 100);
        } else {
            setLogoIndex(0);
            clearInterval(animationTimerRef.current as NodeJS.Timeout);
        }

        // Clears the interval for the next useEffect call (prevents stacking of intervals)
        return () => clearInterval(animationTimerRef.current as NodeJS.Timeout);
    }, [isHovered, logoIndex])

    return (
        <a href="/" className="header-logo-container"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            <img src={Logos[logoIndex]} className="header-logo-img" alt="header-logo" />
        </a>
    );
}

export default HeaderLogo;