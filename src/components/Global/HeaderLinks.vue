<template>
  <router-link
    v-for="route in headerLinks"
    :key="route.link"
    :to="route.link"
    class="header-actions-link text-body-16"
    :class="linkClass"
  >
    {{ route.label }}</router-link
  >
  <router-link to="/register" class="header-actions-register text-body-16">
    <q-icon
      name="img:public/icons/user.svg"
      color="white"
      size="1.3rem"
      class="q-pr-sm"
    />
    Sign Up
  </router-link>
</template>

<script setup>
const props = defineProps({
  linkClass: {
    type: String,
    required: false,
  },
});

const headerLinks = [
  {
    label: "Marketplace",
    link: "/",
  },
  {
    label: "Rankings",
    link: "/rankings",
  },
  {
    label: "Connect a wallet",
    link: "/connect-wallet",
  },
];
</script>
