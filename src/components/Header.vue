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
    <div class="trait-header"></div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style scoped>
.container-h{
}


.Container-header{
  background: #11151C;
  width: 100%;
  display: inline-block;
}

.trait-header{
  background: #364156;
  height: 10px;
  width: 100%;
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