<template>
  <header>
    <div class="logo" @click="loadHome"><p>C</p></div>
    <!-- Navigation links -->
    <nav>
      <router-link class="nav" active-class="active" to="/">Home</router-link>
      <router-link class="nav" active-class="active" to="/crimes">Crimes</router-link>
      <router-link class="nav" active-class="active" to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    //Load home page when logo clicked
    loadHome() {
      this.$router.push('/');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/variables.scss';

//header
header {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: $lightred;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  //logo
  .logo {
    width: 100px;
    height: 60px;
    background-color: $darkgreen;
    box-shadow: 1px 1px 10px black;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 25px;
      text-shadow: 2px 2px 5px black;
      font-weight: 700;
      color: $gray;
    }
  }

  //nav bar 
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    //navigation links
    .nav {
      text-decoration: none;
      color: black;
      text-transform: uppercase;
      font-size: 25px;
      padding: 15px;
      margin-left: 30px;
      transition: 0.7s;
      border-radius: 50%;
      color: $darkgreen;
      font-weight: 400;
      //hover
      &:hover {
        background-color: $darkgreen;
        color: $gray;
      }
      //active class
      &.active {
        background: $darkgreen;
        color: $gray;
        font-weight: 700;
      }
    }
  }
}
// mobile version
@media only screen and (max-width: 800px){
  //header
  header {
    height: 120px;
    flex-direction: column;
    //logo
    .logo {
      margin-top: 10px;
      width: 70px;
      height: 40px;
      //paragraph
      p{
        font-size: 20px;
      }
    }
    //navigation
    nav{
      widows: 100%;

      .nav {
        font-size: 18px;
        padding: 8px;
        margin-left: 0;

        &.active {
          font-weight: 500;
        }
      }
    }
  }
}
</style>
