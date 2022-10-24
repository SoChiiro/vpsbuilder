<template>
  <div v-for = "field in vps" :key="field.index">
    <p v-for="(field, key) in field" :key = "key">{{key}} : {{field.value}}</p>
  </div>
</template>

<script>
export default {
  name: "VPSPage",
  data(){
    return {
      vps : this.$store.getters.getDatas.savedVPS
    }
  }
}
</script>

<style scoped>

</style>