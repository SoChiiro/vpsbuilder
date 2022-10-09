<template>

  <div class="main-footer">
    <div class="trait-footer"></div>
    <div class="container">
      <div class="row">

        <div class="col">
          <h4>VPS Builder</h4>
          <ul classe="list">
            <li><img src="@/assets/logo.png" class="logo_f" alt="logo"/></li>
          </ul>
        </div>

        <div class="col">
          <h4>Coordonées</h4>
          <ul class="list">
            <li>Adresse</li>
            <li>Téléphone</li>
            <li>Email</li>
          </ul>
        </div>

        <div class="col">
          <h4>Navigation</h4>
          <ul class="list">
            <li>Home</li>
            <li>Build</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"

}
</script>



<style scoped>

.main-footer{
  padding-top: 1000px;
  color: #fff;
  background-color: #11151C;
  padding-top: 3em;
  position: relative;
  bottom: 0;
  width: 100%;
}

.trait-footer{
  background: #364156;
  height: 10px;
  width: 100%;
  margin-top: 20px;
}

ul.list{
  list-style-type: none;
  padding-right: 75px;
  padding-left: 75px;
}

li{
  padding: 8px;
  font-size: 25px;
  list-style-type: none;
}

ul{
  text-decoration: none;
}

h4{
  font-size: 25px;
}

.row{
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1400px;
}

li:hover{
  color: gold;
  transition: 0.3s;
}

.col{
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 3em;
}

.logo_f{
  height : 220px;
  width : 220px;
}

</style>