// Gets a random int within a range, also makes sure 'current' isn't picked again
export function getRandIndex(current: number, range: number): number {
    let index: number = range;

    while (index === range || index === current) {
        index = Math.floor(Math.random() * range);
    }

    return index;
}