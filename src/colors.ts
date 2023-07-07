const availableColors = {
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    cyan: "\x1b[36m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
    black: "\x1b[30m"
}

const availableFormats = {
    reset: "\x1b[0m"
}

export class Colors {
    public red (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.red}${text}${availableFormats.reset}`;
    }

    public yellow (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.yellow}${text}${availableFormats.reset}`;
    }

    public green (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.green}${text}${availableFormats.reset}`;
    }

    public cyan (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.cyan}${text}${availableFormats.reset}`;
    }

    public blue (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.blue}${text}${availableFormats.reset}`;
    }

    public magenta (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.magenta}${text}${availableFormats.reset}`;
    }

    public white (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.white}${text}${availableFormats.reset}`;
    }

    public gray (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.gray}${text}${availableFormats.reset}`;
    }

    public black (text: string) : Promise <string> {
        if (!text) return;
        return `${availableColors.black}${text}${availableFormats.reset}`;
    }
}

export const color: Colors = new Colors();
