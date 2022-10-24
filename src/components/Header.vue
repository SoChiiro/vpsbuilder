<template>
  <div>
    <nav class="Container-header">
      <ul>
        <li><router-link class = 'nav-link' to = '/'><img src="@/assets/Logo-blue.png" class="logo-header" alt="logo"/></router-link></li>
        <li><router-link class = 'nav-link' to = '/builderChoice'>Build</router-link></li>
        <li><router-link class = 'nav-link' to = '/myvps'>My VPS</router-link></li>
        <li><router-link class = 'nav-link' to = '/aboutUs'>About us</router-link></li>
        <li><router-link class= "nav-link" style ="float:right;" to = '/login' @click="switchToLogin()" >Log Out</router-link></li>
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
    switchToLogin() {this.$store.commit('setView','login')
    }
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
  height: 110px;
}

.logo-header {
  display: inline-block;
  width: 120px;
  height: 80px;
  margin-top: 9px;
}

.nav-link{
  text-decoration: none;
  margin: 60px;
  color: #FFFFFF;
  font-size: 40px;
}

.nav-link:hover{
  color: gold;
  transition: 0.3s;
  text-shadow: 0 0 5px #ffd700,
  0 0 25px #ffd700,
  0 0 50px #ffd700,
  0 0 100px #ffd700;
}



</style>