import { ReactElement } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube"
import GitHub from "@mui/icons-material/GitHub";
import Error from '@mui/icons-material/Error';

export function getSocialLink(name: string): ReactElement {
    let socialURL:string;

    switch (name) {
        case 'twitter': {
            socialURL = "https://twitter.com/bluetayden";
            break;
        }
        case 'youtube': {
            socialURL = "https://www.youtube.com/channel/UCMN6vTv8r_2yu3b5_NcYrgg";
            break;
        }
        case 'github': {
            socialURL = "https://github.com/bluetayden";
            break;
        }
        default: {
            socialURL = "#currentPageLink";
        }
    }

    return (
        <a href={socialURL} target="_blank" rel="noreferrer">
            {getSocialIcon(name)}
        </a>
    )
}

function getSocialIcon(name?: string) : ReactElement {
    const style = {
        fontSize: 48,
        color: "black"
    };

    let icon: ReactElement;

    switch (name) {
        case 'twitter': {
            icon =  <TwitterIcon style={style}/>;
            break;
        }
        case 'youtube': {
            icon = <YouTube style={style}/>;
            break;
        }
        case 'github': {
            icon = <GitHub style={style} />;
            break;
        }
        default: {
            icon = <Error style={style}/>;
        }
    }

    return icon;
}