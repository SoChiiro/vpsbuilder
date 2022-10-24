<template>
  <LoginPage v-if="view === 'login'"/>
  <RegisterPage v-if="view === 'register'"/>
  <BaseLayout v-if="view === 'home'">
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/pages/BaseLayout";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import BuilderChoice from "@/pages/BuilderChoice";
import Windows from "@/pages/Windows";
import Linux from "@/pages/Linux";
import Mac from "@/pages/Mac";
import aboutUs from "@/pages/AboutUs";
import VPSPage from "@/pages/VPSPage";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BaseLayout,
    // HomePage,
    LoginPage,
    RegisterPage,
    // eslint-disable-next-line vue/no-unused-components
    BuilderChoice,
    // eslint-disable-next-line vue/no-unused-components
    Windows,Linux,Mac,
    // eslint-disable-next-line vue/no-unused-components
    aboutUs,
    // eslint-disable-next-line vue/no-unused-components
    VPSPage
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

html {
  scrollbar-color: rgb(217, 217, 217) rgb(17, 21, 28);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #11151c;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: rgb(17, 21, 28);
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 21, 28);
}

::-webkit-scrollbar-track-piece {
  background: rgb(217, 217, 217);
}
</style>
