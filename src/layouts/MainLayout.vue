<template>
  <q-layout class="position-relative">
    <HeaderApp />
    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterApp />
  </q-layout>
</template>

<script setup>
import HeaderApp from "../components/Global/HeaderApp.vue";
import FooterApp from "../components/Global/FooterApp.vue";
</script>
