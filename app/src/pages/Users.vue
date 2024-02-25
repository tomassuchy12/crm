<template>
  <div class="flex">
    <button
      @click="addUser()"
    >
      Add user
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@store/users';
const userStore = useUserStore();

function addUser() {
  userStore.addUser({name: 'John', lastname: 'Doe', password: '1234', checkPassword: '1234'})
}
</script>

<style scoped></style>