<template>
  <router-link
    v-for="route in headerLinks"
    :key="route.link"
    :to="route.link"
    class="header-actions-link text-body-16-bold"
    :class="linkClass"
  >
    {{ route.label }}</router-link
  >
  <ButtonDesign
    @onAction="redirectToRegister"
    icon="img:public/icons/user.svg"
    text="Sign Up"
  />
</template>

<script setup>
import { useRouter } from "vue-router";
import ButtonDesign from "./ButtonDesign.vue";

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
    link: "/",
  },
  {
    label: "Connect a wallet",
    link: "/",
  },
];

const router = useRouter();

const redirectToRegister = () => {
  router.push("/register");
};
</script>
