<template>
  <q-footer class="container">
    <div class="footer text-body-16">
      <div class="q-mt-md">
        <div @click="router.push('/')" class="header-logo cursor-pointer">
          <q-icon name="storefront" size="2rem" color="secondary" />
          <q-img :src="logo" width="200px" class="q-ml-md" />
        </div>
        <div class="q-mt-md">
          NFT marketplace UI created <br />
          with Anima for Figma. <br />
        </div>
        <div class="q-my-md">Join our community</div>
        <div class="d-flex row">
          <q-icon
            name="img:/icons/footer/discord-logo.svg"
            size="32px"
            class="q-mr-md"
          />
          <q-icon name="img:/icons/footer/instagram-logo.svg" size="32px" />
          <q-icon
            name="img:/icons/footer/twitter-logo.svg"
            size="32px"
            class="q-mx-md"
          />
          <q-icon name="img:/icons/footer/youtube-logo.svg" size="32px" />
        </div>
      </div>
      <div class="links-container d-flex column">
        <div class="text-body-22-bold q-mb-lg text-white">Explore</div>
        <router-link to="/marketplace">Marketplace</router-link>
        <router-link to="/rankings" class="q-my-md">Rankings</router-link>
        <router-link to="/connect-wallet">Connect a wallet</router-link>
      </div>
      <div class="d-flex column">
        <div class="text-body-22-bold text-white">Join Our Weekly Digest</div>
        <div class="q-mt-lg q-mb-md">
          Get exclusive promotions & updates straight to your inbox.
        </div>
        <div class="input-container">
          <input
            type="text"
            class="input"
            placeholder="Enter your email here"
          />
          <ButtonDesign class="button" text="Subscribe" />
        </div>
      </div>
    </div>
    <div class="footer-text">Ⓒ NFT Market. Use this template freely.</div>
  </q-footer>
</template>

<script setup>
import { useRouter } from "vue-router";

import logo from "/public/images/logo.svg";
import ButtonDesign from "./ButtonDesign.vue";

const router = useRouter();
</script>

<style lang="scss" scoped>
.container {
  @include displayFlex(column);
  width: 100%;
  height: auto;
  background-color: #3b3b3b;
  position: absolute;
  bottom: 0;
  left: 0;
}
.footer {
  @include displayFlex(row, center, space-between);
  color: #ccc;
  width: 1000px;
  padding: 40px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #858584;
}

.footer-text {
  width: 1000px;
  margin-bottom: 30px;
  text-align: left;
  color: #ccc;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
}

.input-container {
  position: relative;
  width: 400px;
  height: 60px;

  .input {
    width: 400px;
    height: 60px;
    border-radius: 20px;
    border: none;
    outline: none;
    padding-left: 15px;
  }

  .button {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.links-container a {
  text-decoration: none;
  color: #ccc;
}
</style>
