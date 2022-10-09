<template>
  <div class="HomePage-container">
    <img src="@/assets/logo.png" class="logo" alt="logo"/>
    <h1 class="title-homepage">Why VPS Builder ? </h1>

    <p class="text-hp"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus diam, ullamcorper lobortis malesuada eget, dictum quis magna. Sed orci justo, lacinia vitae lobortis vel,
      dictum ut augue. Cras faucibus, tellus vitae maximus consequat, eros odio consequat nunc, vitae consequat odio mauris ut mauris. Mauris justo justo, sollicitudin in pretium eu, vehicula
      eu dui . Aenean arcu dui, suscipit nec dui id, pharetra iaculis quam. Vestibulum in nisi magna. Maecenas vel ipsum lacus.</p>

    <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
      <SplideSlide>
        <img class="logo" src="@/assets/logo.png" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img class="logo" src="@/assets/logo.png" alt="Sample 2">
      </SplideSlide>
    </Splide>


    <h1 class="title-homepage">You want a server ? </h1>

    <!-- HTML !-->
    <button class="button-28" role="button">YES !</button>


  </div>
</template>

<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

export default defineComponent( {
  name : "HomePage",
  components: { Splide, SplideSlide },
} );
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
  font: bold;
}

.text-hp{
  width: 60%;
  margin-top:25px
}

/* Carrousel */

SplideSlide{
  width: 70%;
  background: #11151C;
}

path{
  contain: content;
  display: flex;
}

/* Button */
/* CSS */
.button-28 {
  appearance: none;
  background-color: transparent;
  border: 2px solid #11151C;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 200;
  line-height: normal;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 20%;
  will-change: transform;
  text-align: center;
  justify-content: center;
  display: flex;
}

.button-28:hover {
  color: #fff;
  background-color: #11151C;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}



</style>