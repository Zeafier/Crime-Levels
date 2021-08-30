<template>
  <header>
    <router-link class="nav" active-class="active" to="/">Home</router-link>
    <router-link class="nav" active-class="active" to="/crimes">Crimes</router-link>
    <router-link class="nav" active-class="active" to="map">Map</router-link>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .nav {
    text-decoration: none;
    color: black;
    font-size: 25px;
    padding: 15px;
    margin-left: 30px;
    transition: 0.7s;
    border-radius: 50%;

    &:hover {
      background-color: green;
    }

    &.active {
      background: green;
      font-weight: 700;
    }
  }
}

@media only screen and (max-width: 800px){
  header {
    height: 80px;

    .nav {
      font-size: 18px;
      padding: 5px;
      margin-left: 0
    }
  }
}
</style>
