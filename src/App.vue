<template>
  <LoginPage v-if="view === 'login'"/>
  <RegisterPage v-if="view === 'register'"/>
  <BaseLayout v-if="view === 'home'">
  </BaseLayout>
</template>

<script>

import BaseLayout from "@/pages/BaseLayout";
// import HomePage from "@/pages/HomePage";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import './css/dist/output.css';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BaseLayout,
    // HomePage,
    LoginPage,
    RegisterPage,
  },
  computed:{
    view() { return this.$store.getters.getView }
  }

}
</script>

<style>

*{
  padding: 0;
  margin : auto;
}
</style>
