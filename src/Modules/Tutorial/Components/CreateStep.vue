<template>
  <div>
    <h1>New tutorial name: {{this.$route.params.title}}</h1>
    <h1>New tutorial category:v{{this.$route.params.category}}</h1>



    <div>
      <form id="myForm" v-on:submit.prevent="add">

        <div class="form-group">
          <label>Title</label>
          <input type="text" id="title" v-model="form.title">
        </div>

        <div class="form-group">
          <label>Element</label>
          <input type="text" id="element" v-model="form.element">
        </div>

        <div class="form-group">
          <label>Intro</label>
          <input type="text" id="intro" v-model="form.intro">
        </div>

        <div class="form-group">
          <label>Permission</label>
          <input type="text" id="permission" v-model="form.permission">
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Add</button>
        </div>

      </form>
    </div>







<h2>new tutorial</h2>
    <button v-on:click="save">Save tutorial</button>
  <tr v-for="(step, index) in newSteps" :key="index">
    <div>
    Title: <td>{{step.title}}</td>
    Element: <td>{{step.element}}</td>
    Step: <td>{{step.intro}}</td>
    Permission: <td>{{step.permission}}</td>
    </div>
    <p>--------------------------------------------------------------</p>
  </tr>

    <h2>Existing tutorials</h2>
    <tr v-for="(tutorial, index) in existingTutorials" :key="index">
      <div>
        Title: <td>{{tutorial.title}}</td>
        Number of steps: <td>{{tutorial.steps.length}}</td>
        category: <td>{{tutorial.category}}</td>
      </div>
      <p>--------------------------------------------------------------</p>
    </tr>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "CreateTutorial",
  data() {
      return{
        form: {},
        newSteps:[],
        tutorial: {
          title: this.$route.params.title,
          steps: null,
          category: this.$route.params.category
        },
        existingTutorials:[],

    }
  },
  created() {
    axios.get("http://localhost:9090/api/tutorial/getTut")
    .then(response => this.existingTutorials = response.data);
  },

  methods: {
    add: function () {
      let newStep = {
        title: this.form.title,
        element: this.form.element,
        intro: this.form.intro,
        permission: this.form.permission
      }
      this.newSteps.push(newStep);
    },

    save: function(){
      this.tutorial.steps = this.newSteps;
      axios.post("http://localhost:9090/api/tutorial/new", this.tutorial)
      .then(this.$router.push({name: 'Tutorial'}))

    }
  }
}
</script>

<style scoped>

</style>