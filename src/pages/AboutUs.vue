<template>
  <div class="AboutUs-container">
    <div class="ui two column doubling stackable grid container segment">
      <div class="column" style="border-right: #11151C 10px;">
        <img src="../assets/thomas-pdp.jpg" class="image-about-us">

        <p><strong>Name</strong> : MARIOTTE</p>
          <p><strong>First name</strong>  : Thomas</p>
          <p><strong>Age</strong>  : 22 years old</p>
          <p><strong>Job</strong>  : Thomas to lead the project. He realized the figma and all the frames. He also coded the home/build/Windows.. and about us pages. He also made the header and the footer.
            Overall he had all the ideas for the design and for each page. Real pillar for the project he did his best to make it a success. </p>
      </div>

      <div class="column">
        <img src="../assets/thomas-pdp.jpg" class="image-about-us">
        <p>blablabla</p>
      </div>

      <div class="ui two column doubling stackable grid container segment">
        <div class="column">
          <img src="../assets/thomas-pdp.jpg" class="image-about-us">
          <p>blablablablabla</p>
        </div>

        <div class="column">
          <img src="../assets/thomas-pdp.jpg" class="image-about-us">
          <p>blablabla</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>

.AboutUs-container{
  background-image: url("../assets/background.jpg");
}
.image-about-us{
  width: 150px;
  height: 170px;
  border-radius: 50%;
}

.column{
  margin: 20px auto;
  text-align: center;
  list-style-image: none;
  text-decoration: none !important;
}

li{
  margin-left: 2%;
  list-style-image: none !important;
}
li::marker{
  list-style-image: none !important;
}

.ui.grid.segment{
  margin: 0;
}

</style>