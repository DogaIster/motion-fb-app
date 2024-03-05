const log = (...args: any[]): void => {
    console.log(...args);
};

const error = (...args: any[]): void => {
    console.error(...args);
};

export default {
    log,
    error,
};
