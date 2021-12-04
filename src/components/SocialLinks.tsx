import SocialBox from "./SocialBox";

import '../styles/SocialLinks.css'

const SocialLinks = () => {
    return (
        <div className="social-links">
            <SocialBox name="twitter" />
            <SocialBox name="youtube" />
            <SocialBox name="github" />
            <SocialBox name="pixiv" />
        </div>
    )
}

export default SocialLinks;