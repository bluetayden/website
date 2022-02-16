import SocialBox from "./SocialBox";

import '../styles/SocialLinks.css'

const SocialLinks = () => {
    return (
        <div className="social-links">
            <SocialBox name="Twitter" />
            <SocialBox name="YouTube" />
            <SocialBox name="GitHub" />
            <SocialBox name="Itch" />
        </div>
    )
}

export default SocialLinks;