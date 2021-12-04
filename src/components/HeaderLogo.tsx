import { useEffect, useRef, useState } from 'react'

import { getRandIndex } from '../utils/RNG';
import { Logos } from "../assets";

const HeaderLogo = () => {
    const animationTimerRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [logoIndex, setLogoIndex] = useState(0);

    useEffect(() => {
        // If logo is hovered, cycle logo images otherwise stop and return to Logos[0]
        if (isHovered) {
            animationTimerRef.current = setInterval(() => { setLogoIndex(getRandIndex(logoIndex, Logos.length)) }, 100);
        } else {
            setLogoIndex(0);
            clearInterval(animationTimerRef.current as NodeJS.Timeout);
        }

        // Clears the interval for the next useEffect call (prevents stacking of intervals)
        return () => clearInterval(animationTimerRef.current as NodeJS.Timeout);
    }, [isHovered, logoIndex])

    return (
        <div className="header-logo">
            <a href="/">    
                <img src={Logos[logoIndex]} alt="header-logo" 
                                            onMouseOver={() => setIsHovered(true)} 
                                            onMouseOut={() => setIsHovered(false)} />
            </a>
        </div>
    );
}

export default HeaderLogo;