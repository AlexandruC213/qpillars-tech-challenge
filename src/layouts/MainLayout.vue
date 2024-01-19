<template>
  <q-layout>
    <HeaderApp />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderApp from "../components/Global/HeaderApp.vue";
</script>
