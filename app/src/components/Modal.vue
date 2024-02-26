<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <span @click="close" class="close">X</span>
          <!-- Modal Content -->
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    return { close };
  },
};
</script>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  @apply flex justify-center items-center h-full w-full fixed top-0 left-0;


  .modal-inner {
    @apply relative max-w-2xl w-4/5 bg-white py-16 px-4 shadow-2xl;

    .close {
      @apply absolute top-4 right-4 text-lg cursor-pointer hover:text-red-500;
    }
  }
}
</style>