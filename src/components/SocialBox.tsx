import { useState, useEffect, useRef } from "react";

import { getRandIndex } from "../utils/RNG";
import { LinkName, getDefaultBoxIndex, getSocialLink } from "../utils/SocialHelpers"
import { Boxes } from "../assets";

import SocialIcon from "./SocialIcon";

import '../styles/SocialBox.css'

interface SocialBoxProps {
    name: LinkName
}

const SocialBox = (props: SocialBoxProps) => {
    const defaultBoxIndex: number = getDefaultBoxIndex(props.name);
    const socialLink: string = getSocialLink(props.name);

    const animationTimerRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [boxIndex, setBoxIndex] = useState(getDefaultBoxIndex(props.name));

    useEffect(() => {
        // If box being hovered, cycle box images otherwise stop and return to initial Box image
        if (isHovered) {
            animationTimerRef.current = setTimeout(() => { setBoxIndex(getRandIndex(boxIndex, Boxes.length)) }, 100);
        } else {
            clearInterval(animationTimerRef.current as NodeJS.Timeout);
            setBoxIndex(defaultBoxIndex);
        }

        // Clears the interval for the next useEffect call (prevents stacking of intervals)
        return () => clearInterval(animationTimerRef.current as NodeJS.Timeout);
    }, [isHovered, boxIndex, defaultBoxIndex])

    return (
        <div className="social-box" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <a className="box-link" href={socialLink} target="_blank" rel="noreferrer" >
                <img src={Boxes[boxIndex]} className="box-outline" alt={props.name} />

                <div className="box-icon">
                    <SocialIcon name={props.name} isHovered={isHovered} />
                </div>
            </a>
        </div>
    )
}

export default SocialBox;