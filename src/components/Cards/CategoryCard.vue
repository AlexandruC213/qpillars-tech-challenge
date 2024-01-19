<template>
  <div class="category-card q-mb-lg cursor-pointer">
    <div>
      <q-img :src="props.data.image" class="image" />
    </div>
    <div class="title text-body-22-bold">{{ props.data.title }}</div>
  </div>
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
.category-card {
  @include displayFlex(column);
  background-color: #3b3b3b;
  border-radius: 20px;
  transition: all 0.3s ease;

  .image {
    width: 215px;
  }

  .title {
    width: 100%;
    padding: 15px 0 15px 25px;
    text-align: left;
  }
}

.category-card:hover {
  transform: scale(0.95);
}
</style>
