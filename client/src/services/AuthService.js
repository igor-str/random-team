import api from '@/services/api';

export default {
  loginUser(params) {
    return api().post('login', params);
  },
};
