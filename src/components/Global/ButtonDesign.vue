<template>
  <div
    @click="emit('onAction')"
    class="button text-body-16-bold"
    :style="btnStyles"
    :class="btnClass"
  >
    <q-icon
      v-if="props.icon"
      :name="props.icon"
      color="white"
      size="1.3rem"
      class="q-pr-sm"
    />
    {{ props.text }}
  </div>
</template>

<script setup>
import { computed } from "vue";

const emit = defineEmits(["onAction"]);
const props = defineProps({
  icon: {
    type: String,
    required: false,
    default: "",
  },
  text: {
    type: String,
    required: true,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  btnStyles: {
    type: String,
    required: false,
  },
});

const btnClass = computed(() => {
  return props.outlined ? "outlined" : "normal";
});
</script>

<style lang="scss" scoped>
.button {
  @include displayFlex;
  height: 60px;
  color: $white;

  padding: 0 30px;
  border-radius: 20px;

  transition: all 0.3s ease;
}

.normal {
  background: $secondary;
}

.outlined {
  background: transparent;
  border: 1px solid $secondary;
}

.button:hover {
  transform: scale(0.95);
}
</style>
