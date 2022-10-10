<template>
  <div class="container-h">

    <div class="Container-header">
      <ul>
        <li>Home</li>
        <li>Build</li>
        <li>About us</li>
        <li class="connexion-header">Connexion</li>
      </ul>
    </div>
    <div class="container">
      <img src="@/assets/logo.png" class="logo" alt="logo"/>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style scoped>
.container{
  background: #D9D9D9;
}

.Container-header{
  background: #11151C;
  width: 100%;
  padding: 5px 0;
  display: inline-block;
}
.logo{
  text-align:center;
  display:flex;
  width: 250px;
  height: 250px;
}

li{
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  color: #FFFFFF;
  font-size: 25px;
}

li:hover{
  color: gold;
  transition: 0.3s;
}

.connexion-header{
  float: right;
  text-underline: gold;
  text-decoration: underline;
}
</style>