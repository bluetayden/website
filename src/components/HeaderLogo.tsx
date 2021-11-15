import { useEffect, useRef, useState } from 'react'
import { Logos } from "../assets";

const HeaderLogo = () => {
    const animationTimerRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);
    const [logoIndex, setLogoIndex] = useState(0);

    useEffect(() => {
        function getRandLogoIndex(): number {
            let index: number = Logos.length;

            while (index === Logos.length || index === logoIndex) {
                index = Math.floor(Math.random() * Logos.length);
            }

            return index;
        }

        // If is animated, cycle logo images otherwise stop and return to Logos[0]
        if (isAnimated) {
            animationTimerRef.current = setInterval(() => { setLogoIndex(getRandLogoIndex) }, 100);
        } else {
            setLogoIndex(0);
            clearInterval(animationTimerRef.current as NodeJS.Timeout);
        }

        // Clears the interval for the next useEffect call (prevents stacking of intervals)
        return () => clearInterval(animationTimerRef.current as NodeJS.Timeout);
    }, [isAnimated, logoIndex])

    return (
        <div className="header-logo">
            <img src={Logos[logoIndex]} alt="header-logo" onMouseOver={() => setIsAnimated(true)} onMouseOut={() => setIsAnimated(false)} />
        </div>
    );
}

export default HeaderLogo;