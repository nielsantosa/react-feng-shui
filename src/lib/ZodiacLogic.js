const ZODIACS = {
    "0": "monkey",
    "1": "rooster",
    "2": "dog",
    "3": "pig",
    "4": "rat", // baseline : 1948
    "5": "ox",
    "6": "tiger",
    "7": "rabbit",
    "8": "dragon",
    "9": "snake",
    "10": "horse",
    "11": "goat",
};

const determineZodiac = (birthDate) => {
    birthDate = new Date(birthDate);
    const year = birthDate.getFullYear();

    const zodiac = ZODIACS[year % 12];

    return zodiac
}

const getZodiacImages = () => {
    let zodiacImages = {};
    Object.values(ZODIACS).forEach((zodiac) => {
        zodiacImages[zodiac] = `./assets/${zodiac}.png`
    })
    return zodiacImages
}

const ZODIAC_IMAGES = getZodiacImages();

export { determineZodiac, ZODIAC_IMAGES }