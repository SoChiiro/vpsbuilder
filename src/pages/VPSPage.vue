<template>

  <h1>MY VPS</h1>
  <div class="ui raised very padded text container segment" v-for = "field in vps" :key="field.index">
    <p v-for="(field, key) in field" :key = "key">{{key}} : {{field.value}}</p>
  </div>
  <br>
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

p{
  text-align: center;
}
h1{
  margin: 40px auto;
  font-family: 'Ubuntu', sans-serif;
  font-size: 80px;
  font-weight: bold;
  color: #364156;
  text-align: center;
  letter-spacing: 5px;
  text-shadow: 2px 7px 5px rgba(0,0,0,0.3),
  0px -4px 10px rgba(255,255,255,0.3);
}


</style>