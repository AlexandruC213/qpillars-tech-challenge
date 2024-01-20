<template>
  <div class="q-my-xl">
    <div v-if="rowType" class="card-row">
      <div class="card-row-left">
        <div class="card-title-row">{{ props.data.title }}</div>
        <div class="card-description q-my-lg">{{ props.data.description }}</div>
        <ButtonDesign
          @onAction="redirectToRegister"
          icon="img:public/icons/homePage/rocket-launch.svg"
          text="Get Started"
          btnStyles="padding: 0 50px"
        />
        <div v-if="props.data?.notes.length" class="details">
          <div v-for="note in props.data?.notes" :key="note.text">
            <div class="text-body-28-bold">{{ note.number }}</div>
            <div class="text-body-24">{{ note.text }}</div>
          </div>
        </div>
      </div>
      <div class="card-row-right">
        <AvatarCard :cardDetails="props.data.card" />
      </div>
    </div>

    <div v-else class="card-column">
      <div class="container">
        <div class="d-flex column q-mb-xl">
          <div class="card-title-column">{{ props.data.title }}</div>
          <div class="card-description">{{ props.data.description }}</div>
        </div>
        <ButtonDesign
          v-if="props.extraBtn && !isMobileDisplay"
          @onAction="redirectToRegister"
          :icon="extraBtnDetails.icon"
          :text="extraBtnDetails.text"
          :btnStyles="extraBtnDetails.style"
          outlined
        />
      </div>

      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

import ButtonDesign from "../Global/ButtonDesign.vue";
import AvatarCard from "./AvatarCard.vue";

const props = defineProps({
  cardType: {
    type: String,
    default: "column",
  },
  data: {
    type: Object,
    required: true,
  },
  extraBtn: {
    type: Boolean,
    default: false,
  },
  extraBtnDetails: {
    type: Object,
    required: false,
  },
});

const $q = useQuasar();

const rowType = computed(() => {
  return props.cardType === "row";
});

const router = useRouter();

const redirectToRegister = () => {
  router.push("/register");
};

const isMobileDisplay = computed(() => {
  return $q.screen.width < $q.screen.sizes.sm;
});
</script>
