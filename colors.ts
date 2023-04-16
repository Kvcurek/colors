const availableColors = {
    red: ""
}

const availableFormats = {
    reset: ""
}

export class Colors {
    public red (text: String) {
        if (!text) return;
        return `${availableColors.red}${text}${availableFormats.reset}`;
    }
}