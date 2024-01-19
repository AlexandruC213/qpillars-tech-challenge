<template>
  <div class="homepage-container">
    <DisplayCard cardType="row" :data="heroSectionData" />
    <DisplayCard cardType="column" :data="trendingCollectionData">
      <template v-slot:content>
        <div class="d-flex row justify-between">
          <TrendingCard
            v-for="element in trendingCollectionData.elements"
            :key="element.id"
            :data="element"
          />
        </div>
      </template>
    </DisplayCard>
    <DisplayCard
      cardType="column"
      :data="topCreatorsData"
      :extraBtnDetails="topCreatorsBtn"
      extraBtn
    >
      <template v-slot:content>
        <div class="d-flex row items-center justify-between">
          <CreatorCard
            v-for="el in topCreatorsData.elements"
            :key="el.id"
            :data="el"
          />
        </div>
      </template>
    </DisplayCard>

    <DisplayCard cardType="column" :data="categoriesData">
      <template v-slot:content>
        <div class="d-flex row items-center justify-between">
          <CategoryCard
            v-for="el in categoriesData.elements"
            :key="el.id"
            :data="el"
          />
        </div>
      </template>
    </DisplayCard>

    <DisplayCard
      cardType="column"
      :data="moreNFTData"
      :extraBtnDetails="discoverNFTBtn"
      extraBtn
    >
      <template v-slot:content>
        <div class="d-flex row items-center justify-between">
          <AvatarCard
            v-for="card in moreNFTData.cards"
            :key="card.id"
            :cardDetails="card"
            style="width: 31%"
          />
        </div>
      </template>
    </DisplayCard>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";

import DisplayCard from "../components/Cards/DisplayCard.vue";
import TrendingCard from "../components/Cards/TrendingCard.vue";
import CreatorCard from "../components/Cards/CreatorCard.vue";
import CategoryCard from "../components/Cards/CategoryCard.vue";
import AvatarCard from "../components/Cards/AvatarCard.vue";

// Move this data on store

const heroSectionData = ref({
  title: "Discover digital art & Collect NFTs",
  description:
    "NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.",
  notes: [
    {
      number: "240k+",
      text: "Total Sale",
    },
    {
      number: "100k+",
      text: "Auctions",
    },
    {
      number: "240k+",
      text: "Artists",
    },
  ],
  card: {
    image: "/public/images/heroSection/hero-section.svg",
    title: "Space Walking",
    artistAvatar: "/public/images/heroSection/artist-avatar.svg",
    artistName: "Animakid",
    // extraDetails: {
    //   price: "Price",
    //   priceValue: "1.63 ETH",
    //   bid: "Highest Bid",
    //   bidValue: "0.33 wETH",
    // },
  },
});

const trendingCollectionData = ref({
  title: "Trending Collection",
  description: "Checkout our weekly updated trending collection.",
  elements: [
    {
      id: 1,
      mainImage: "/public/images/trendingCollection/1-title.svg",
      images: [
        "/public/images/trendingCollection/1-1.svg",
        "/public/images/trendingCollection/1-2.svg",
      ],
      title: "DSGN Animals",
      artistAvatar: "/public/images/trendingCollection/1-avatar.svg",
      artistName: "MrFox",
    },
    {
      id: 2,
      mainImage: "/public/images/trendingCollection/2-title.svg",
      images: [
        "/public/images/trendingCollection/2-title.svg",
        "/public/images/trendingCollection/2-title.svg",
      ],
      title: "Magic Mushrooms",
      artistAvatar: "/public/images/trendingCollection/2-avatar.png",
      artistName: "Shroomie",
    },
    {
      id: 3,
      mainImage: "/public/images/trendingCollection/3-title.svg",
      images: [
        "/public/images/trendingCollection/3-title.svg",
        "/public/images/trendingCollection/3-title.svg",
      ],
      title: "Disco Machines",
      artistAvatar: "/public/images/trendingCollection/3-avatar.png",
      artistName: "BeKind2Robots",
    },
  ],
});

const topCreatorsData = ref({
  title: "Top Creators",
  description: "Checkout Top Rated Creators on the NFT Marketplace",
  elements: [
    {
      id: 1,
      name: "Keepitreal",
      totalSales: "34.53 ETH",
      avatar: "/public/images/topCreators/avatar.svg",
    },
  ],
});

const topCreatorsBtn = ref({
  icon: "img:public/icons/homePage/rocket-launch-purple.svg",
  text: "View Rankings",
  style: "padding: 0 50px; margin-top: 15px",
});

const categoriesData = ref({
  title: "Browse Categories",
  elements: [
    {
      id: 0,
      image: "/public/images/categoryCard/image.png",
      title: "Art",
    },
  ],
});

const moreNFTData = ref({
  title: "Discover More NFTs",
  description: "Explore new trending NFTs",
  cards: [
    {
      id: 1,
      image: "/public/images/heroSection/hero-section.svg",
      title: "Distant Galaxy",
      artistAvatar: "/public/images/heroSection/artist-avatar.svg",
      artistName: "MoonDancer",
      extraDetails: {
        price: "Price",
        priceValue: "1.63 ETH",
        bid: "Highest Bid",
        bidValue: "0.33 wETH",
      },
    },
    {
      id: 2,
      image: "/public/images/heroSection/hero-section.svg",
      title: "Life on Edena",
      artistAvatar: "/public/images/heroSection/artist-avatar.svg",
      artistName: "NebulaKid",
      extraDetails: {
        price: "Price",
        priceValue: "1.63 ETH",
        bid: "Highest Bid",
        bidValue: "0.33 wETH",
      },
    },
    {
      id: 3,
      image: "/public/images/heroSection/hero-section.svg",
      title: "AstroFiction",
      artistAvatar: "/public/images/heroSection/artist-avatar.svg",
      artistName: "Spaceone",
      extraDetails: {
        price: "Price",
        priceValue: "1.63 ETH",
        bid: "Highest Bid",
        bidValue: "0.33 wETH",
      },
    },
  ],
});

const discoverNFTBtn = ref({
  icon: "img:public/icons/homePage/eye.svg",
  text: "See All",
  style: "padding: 0 50px; margin-top: 15px",
});

onBeforeMount(() => {
  // Generate dummy data
  for (let i = 0; i < 11; i++) {
    const newCreator = {
      ...topCreatorsData.value.elements[i],
      id: topCreatorsData.value.elements[i].id + 1,
    };
    topCreatorsData.value.elements.push(newCreator);
  }
  for (let i = 0; i < 7; i++) {
    const newCategory = {
      ...categoriesData.value.elements[i],
      id: categoriesData.value.elements[i].id + 1,
    };
    categoriesData.value.elements.push(newCategory);
  }
});
</script>
