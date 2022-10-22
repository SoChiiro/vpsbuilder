<template>
  <div class="container">
    <div class="header">
        <img src="@/assets/logo.png" class="logo" alt="Logo" />
    </div>
    <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
        <SplideSlide>
            <div class="form-content">
                <div class="form-logo">
                    <img src="@/assets/mac_logo.png" class="os-logo" alt="mac_logo" />
                </div>
                <div class="form">
                    <form action="">
                        <input type="text" placeholder="CPU type" name="cpuType" />
                        <input type="text" placeholder="ram" name="ram" />
                        <input type="text" placeholder="storage" name="storage" />
                        <input type="text" placeholder="bandwidth" name="bandwidth" />
                        <input type="text" placeholder="version" name="bandwidth" />
                        <select name="country" id="country_selection">
                            <option value="">country</option>
                            <option value="france">france</option>
                            <option value="espagne">espagne</option>
                            <option value="allemagne">allemagne</option>
                        </select>
                        <div class="form-buttons">
                            <button type="submit">submit</button>
                            <button type="button">customize</button>
                        </div>
                    </form>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div class="form-content">
                <div class="form-logo">
                    <img src="@/assets/linux_logo.png" class="os-logo" alt="mac_logo" />
                </div>
                <div class="form">
                    <form action="">
                        <input type="text" placeholder="VM type" name="vmType" />
                        <input type="text" placeholder="CPU frequency" name="cpuFrequency" />
                        <input type="text" placeholder="ram" name="ram" />
                        <input type="text" placeholder="storage" name="storage" />
                        <input type="text" placeholder="bandwidth" name="bandwidth" />
                        <select name="country" id="country_selection">
                            <option value="">country</option>
                            <option value="france">france</option>
                            <option value="espagne">espagne</option>
                            <option value="allemagne">allemagne</option>
                        </select>
                        <div class="form-buttons">
                            <button type="submit">submit</button>
                            <button type="button">customize</button>
                        </div>
                    </form>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div class="form-content">
                <div class="form-logo">
                    <img src="@/assets/windows_logo.png" class="os-logo" alt="mac_logo" />
                </div>
                <div class="form">
                    <form action="">
                        <input type="text" placeholder="core" name="core" />
                        <input type="text" placeholder="CPU frequency" name="cpuFrequency" />
                        <input type="text" placeholder="ram" name="ram" />
                        <input type="text" placeholder="storage" name="storage" />
                        <input type="text" placeholder="bandwidth" name="bandwidth" />
                        <input type="text" placeholder="version" name="bandwidth" />
                        <select name="country" id="country_selection">
                            <option value="">country</option>
                            <option value="france">france</option>
                            <option value="espagne">espagne</option>
                            <option value="allemagne">allemagne</option>
                        </select>
                        <div class="form-buttons">
                            <button type="submit">submit</button>
                            <button type="button">customize</button>
                        </div>
                    </form>
                </div>
            </div>
        </SplideSlide>
    </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: 'OSForms',
  components: { Splide, SplideSlide },
}
</script>

<style scoped>
.container {
    background: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.logo {
    width: 200px;
    height: 200px;
}

.form-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.os-logo {
    width: 100px;
    height: 100px;
}
.form {
    margin: 15px;
    padding: 30px;
    background: black;
    color: white;
    width: 300px;
    height: auto;
}

input[type="text"], #country_selection {
    background: none;
    border: none;
    color: white;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 14px;
    text-transform: uppercase;
    width: 100%
}

#country_selection {
    padding: 0 !important;
}
input[type="text"]:focus {
    outline: none;
}

::placeholder {
    color: white;
    opacity: 1;
}
.form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
button {
    padding: 10px;
    border: none;
    color: white;
    background: #364156;
    text-transform: uppercase;
    font-size: 10px;
    cursor: pointer;
}

button:hover {
    background: dimgray;
}

Splide {
    display: block;
}

SplideSlide{
  width: 70%;
  background: #11151C;
}
</style>