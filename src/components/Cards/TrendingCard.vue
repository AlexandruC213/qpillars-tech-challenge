<template>
  <q-card class="card-container" flat>
    <q-img :src="props.data.mainImage" width="315px" />
    <div class="full-width d-flex row justify-between q-my-md">
      <q-img :src="props.data.images[0]" class="smaller-img" />
      <q-img :src="props.data.images[1]" class="smaller-img" />
      <div class="placeholder-image">1025+</div>
    </div>

    <div class="text-body-22-bold">{{ props.data.title }}</div>
    <div class="d-flex row items-center q-mt-sm">
      <q-img :src="props.data.artistAvatar" width="24px" height="24px" />
      <div class="q-pl-md text-body-16">
        {{ props.data.artistName }}
      </div>
    </div>
  </q-card>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card-container {
  @include displayFlex(column, flex-start, flex-start);
  border-radius: 20px;
  background-color: transparent;
}

.placeholder-image {
  @include displayFlex;
  width: 30%;
  height: 100px;
  padding: 32px 15px;
  border-radius: 20px;
  font-size: 22px;
  font-weight: 700;
  background-color: $secondary;
}

.smaller-img {
  width: 30%;
  border-radius: 20px;
}
</style>
