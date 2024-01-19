<template>
  <q-card class="card-container" flat>
    <q-img :src="props.cardDetails.image" />
    <div class="full-width q-py-lg q-pl-md">
      <div class="text-body-22-bold">{{ props.cardDetails.title }}</div>
      <div class="d-flex row items-center q-mt-sm">
        <q-img :src="props.cardDetails.artistAvatar" width="24px" />
        <div class="q-pl-md text-body-16">
          {{ props.cardDetails.artistName }}
        </div>
      </div>
      <div
        v-if="props.cardDetails.extraDetails?.price"
        class="d-flex row justify-between full-width q-mt-md q-pr-lg"
      >
        <div>
          <div class="extra-details-title">
            {{ props.cardDetails.extraDetails.price }}
          </div>
          <div class="text-body-16">
            {{ props.cardDetails.extraDetails.priceValue }}
          </div>
        </div>
        <div class="d-flex column items-end">
          <div class="extra-details-title">
            {{ props.cardDetails.extraDetails.bid }}
          </div>
          <div class="text-body-16">
            {{ props.cardDetails.extraDetails.bidValue }}
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
const props = defineProps({
  cardDetails: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card-container {
  @include displayFlex(column, flex-start, flex-start);
  border-radius: 20px;
  background-color: #3b3b3b;

  .extra-details-title {
    color: #858584;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
