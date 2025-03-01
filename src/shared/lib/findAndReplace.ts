export const findAllAndReplace = <T>(array: T[], replacement: T, callback: (item: T) => boolean) => {
    return array.map( element => callback(element) ? replacement : element )
}