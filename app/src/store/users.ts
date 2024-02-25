import { defineStore } from 'pinia';
import User from './interfaces/UserTypes';

export const useUserStore = defineStore('users', {
  state: () => ({
    user: {} as User
  }),

  actions: {
    async getUsers() {
      console.log('get')
    },
    async addUser(user: User) {
      console.log('add', user)
    },
    async editUser(id: string) {
      console.log('edit', id)
    },
    async deleteUser(id: string) {
      console.log('delete', id)
    },
  },
});
