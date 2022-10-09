<template>
  <div class="HomePage-container">
    <img src="@/assets/logo.png" class="logo" alt="logo"/>
    <h1 class="title-homepage">Why VPS Builder ? </h1>

    <p class="text-hp"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus diam, ullamcorper lobortis malesuada eget, dictum quis magna. Sed orci justo, lacinia vitae lobortis vel,
      dictum ut augue. Cras faucibus, tellus vitae maximus consequat, eros odio consequat nunc, vitae consequat odio mauris ut mauris. Mauris justo justo, sollicitudin in pretium eu, vehicula
      eu dui . Aenean arcu dui, suscipit nec dui id, pharetra iaculis quam. Vestibulum in nisi magna. Maecenas vel ipsum lacus.</p>

  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

.HomePage-container{
  background: #D9D9D9;
}

.logo{
  text-align:center;
  display:flex;
  width: 250px;
  height: 250px;
}

.title-homepage{
  text-align: center;
  font-size: 25px;
}

.text-hp{
  width: 60%;
  margin-top:25px
}

</style>