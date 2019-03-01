import api from '@/services/api';

export default {
  fetchUsers() {
    return api().get('users');
  },
  addNewUser(params) {
    return api().post('users', params);
  },
  getUser(params) {
    return api().get(`users/${params.id}`);
  },
  updateUser(params) {
    return api().put(`users/${params.id}`, params);
  },
  deleteUser(id) {
    return api().delete(`users/${id}`);
  },
};
