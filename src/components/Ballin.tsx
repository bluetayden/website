import { useState, useRef } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'

import BallinDotPng from '../assets';

import '../styles/Ballin.css'

const Ballin = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [ballinCount, setBallinCount] = useState(0);
    const ballinTextTimerRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [showBallinText, setShowBallinText] = useState(false);

    const { width, height } = useWindowSize()

    /** Shows confetti, incs click count, shows click count text */
    function handleBallinClick() {
        setShowConfetti(true);
        setBallinCount(ballinCount + 1);

        handleShowBallinText();
    }

    /** Starts a timer that keeps resetting till the ballin image isn't clicked for 4 seconds */
    function handleShowBallinText() {
        setShowBallinText(true);

        if (ballinTextTimerRef.current === null) {
            ballinTextTimerRef.current = setTimeout(() => {setShowBallinText(false); ballinTextTimerRef.current = null}, 4000)
        } else {
            clearTimeout(ballinTextTimerRef.current);
            ballinTextTimerRef.current = setTimeout(() => {setShowBallinText(false); ballinTextTimerRef.current = null}, 4000)
        }
    }

    return (
        <div className="ballin-container">
            {showBallinText &&
                <div className="ballin-text">
                    you've balled {ballinCount} times
                </div>}

            <img src={BallinDotPng} className="ballin-img" alt="ballin"
                onClick={() => handleBallinClick()} />

            {showConfetti &&
                <Confetti width={width} height={height}
                    numberOfPieces={200} recycle={false} initialVelocityY={{ min: 5, max: 5 }}
                    onConfettiComplete={() => setShowConfetti(false)} />}
        </div>
    )
}

export default Ballin;