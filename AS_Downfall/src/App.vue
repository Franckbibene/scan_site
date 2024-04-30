<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router';
import { RouterLink } from 'vue-router';
const title = ref('AS Downfall')
</script>

<template>
  <NavBarMenu />
  <RouterView />
</template>

<script>
import NavBarMenu from './components/NavBarMenu.vue';

export default {
  name: 'App',
  components: {
    NavBarMenu
  },
  setup() {
    return {
      title: 'AS Downfall'
    }
  }
};
</script>