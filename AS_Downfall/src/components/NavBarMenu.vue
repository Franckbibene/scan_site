<template>
    <header  class="m-8 mt-4 rounded-xl flex justify-center bg-red-500 shadow-sm">
    <nav class="w-full mx-12 flex flex-row justify-between items-center">
      <RouterLink to="/">
        <img src="../assets/logos/Garp_logo.png" alt="GARP logo" class="w-28 h-28"/>
      </RouterLink>
      <RouterLink to="/">
        <h1 class="text-2xl font-extrabold text-black w-26"> AS Downfall</h1>
        </RouterLink>
      <form>
        <input type="text" placeholder="Search" class="my-8 ml-0 px-4 py-3 rounded-x1 bg-gray-100 text-sm"/>
        <font-awesome-icon class="ml-3" icon="magnifying-glass" />  
      </form>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
        name: 'NavBarMenu',
    }
</script>