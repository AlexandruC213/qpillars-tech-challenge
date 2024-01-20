<template>
  <div class="creator-card q-mb-lg">
    <div class="d-flex row">
      <div class="number">{{ props.data.id }}</div>
      <q-img :src="props.data.avatar" class="image" />
    </div>
    <div>
      <div class="name text-body-22-bold">{{ props.data.name }}</div>
      <div class="text-body-16">
        <span style="color: #858584">Total Sales:</span>
        {{ props.data.totalSales }}
      </div>
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
  position: relative;
  padding: 20px;
  transition: all 0.3s ease;

  @media (max-width: 1280px) {
    flex-direction: row;
  }

  .number {
    @include displayFlex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: $primary;

    @media (max-width: 1280px) {
      position: absolute;
      top: 25px;
      left: 30px;
      z-index: 2;
    }
  }

  .name {
    text-align: center;

    @media (max-width: 1280px) {
      text-align: left;
    }
  }

  .image {
    width: 120px;
    border-radius: 50%;
    margin: 10px 25px 10px 0;

    @media (max-width: 1280px) {
      width: 60px;
      margin-left: 20px;
    }
  }
}

.creator-card:hover {
  transform: scale(0.95);
}
</style>
