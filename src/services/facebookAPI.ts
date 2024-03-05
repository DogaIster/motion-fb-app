import axios, { AxiosError } from 'axios';
import logger from '../utils/logger';
import accessToken from '../config';

const apiUrl = `https://graph.facebook.com/v19.0/me?fields=id,name,last_name&access_token=${accessToken}`;

const requestData = async (): Promise<void> => {
    try {
        const response = await axios.get(apiUrl);
        logger.log('Data received:', response.data);
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 429) {
            logger.log('Rate limit exceeded. Waiting before retrying...');
            setTimeout(requestData, 60000); // Retry after 1 minute if rate limit is exceeded
        } else {
            logger.error('Error occurred while fetching data:', axiosError.message);
        }
    }
};

export default requestData;
