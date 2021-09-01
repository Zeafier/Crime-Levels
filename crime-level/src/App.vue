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
  components: { //load components
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
@import './style/variables.scss';

* { //clean website margins
  margin: 0;
  padding: 0;
}
// default app settings
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $gray;
}
//container
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
  //header
  .header-default {
    margin: 10px;
    font-size: 36px;
    font-weight: 700;
    word-spacing: 2px;
    text-shadow: 2px 2px 10px black;
  }
}
// wrapper
.wrapper {
  overflow: hidden;
  width: 100%;
  height: fit-content;
}

// mobile version
@media only screen and (max-width: 800px){
  
  // set container to 100%
  .container{
    width: 100%;
    padding: 10px 0;

    .header-default {
      font-size: 25px;
    }
  }
}

</style>
