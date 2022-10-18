<template>
  <div>
    <nav class="Container-header">
      <ul>
        <li><router-link class = 'nav-link' to = '/'><img src="@/assets/Logo-blue.png" class="logo-header" alt="logo"/></router-link></li>
        <li><router-link class = 'nav-link' to = '/buildVPS'>Build</router-link></li>
        <li><router-link class = 'nav-link' to = '/about'>About us</router-link></li>
        <li><router-link to = '/login' @click="switchToLogin()" class="connexion-header nav-link">Logout</router-link></li>
      </ul>
    </nav>
    <div class="trait-footer"></div>
    <div class="container">

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data: () => {
    return {
    }
  },
  methods:{
    switchToLogin() {this.$store.commit('setView','login')}
      },
}
</script>

<style scoped>
.container{
  background: #D9D9D9;
}

li{
  display : inline;
}

.trait-footer{
  background: #364156;
  height: 10px;
  width: 100%;
}

.Container-header{
  background: #11151C;
  width: 100%;
  display: inline-block;
}

.logo-header {
  display: inline-block;
  width: 120px;
  height: 80px;
  margin-top: 9px;
}

.nav-link{
  text-decoration: none;
  margin: 25px;
  color: #FFFFFF;
  font-size: 50px;
}

.nav-link:hover{
  color: gold;
  transition: 0.3s;
}

.connexion-header{
  float: right;
  text-underline: gold;
  text-decoration: underline;
}
</style>