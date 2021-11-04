<template>
  <div>
    <h1>Create a new Tutorial</h1>

    <div>
      <form id="myForm">

        <div class="form-group">
          <label>Title</label>
          <input type="text" id="title">
        </div>

        <div class="form-group">
          <label>Category</label>
          <input name="category" type="text" id="category">
        </div>

        <button v-on:click="addSteps">Add Steps</button>


      </form>
    </div>

    <h2>Existing tutorials</h2>
    <tr v-for="(tutorial, index) in existingTutorials" :key="index">
      <div>
        Title:
        <td>{{ tutorial.title }}</td>
        Number of steps:
        <td>{{ tutorial.steps.length }}</td>
        category:
        <td>{{ tutorial.category }}</td>
      </div>
      <p>--------------------------------------------------------------</p>
    </tr>


  </div>

</template>

<script>
//import router from "@/router";

import axios from "axios";

export default {
  name: "CreateTutorial",
  data() {
    return {
      existingTutorials: [],

    }
  },
  created() {
    axios.get("http://localhost:9090/api/tutorial/getTut")
        .then(response => this.existingTutorials = response.data);
  },
  methods: {
    addSteps: function () {
      this.$router.push({
        name: 'addSteps',
        params: {title: document.getElementById('title').value, category: document.getElementById('category').value}
      })

    }
  }
}

</script>

<style scoped>

</style>