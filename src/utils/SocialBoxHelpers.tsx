import { ReactElement } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube"
import GitHub from "@mui/icons-material/GitHub";
import Error from '@mui/icons-material/Error';

const DEFAULT_ICON_STYLE = {
    color: "black",
    fontSize: 50
}

export function getDefaultBoxIndex(name: string): number {
    switch (name) {
        case 'twitter':
            return 1;
        case 'youtube':
            return 2;
        case 'github':
            return 3;
        default:
            return 0;
    }
}

export function getSocialLink(name: string): string {
    let socialLink: string;

    switch (name) {
        case 'twitter': {
            socialLink = "https://twitter.com/bluetayden";
            break;
        }
        case 'youtube': {
            socialLink = "https://www.youtube.com/channel/UCMN6vTv8r_2yu3b5_NcYrgg";
            break;
        }
        case 'github': {
            socialLink = "https://github.com/bluetayden";
            break;
        }
        default: {
            socialLink = "/";
        }
    }

    return socialLink;
}

export function getSocialIcon(name: string): ReactElement {
    let icon: ReactElement;

    switch (name) {
        case 'twitter': {
            icon = <TwitterIcon style={DEFAULT_ICON_STYLE} />;
            break;
        }
        case 'youtube': {
            icon = <YouTube style={DEFAULT_ICON_STYLE} />;
            break;
        }
        case 'github': {
            icon = <GitHub style={DEFAULT_ICON_STYLE} />;
            break;
        }
        default: {
            icon = <Error style={DEFAULT_ICON_STYLE} />;
        }
    }

    return icon;
}
