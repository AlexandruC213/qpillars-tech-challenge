<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
$q.screen.setSizes({ sm: 834, md: 1280 });
</script>
