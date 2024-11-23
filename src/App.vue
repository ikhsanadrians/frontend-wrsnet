<script setup>
import { useRoute } from 'vue-router';
import MainHeader from './components/Header/MainHeader.vue';

const route = useRoute();
</script>

<template>
  <div>
    <template v-if="route.name !== 'Admin' && route.name !== 'Login'">
      <MainHeader />
    </template>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
