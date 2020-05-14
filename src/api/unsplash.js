import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID mSBatFONHwoPSMu3Pfiak7bmdOHX9Y0sxMDoS08N1Xs'
  }
});
