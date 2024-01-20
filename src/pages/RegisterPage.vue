<template>
  <div class="register-container">
    <div class="image-content">
      <q-img src="/public/images/signup/register.png" class="image" />
    </div>
    <div class="form-content" :class="isMobileDisplay ? '' : 'q-pl-xl'">
      <div class="title">Create Account</div>
      <div class="subtitle q-my-lg">
        Welcome! enter your details and start<br />
        creating, collecting and selling NFTs.
      </div>
      <q-form class="form">
        <q-input
          type="text"
          placeholder="Username"
          class="form-input"
          outlined
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="img:/icons/user-grey.svg" />
          </template>
        </q-input>
        <q-input
          type="email"
          placeholder="Email"
          class="form-input"
          outlined
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="img:/icons/envelope-grey.svg" />
          </template>
        </q-input>
        <q-input
          type="text"
          placeholder="Password"
          class="form-input"
          outlined
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="img:/icons/lock-key.svg" />
          </template>
        </q-input>
        <q-input
          type="text"
          placeholder="Confirm Password"
          class="form-input"
          outlined
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="img:/icons/lock-key.svg" />
          </template>
        </q-input>
        <q-btn
          type="submit"
          class="bg-secondary text-white full-width q-py-md text-body-16-bold q-mt-md"
          style="border-radius: 20px"
          label="Create account"
          no-caps
        />
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const isMobileDisplay = computed(() => {
  return $q.screen.width < $q.screen.sizes.sm;
});
</script>
