/**
 * Search Public-APIs on Goole
 * Used https://randomuser.me/ with axios
 * https://randomuser.me/api/?results=10&nat=us
 */

import axios from 'axios';

export default {
  // Get 10 users
  getUsers: () => {
    return axios.get('https://randomuser.me/api/?results=10&nat=us');
  }
};
