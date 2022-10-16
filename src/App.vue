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
import RegisterPage from "@/pages/RegisterPage.vue";

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
<script setup>

</script>


<style>

*{
  padding: 0;
  margin : auto;
}

/* own scrollbar */
html {
  /* scrollbar firefox */
  scrollbar-color: rgb(217, 217, 217) rgb(17, 21, 28);
}

/* Note: The -webkit-scrollbar is not supported by Firefox or IE and Edge. */

::-webkit-scrollbar {
  /* width */
  width: 8px;
}

::-webkit-scrollbar-track {
  /* Track */
  box-shadow: inset 0 0 5px #11151c;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  /* Handle */
  background: rgb(17, 21, 28);
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  /* Handle on hover */
  background: rgb(17, 21, 28);
}

::-webkit-scrollbar-track-piece {
  /* not handle on */
  background: rgb(217, 217, 217);
}



</style>
