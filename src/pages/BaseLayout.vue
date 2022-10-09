<template>
  <Header />
  <slot></slot>
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header,Footer
  }
}
</script>
