<template>
  <div>
    <nav class="Container-header">
      <router-link class = 'nav-link' to = '/'>Home</router-link>
      <router-link class = 'nav-link' to = '/buildVPS'>Build</router-link>
      <router-link class = 'nav-link' to = '/about'>About us</router-link>
      <router-link to = '/login' @click="switchToLogin()" class="connexion-header nav-link">Logout</router-link>
    </nav>
    <div class="container">
      <img src="@/assets/logo.png" class="logo" alt="logo"/>
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

.Container-header{
  background: #11151C;
  width: 100%;
  display: inline-block;
}
.logo{
  text-align:center;
  display:flex;
  width: 200px;
  height: 200px;
}

.nav-link{
  text-decoration: none;
  display: inline-block;
  margin: 30px;
  color: #FFFFFF;
  font-size: 25px;
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