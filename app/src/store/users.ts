import { defineStore } from 'pinia';
import User from './interfaces/UserTypes';

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [] as User[]
  }),

  actions: {
    async getUsers() {
      console.log('get')
    },
    async addUser(user: User) {
      const userAlreadyExist = this.users.findIndex((item: User) => item.email === user.email)

      if (userAlreadyExist === -1) {
        this.users.push(user)
      } else {
        console.error('User with same e-mail already exists!')
      }
    },
    async editUser(id: number) {
      console.log('edit', id)
    },
    async deleteUser(id: number) {
      console.log('delete', id)
    },
  },
});
