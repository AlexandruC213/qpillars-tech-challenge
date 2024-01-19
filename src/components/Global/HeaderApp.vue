<template>
  <div class="header">
    <div @click="router.push('/')" class="header-logo cursor-pointer">
      <q-icon name="storefront" size="2rem" color="secondary" />
      <q-img :src="logo" width="200px" class="q-ml-md" />
    </div>
    <div v-if="!isSmallerHeader" class="header-actions">
      <HeaderLinks />
    </div>
    <q-icon
      v-else
      @click="showMenu = !showMenu"
      size="2rem"
      color="white"
      name="img:public/icons/burger-menu.svg"
      class="header-burger-icon"
    />
  </div>

  <q-drawer
    side="right"
    v-model="showMenu"
    :width="$q.screen.width"
    class="drawer"
  >
    <q-icon
      @click="showMenu = false"
      class="drawer-close-icon"
      name="close"
      size="3rem"
    />
    <div class="drawer-links">
      <HeaderLinks linkClass="q-my-lg" />
    </div>
  </q-drawer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

import logo from "/public/images/logo.svg";
import HeaderLinks from "./HeaderLinks.vue";

const $q = useQuasar();
const router = useRouter();
const showMenu = ref(false);

const isSmallerHeader = computed(() => {
  return $q.screen.width < $q.screen.sizes.md;
});
</script>
