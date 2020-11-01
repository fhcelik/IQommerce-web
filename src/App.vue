<template>
  <div id="app">
    <GetUserData msg="Users" />
  </div>
</template>

<script>
import GetUserData from "./components/GetUserData";

export default {
  name: "App",
  components: {
    GetUserData
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>