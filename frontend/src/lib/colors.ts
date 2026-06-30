export const getHexColor = (colorStr: string) => {
    switch(colorStr) {
        case 'RED': return '#ef4444';
        case 'BLUE': return '#3b82f6';
        case 'GREEN': return '#22c55e';
        case 'YELLOW': return '#eab308';
        case 'PURPLE': return '#a855f7';
        case 'ORANGE': return '#f97316';
        case 'PINK': return '#ec4899';
        case 'TEAL': return '#14b8a6';
        default: return '#94a3b8';
    }
};
