<template>

  <h1>CHOOSE YOUR OS</h1>
  <p class="text-build" >To start making your VPS you must first choose your OS. You can choose between: Windows, Linux and MAC. Be careful the choice of your OS will have consequences on the choice of the components and the price. Note that the choice of the OS will also impact the hosting countries.
    Once you have made your choice we will offer you different pre-builds for your VPS that you can modify with some leeway. Thank you for trusting us.
    </p>
  <div class="os-container">

    <router-link to = '/Windows' ><div class="ui raised padded container segment" >
      <p>WINDOWS</p>
      <img src="@/assets/windows_logo.png" class="logo-windows" alt="logo_windows"/>
    </div></router-link><br><br>

    <router-link to = '/Linux' ><div class="ui raised padded container segment" >
      <p>LINUX</p>
      <img src="@/assets/linux_logo.png" class="logo-windows" alt="logo_windows"/>
    </div></router-link><br><br>

    <router-link to = '/Mac' ><div class="ui raised padded container segment" >
      <p>MAC OS</p>
      <img src="@/assets/mac_logo.png" class="logo-windows" alt="logo_windows"/>
    </div></router-link><br><br>
  </div>
  <br>

</template>

<script>
export default {
  name: "BuilderChoice"
}
</script>

<style scoped>

h1{
  margin: 40px auto;
  font-family: 'Ubuntu', sans-serif;
  font-size: 100px;
  font-weight: bold;
  color: #4da8b7;
  text-align: center;
  letter-spacing: 5px;
  text-shadow: 2px 7px 5px rgba(0,0,0,0.3),
  0px -4px 10px rgba(255,255,255,0.3);
}

.text-build{
  width: 60%;
  margin: auto;
  text-align: center;
  font-size: 20px;
  color: #11151C;
}

.logo-windows{
  width: 15%;
  height: 15%;
}

.ui.container {
  width: 400px;
  margin: 50px;
  text-align: center;
}

.padded.container:hover{
  color: gold;
}
.ui.raised.padded.container.segment:hover{
  box-shadow: rgb(255, 215, 0) 0px 2px 5px;
}

.os-container{
  margin: 2%;
}


</style>