<template>
  <div>
    <h1>Create a new tour!</h1>

    <div>
      <form id="myForm">


        <div class="d-md-inline-flex flex-column" style="width: 20%">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Title</span>
            <input type="text" id="title" class="form-control"
                   aria-describedby="basic-addon1">
          </div>


          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">Category</span>
            <input type="text" id="category" class="form-control"
                   aria-describedby="basic-addon1">
          </div>
        </div>


      </form>
      <div class="form-group">
        <button class="btn btn-outline-success btn-lg" v-on:click="addSteps"> Continue </button>
      </div>
    </div>

    <h2 class="p-3">Existing tutorials</h2>

    <tr v-for="(tutorial, index) in existingTutorials" :key="index">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <div class="row">
            <div class="col-5">
              Title:
            </div>
            <div class="col-5">
              {{ tutorial.title }}
            </div>
            <div class="col-5">
              Number of steps:
            </div>
            <div class="col-5">
              {{ tutorial.steps.length }}
            </div>
            <div class="col-5">
              Category:
            </div>
            <div class="col-5">
              {{ tutorial.category }}
            </div>
          </div>
        </div>
      </div>
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