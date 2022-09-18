import axios from 'axios';

const axiosClient = axios.create({ responseType: 'json' });

export default axiosClient;
