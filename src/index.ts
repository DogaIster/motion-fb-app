import requestData from './services/facebookAPI';

const startFetching = (): void => {
    // request in every 2 seconds
    setInterval(requestData, 2000);
};

startFetching();
