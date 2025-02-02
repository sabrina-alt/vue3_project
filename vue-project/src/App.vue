<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <router-view />
  </v-container>
</template>
<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>