<template>
  <div>
    <h1>Welcome to the Homepage!</h1>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'Homepage',
  setup() {
    // Define reactive state using ref
    const counter = ref(0);

    // Define a reactive message
    const message = ref('Hello, Vue!');

    // Define a method to increment the counter
    const incrementCounter = () => {
      counter.value++;
    };

    // Return the reactive state and methods
    return {
      counter,
      message,
      incrementCounter
    };
  }
};
</script>

<style>
/* Styles for Homepage.vue */
</style>