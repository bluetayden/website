import { ReactElement } from "react";
import { IconButton } from "@mui/material";

import { LinkName, getSocialIconSvg, getSocialIconHoverColour } from "../utils/SocialHelpers";

interface SocialIconProps {
    name: LinkName,
    isHovered: boolean
}

const SocialIcon = (props: SocialIconProps) => {
    const iconSvg: ReactElement = getSocialIconSvg(props.name, 50);
    const hoverColour = getSocialIconHoverColour(props.name);

    const normalStyle = {
        color: "black"
    }

    const hoverStyle = {
        transition: "color 0.2s",
        color: hoverColour,
        backgroundColor: "transparent"
    }

    return (
        <IconButton className="social-icon" 
                    disableRipple={true} 
                    style={ props.isHovered ? hoverStyle : normalStyle }
        >
            {iconSvg}
        </IconButton>
    )
}

export default SocialIcon;