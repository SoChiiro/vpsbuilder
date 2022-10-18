<template>
  <div class="HomePage-container">

      <video class="video_nuage" autoplay loop>
        <source src="../assets/nuage.mp4" type=video/mp4 >
      </video>
      <h1 class="title-homepage">What is a VPS builder ? </h1>
      
      <p class="text-hp"> A virtual private server, also known as a VPS, acts as an isolated, virtual environment on a physical server, which is owned and operated by a cloud or web hosting provider.
        VPS hosting uses virtualization technology to split a single physical machine into multiple private server environments that share the resources.</p>

      <br>

      <h1 class="title-homepage">Why a VPS Builder ? </h1>

      <p class="ui segment grey text-hp"> For many businesses, a VPS, or Virtual Private Server, is the perfect option for website hosting because: A VPS can be faster and more stable than other types of hosting.
        A VPS can improve the experience of customers visiting you online. A VPS is often the best balance of cost and performance.</p>

      <br>
      <br>

    <h1 class="title-homepage">OUR LOCALS </h1>
      <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
        <SplideSlide>
          <img class="carousel-image" src="@/assets/jeune.jpg" alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
          <img class="carousel-image" src="@/assets/Serveur.jpg" alt="Sample 2">
        </SplideSlide>
        <SplideSlide>
          <img class="carousel-image" src="@/assets/bureaux.jpg" alt="Sample 3">
        </SplideSlide>
      </Splide>

    <br><br>
      <h1 class="title-homepage">You want a server ? </h1>
    <br>
      <!-- HTML !-->
      <button class="button-28" to = '/buildVPS' role="button">YES !</button>
    <br><br><br>
    
      
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

.carousel-image{
  width: 900px;
  height: 500px;
  text-align:center;
  margin:auto;
  display:flex;
}

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
  box-shadow: rgb(17, 21, 28) 0 10px 17px;
  transform: translateY(-2px);
}


.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}

.video_nuage{
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  margin-bottom: 80px;
}


</style>