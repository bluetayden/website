import { useState } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'

import BallinDotPng from '../assets';

import '../styles/Ballin.css'

const Ballin = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize()

    return (
        <div className="ballin-container">
            <img src={BallinDotPng} className="ballin-img" alt="ballin"
                onClick={() => setShowConfetti(true)} />

            {showConfetti &&
                <Confetti width={width} height={height}
                    numberOfPieces={200} recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
        </div>
    )
}

export default Ballin;