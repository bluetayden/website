import { ReactElement } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube"
import GitHub from "@mui/icons-material/GitHub";
import { SiPixiv } from "react-icons/si"
import Error from '@mui/icons-material/Error';

export function getDefaultBoxIndex(name: string): number {
    switch (name) {
        case 'twitter':
            return 1;
        case 'youtube':
            return 2;
        case 'github':
            return 3;
        case 'pixiv':
            return 4;
        default:
            return 0;
    }
}

export function getSocialLink(name: string): string {
    switch (name) {
        case 'twitter': {
            return "https://twitter.com/bluetayden";
        }
        case 'youtube': {
            return "https://www.youtube.com/channel/UCMN6vTv8r_2yu3b5_NcYrgg";
        }
        case 'github': {
            return "https://github.com/bluetayden";
        }
        case 'pixiv': {
            return "https://www.pixiv.net/users/70082636";
        }
        default: {
            return "/";
        }
    }
}

/** Requires a paramater for fontSize as styling the returned element is difficult */
export function getSocialIconSvg(name: string, size: number): ReactElement {
    const style = {
        fontSize: size
    }

    switch (name) {
        case 'twitter': {
            return <TwitterIcon style={style} />;
        }
        case 'youtube': {
            style.fontSize = style.fontSize + 5;
            return <YouTube style={style} />;
        }
        case 'github': {
            return <GitHub style={style} />;
        }
        case 'pixiv': {
            style.fontSize = style.fontSize - 8;
            return <SiPixiv style={style} />
        }
        default: {
            return <Error style={style} />;
        }
    }
}

export function getSocialIconHoverColour(name: string): string {
    switch (name) {
        case 'twitter':
            return '#1D9BF0';
        case 'youtube':
            return '#FF0000';
        case 'github':
            return "#800080";
        case 'pixiv':
            return "#0096FA";
        default:
            return 'black';
    }
}
