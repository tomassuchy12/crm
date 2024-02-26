
<template>
  <div class="w-full max-w-xs">
        <form class="px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
             Name
            </label>
            <input
              v-model="formData.name"
              id="name"
              key="name"
              type="text"
              required
              placeholder="Username"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              E-mail
            </label>
            <input
              v-model="formData.email"
              id="email"
              key="email"
              type="email"
              required
              placeholder="john.doe@yopmail.com"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              :class="{'border-red-500': invalidEmail }"
            >
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input
              v-model="formData.password"
              id="password"
              key="password"
              type="password"
              required
              placeholder="*****"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              :class="{'border-red-500': invalidPassword }"
            >
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="passwordAgain">
              Verify password
            </label>
            <input
              v-model="formData.passwordAgain"
              id="passwordAgain"
              key="passwordAgain"
              type="password"
              required
              placeholder="*****"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              :class="{'border-red-500': invalidPassword }"
            >
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="validateForm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useUserStore } from '@store/users';
import User from '@store/interfaces/UserTypes';

const userStore = useUserStore();
export default {
  name: "AddUserForm",
  setup() {
    const modalActive = ref(false);
    const invalidEmail = ref(false);
    const invalidPassword = ref(false);
    let formData: User = {
      name: '',
      email: '',
      password: '',
      passwordAgain: ''
    }

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const isEmailValid = (value: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const validateForm = () => {
      invalidEmail.value = !isEmailValid(formData.email)
      invalidPassword.value = !(formData.password?.length > 4 && (formData.password === formData.passwordAgain))
      if (!invalidEmail.value && !invalidPassword.value) addUser(formData)
    };

    const addUser = (user: User) => {
      userStore.addUser(user)
    }

    return { modalActive, formData, invalidEmail, invalidPassword, toggleModal, validateForm, isEmailValid };
  },
}
</script>
<style scoped></style>
