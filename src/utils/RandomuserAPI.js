/**
 * Search Public-APIs on Goole
 * Used https://randomuser.me/ with axios
 * https://randomuser.me/api/?results=20&nat=us
 */

import axios from 'axios';

export default {
  // Gets users from randomuser.me
  getUsers: function() {
    return axios.get('https://randomuser.me/api/?results=20&nat=us');
  }
};
