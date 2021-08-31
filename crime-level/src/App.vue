<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
@import './style/variables.scss';


* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $gray;
}

.container {
  width: 90%;
  margin: 30px auto;
  overflow: auto;
  min-height: 100px;
  height: fit-content;
  padding: 30px;
  background-color: $darkgreen;
  color: $lightred;
  box-shadow: 0 0 10px black;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: fit-content;
}

@media only screen and (max-width: 800px){
  .container{
    width: 100%;
    padding: 0;
  }
}

</style>
