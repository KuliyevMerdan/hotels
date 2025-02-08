function myFilter<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean): T[] {
    const result: T[] = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}
