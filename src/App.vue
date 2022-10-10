<template>
  <div>
    <BaseLayout>
      <Builder/>
    </BaseLayout>
  </div>
</template>

<script>

import BaseLayout from "@/pages/BaseLayout";
import HomePage from "@/pages/HomePage";
import Builder from "@/pages/Builder";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BaseLayout,HomePage,Builder
  }
}
</script>

<style>

*{
  padding: 0;
  margin : auto
}
</style>
