import { ReactElement } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube"
import GitHub from "@mui/icons-material/GitHub";
import { SiItchdotio } from "react-icons/si"
import Error from '@mui/icons-material/Error';

export type LinkName = 'Twitter' | 'YouTube' | 'GitHub' | 'Itch';

export function getDefaultBoxIndex(name: LinkName): number {
    switch (name) {
        case 'Twitter':
            return 1;
        case 'YouTube':
            return 2;
        case 'GitHub':
            return 3;
        case 'Itch':
            return 4;
        default:
            return 0;
    }
}

export function getSocialLink(name: LinkName): string {
    switch (name) {
        case 'Twitter': {
            return "https://twitter.com/bluetayden";
        }
        case 'YouTube': {
            return "https://www.youtube.com/channel/UCMN6vTv8r_2yu3b5_NcYrgg";
        }
        case 'GitHub': {
            return "https://github.com/bluetayden";
        }
        case 'Itch': {
            return "https://bluetayden.itch.io/";
        }
        default: {
            return "/";
        }
    }
}

/** Requires a paramater for fontSize as styling the returned element is difficult */
export function getSocialIconSvg(name: LinkName, size: number): ReactElement {
    const style = {
        fontSize: size
    }

    switch (name) {
        case 'Twitter': {
            return <TwitterIcon style={style} />;
        }
        case 'YouTube': {
            style.fontSize += 5;
            return <YouTube style={style} />;
        }
        case 'GitHub': {
            return <GitHub style={style} />;
        }
        case 'Itch': {
            style.fontSize -= 8;
            return <SiItchdotio style={style} />
        }
        default: {
            return <Error style={style} />;
        }
    }
}

export function getSocialIconHoverColour(name: LinkName): string {
    switch (name) {
        case 'Twitter':
            return '#1D9BF0';
        case 'YouTube':
            return '#FF0000';
        case 'GitHub':
            return "#800080";
        case 'Itch':
            return "#FA5C5C";
        default:
            return 'black';
    }
}
