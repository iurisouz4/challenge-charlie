export default function getWindDirection(deg: number) {
    const compassSector = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "L",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSO",
        "SO",
        "OSO",
        "O",
        "ONO",
        "NO",
        "NNO",
        "N",
    ];
    return compassSector[Number((deg/ 22.5).toFixed(0))];
}
