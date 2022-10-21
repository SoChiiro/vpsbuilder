<template>
  <div class="formbold-main-wrapper">
    
    <div class="formbold-form-wrapper">
      <form action="" method="POST">
        <fieldset>
          <div class="formbold-mb-5">
          <label for="storage" class="formbold-form-label"> DISK STORAGE(MB) </label>
          <input
            type= "number"
            min= "8192"
            max= "200480"
            step= "1024"
            name= "storage"
            id= "storage"
            placeholder= "ENTER THE DISK STORAGE (min : 8192 in MB)"
          />
          <label for="RAM" class="formbold-form-label"> MEMORY SIZE(MB) </label>
          <input
              type= "number"
              min= "2048"
              max="8192"
              step= "1024"
              name= "RAM"
              id= "RAM"
              placeholder= "ENTER THE MEMORY SIZE(min : 2048  in MB)"
          />
          <label for="cpu" class="formbold-form-label"> CPU FREQUENCY(GHz) </label>
          <input
              type= "number"
              min= "2"
              max= "6"
              step= "0.1"
              name= "cpu"
              id= "cpu"
              placeholder= "ENTER THE CPU FREQUENCY(min : 2 in GHz)"
          />
          </div>
          <div class="container">
            <button class="button-28">GO !</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>

export default {
    name: "BuilderPage",
    data: () => {
      return {
      }
    },
    components: {  }
}

</script>

<style scoped>
body {
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.container{
  display: flex;
  justify-content: center;
}


/* Button */
/* CSS */
.button-28 {
  text-align: center;
  border-radius: 6px;
  padding: 14px 32px;
  width: 20%;
  cursor: pointer;
  border-radius: 6px;
  padding: 32px;
  margin: 5px 0;
  border: 1px solid;
  appearance: none;
  background-color: transparent;
  box-sizing: border-box;
  color: #3B3B3B;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  line-height: normal;
  min-height: 60px;
  min-width: 0;
  outline: none;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  text-align: center;
  justify-content: center;
  display: flex;
}

.button-28:hover {
  color: #fff;
  background-color: #11151C;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D9D9D9;
    padding: 48px;
  }
  
  .formbold-form-wrapper {
    margin: 0 auto;
    max-width: 700px;
    padding: 2px;
    width: 100%;
    background: #D9D9D9;
  }

  .formbold-mb-5 {
    margin-bottom: 20px;
    display : flex;
    justify-content: space-between;
    margin: 10% 5%;
}
.formbold-form-label {
    display: block;
    font-weight: bold;
    font-size: 16px;    
    align-self : center;
    color: #07074d;
    margin-bottom: 12px;
    width : 25%;
}
/* form */
.formbold-form-input {
    width: 75%;
    padding: 12px 24px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: white;
    font-weight: 500;
    font-size: 16px;
    color: #6b7280;
    outline: none;
    resize: none;
}
</style>

