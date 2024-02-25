import { defineStore } from 'pinia';

export const useUserStore = defineStore('users', {
  state: () => ({
    user: {}
  }),

  actions: {
    async getUsers() {
      console.log('get')
    },
    async addUser(user: any) {
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
