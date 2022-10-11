<template>
  <div>
    <BaseLayout>

    </BaseLayout>
  </div>
</template>

<script>

import BaseLayout from "@/pages/BaseLayout";
import HomePage from "@/pages/HomePage";
import BuilderPage from "@/pages/BuilderPage";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BaseLayout,HomePage,BuilderPage
  }
}
</script>

<style>

*{
  padding: 0;
  margin : auto
}
</style>
