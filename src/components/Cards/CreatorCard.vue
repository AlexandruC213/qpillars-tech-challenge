<template>
  <div class="creator-card q-mb-lg">
    <div class="d-flex row">
      <div class="number">{{ props.data.id }}</div>
      <q-img :src="props.data.avatar" class="image" />
    </div>
    <div>{{ props.data.name }}</div>
    <div class="text-body-16">
      <span style="color: #858584">Total Sales:</span>
      {{ props.data.totalSales }}
    </div>
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
.creator-card {
  @include displayFlex(column);
  background-color: #3b3b3b;
  border-radius: 20px;
  padding: 20px;
  transition: all 0.3s ease;

  .number {
    @include displayFlex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: $primary;
  }

  .image {
    width: 120px;
    border-radius: 50%;
    margin: 10px 25px 10px 0;
  }
}

.creator-card:hover {
  transform: scale(0.95);
}
</style>
