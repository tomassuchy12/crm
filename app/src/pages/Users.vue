<template>
  <div class="flex">
    <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="toggleModal"
    >
      Add user
    </button>
  </div>
  <Modal
    :modalActive="modalActive"
    @close="toggleModal"
  >
    <div class="modal-content">
      <div class="w-full max-w-xs">
        <form class="px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
             Name
            </label>
            <input
              v-model="formData.name"
              id="name"
              type="text"
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
              type="email"
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
              type="password"
              placeholder="******************"
              class="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              type="password"
              placeholder="******************"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
    </div>
  </Modal>
</template>


<script lang="ts">
// import { useUserStore } from '@store/users';
// const userStore = useUserStore();

import Modal from "@components/Modal.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false);
    const invalidEmail = ref(false);
    const invalidPassword = ref(false);
    const formData = ref({
      name: '',
      email: '',
      password: '',
      passwordAgain: ''
    })

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const validateForm = () => {
      invalidEmail.value = !isEmailValid(formData.value.email)
      invalidPassword.value = !isPasswordValid(formData.value.password, formData.value.passwordAgain)
      console.log(invalidPassword.value)
    }

    const isEmailValid = (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    };

    const isPasswordValid = (password: string, passwordAgain: string) => {
      console.log(password, passwordAgain, password.length < 5, password !== passwordAgain)
      if (password.length < 5) {
        return false;
      }
      if (password !== passwordAgain) {
        return false;
      }
    };

    return { modalActive, formData, invalidEmail, invalidPassword, toggleModal, validateForm, isEmailValid, isPasswordValid };
  },
}
</script>

<style scoped></style>