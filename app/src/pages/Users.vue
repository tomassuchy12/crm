<template>
  <div class="flex">
    <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="toggleModal"
    >
      Add user
    </button>
  </div>
  <table
    v-if="users?.length > 0"
    class="mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
  >
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          E-mail
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(user, index) in users"
        :key="index"
        scope="row" class="font-medium text-gray-900 whitespace-nowrap border-b-2"
      >
        <td class="p-4 border-x-2">
          {{ user.name }}
        </td>
        <td class="p-4 border-e-2">
          {{ user.email }}
        </td>
        <td class="p-4 border-e-2">
          <div class="flex items-center">
            <button 
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 me-2 rounded"
              @click="editUser(index)"
            >
              Edit
            </button>
            <button 
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              @click="deleteUser(index)"
            >
              Delete
            </button>
          </div>
        </td>
    </tr>
    </tbody>
  </table>
  <Modal
    :modalActive="modalActive"
    @close="toggleModal"
  >
    <div class="modal-content">
      <AddUserForm />
    </div>
  </Modal>
</template>


<script lang="ts">
import { ref } from "vue";
import { useUserStore } from '@store/users';
import AddUserForm from "@components/AddUserForm.vue";
import Modal from "@components/Modal.vue";

const userStore = useUserStore();
export default {
  name: "Users",
  components: {
    AddUserForm,
    Modal,
  },
  setup() {
    const modalActive = ref(false);
    const users = userStore.users

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const editUser = (id: number) => {
      userStore.editUser(id)
    };

    const deleteUser = (id: number) => {
      userStore.deleteUser(id)
    };

    return { users, modalActive, toggleModal, editUser, deleteUser };
  },
}
</script>

<style scoped></style>