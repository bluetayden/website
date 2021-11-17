import { getSocialLink } from "../utils/SocialBoxHelpers"
import { Boxes } from "../assets";

import '../styles/SocialBox.css'

interface SocialBoxProps {
    name: string
}

const SocialBox = (props: SocialBoxProps) => {
    return (
        <div className="social-box">
            <div className="box-image">
                <img src={Boxes[Math.floor(Math.random() * Boxes.length)]} alt={props.name} />
            </div>

            <div className="box-link">
                {getSocialLink(props.name)}
            </div>
        </div>
    )
}

export default SocialBox;