export const wait = (handler: () => void, timeout: number) => setTimeout(handler, timeout);

