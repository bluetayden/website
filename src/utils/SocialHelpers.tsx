import { ReactElement } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube"
import GitHub from "@mui/icons-material/GitHub";
import Error from '@mui/icons-material/Error';

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

/** Requires a paramater for fontSize as styling the returned element is difficult */
export function getSocialIconSvg(name: string, size: number|string): ReactElement {
    const style = {
        fontSize: size
    }

    let icon: ReactElement;

    switch (name) {
        case 'twitter': {
            icon = <TwitterIcon style={style}/>;
            break;
        }
        case 'youtube': {
            icon = <YouTube style={style}/>;
            break;
        }
        case 'github': {
            icon = <GitHub style={style}/>;
            break;
        }
        default: {
            icon = <Error style={style}/>;
        }
    }

    return icon;
}

export function getSocialIconHoverColour(name: string) : string {
    switch(name) {
        case 'twitter':
            return 'cornflowerblue';
        case 'youtube':
            return 'red';
        case 'github':
            return "darkmagenta";
        default:
            return 'black';
    }
}
