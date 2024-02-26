<template>
  <div class="border-b-2">
    <div class="h-fit w-fit p-4">
    <RouterLink to="/">
      <picture>
        <source srcset="./assets/vue.svg" />
        <img src="./assets/vue.svg">
      </picture>
    </RouterLink>
    </div>
  </div>
  <div class="h-[calc(100vh-70px)] flex">
    <div class="border-r-2 p-4">
      <ul>
        <RouterLink to="/users">
          <li class="text-xl hover:text-green-500 hover:decoration-green-500 hover:underline">
            Users
          </li>
        </RouterLink>
      </ul>
    </div>
    <div class="p-4 w-full">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
