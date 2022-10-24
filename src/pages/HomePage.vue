<template>

  <div class="HomePage-container">
      <video class="video_nuage" autoplay loop>
        <source src="../assets/nuage.mp4" type=video/mp4 >
      </video>
      <h1 class="title-homepage">What is a VPS builder ? </h1>
      
      <p class="text-hp"> A virtual private server is a type of server that provides a dedicated, isolated, and secure environment for users.
        This type of server is perfect for hosting applications and websites that require high levels of security and privacy.
        Virtual private servers can be purchased as a standalone service or can be included as part of a cloud hosting package.
        A virtual private server is a great option for businesses that need high levels of security and privacy for their websites and applications.
        Virtual private servers can be purchased as a standalone service or can be included as part of a cloud hosting package.
        Cloud hosting packages can offer a number of advantages, including lower pricing and the ability to scale up or down as needed.
        Virtual private servers are perfect for businesses that need a high level of security and privacy for their websites and applications.</p>
      <br>

      <h1 class="title-homepage">Why a VPS Builder ? </h1>
      <p class="text-hp"> There are a lot of reasons why virtual private server (VPS) hosting is considered the best type of hosting for your website.
        Here are five of the most important reasons:</p>
      <br>

        <ul class="text-hp">
          <li>Control: With VPS hosting, you have complete control over the operating system, software, and applications your site runs on.
        You can install whatever you want, and you can even install separate servers for different purposes if you need to.
      This flexibility is a big advantage over shared hosting, where the host provider controls everything.</li>
          <br>

          <li>Security: With VPS hosting, you’re protected from a whole host of security threats.
        Your site is hosted on a separate server, which makes it harder for hackers to gain access. Plus, if you use a reputable provider,
          your site will be backed up regularly, so you’ll always have a copy of your data.</li>
    </ul>
      <br><br>

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
      <h1 class="title-homepage">So, You want a server ? </h1>
    <br>
    <router-link class="button-28" to = '/BuilderChoice' >YES !</router-link>
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
  font-size: 45px;
  font: bold;
}

.text-hp{
  width: 60%;
  margin-top:25px;
  margin: auto;
  text-align: center;
  font-size: 20px;
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
  margin: auto;
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