<template>
  <div class="hello">
    <h1>BEERS</h1>
    <table class="beers">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Tag Line</th>
        <th>First Brewed</th>
      </tr>
      <tr v-for="beer in beers" :key="beer.id">
        <td>{{beer.id}}</td>
        <td>{{beer.name}}</td>
        <td>{{beer.tagline}}</td>
        <td>{{beer.first_brewed}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "get-beers",
  computed: mapState(['beers']),
  created() {
    this.$store.dispatch('fetchBeers');
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border: 2px solid black;
  border-collapse: collapse;
}
th {
  border: 1px solid gray;
  background: rgb(228, 200, 196);
}
td {
  border: 1px solid gray;
  background: rgb(233, 233, 161);
}
</style>